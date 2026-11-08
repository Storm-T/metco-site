'use client'

import { useEffect } from 'react'

export default function ScrollEffects() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('main > section, main > footer'),
    )

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('motion-visible'))
      return
    }

    document.documentElement.classList.add('motion-enabled')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('motion-visible')
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    sections.forEach((section, index) => {
      section.classList.add('motion-reveal')
      section.style.setProperty('--reveal-delay', `${(index % 3) * 70}ms`)
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('motion-enabled')
    }
  }, [])

  return null
}
