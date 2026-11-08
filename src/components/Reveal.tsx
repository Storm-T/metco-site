'use client'

import { useEffect } from 'react'

/**
 * Prints the bar's own rendered width as a percentage every frame, so the number
 * can never drift from the bar the way two independent timers would.
 */
function followBar(bar: HTMLElement, frames: Set<number>) {
  const label = bar.querySelector<HTMLElement>('[data-bar-label]')
  const track = bar.parentElement
  if (!label || !track) return

  const target = Number(bar.dataset.barTo)
  const suffix = label.dataset.barLabel ?? ''

  const tick = () => {
    const full = track.getBoundingClientRect().width
    const percent = full ? (bar.getBoundingClientRect().width / full) * 100 : 0

    if (Math.round(percent) >= target) {
      label.textContent = `${target}${suffix}`
      return
    }

    label.textContent = `${Math.round(percent)}${suffix}`
    frames.add(requestAnimationFrame(tick))
  }

  frames.add(requestAnimationFrame(tick))
}

/** Observes every [data-reveal] element on the page and plays its entrance animation once. */
export default function Reveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!nodes.length) return

    if (!('IntersectionObserver' in window)) return

    document.documentElement.classList.add('reveal-ready')

    const frames = new Set<number>()

    // Empty every bar up front; the observer fills it back when its block appears.
    document.querySelectorAll<HTMLElement>('[data-bar-to]').forEach((bar) => {
      bar.style.width = '0%'
      const label = bar.querySelector<HTMLElement>('[data-bar-label]')
      if (label) label.textContent = `0${label.dataset.barLabel ?? ''}`
    })

    const reveal = (node: Element) => {
      observer.unobserve(node)
      node.classList.add('is-revealed')

      node.querySelectorAll<HTMLElement>('[data-bar-to]').forEach((bar) => {
        bar.style.width = `${bar.dataset.barTo}%`
        followBar(bar, frames)
      })
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal(entry.target)
        })

        // A fast scroll can jump an element past the viewport between two frames,
        // which would leave it stuck at opacity 0. Catch anything already above.
        nodes.forEach((node) => {
          if (!node.classList.contains('is-revealed') && node.getBoundingClientRect().bottom < 0) {
            reveal(node)
          }
        })
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' },
    )

    nodes.forEach((node) => {
      const { revealDelay, revealDuration } = node.dataset
      if (revealDelay) node.style.animationDelay = `${revealDelay}ms`
      if (revealDuration) node.style.animationDuration = `${revealDuration}ms`
      observer.observe(node)
    })

    return () => {
      observer.disconnect()
      frames.forEach(cancelAnimationFrame)
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [])

  return null
}
