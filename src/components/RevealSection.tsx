'use client'

import { type ReactNode, useEffect, useRef, useState } from 'react'

type RevealDirection = 'up' | 'left' | 'right'

export default function RevealSection({
  children,
  direction = 'up',
}: {
  children: ReactNode
  direction?: RevealDirection
}) {
  const element = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const node = element.current
    if (!node || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      setVisible(true)
      observer.disconnect()
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' })

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return <div ref={element} className={`scroll-reveal scroll-reveal--${direction}${visible ? ' is-visible' : ''}`}>{children}</div>
}
