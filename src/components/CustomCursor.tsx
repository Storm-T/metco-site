'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return

    const outer = outerRef.current
    const inner = innerRef.current
    if (!outer || !inner) return

    // Start off-screen
    outer.style.transform = 'translate3d(-200px, -200px, 0)'
    inner.style.left = '-200px'
    inner.style.top = '-200px'

    const onMove = (e: MouseEvent) => {
      outer.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
      inner.style.left = e.clientX + 'px'
      inner.style.top = e.clientY + 'px'
    }

    const onDown = () => {
      outer.classList.add('metco-cursor--click')
      inner.classList.add('metco-cursor-dot--expand')
    }

    const onUp = () => {
      outer.classList.remove('metco-cursor--click')
      inner.classList.remove('metco-cursor-dot--expand')
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (target?.closest('a, button, [role="button"]')) {
        outer.classList.add('metco-cursor--hover')
      } else {
        outer.classList.remove('metco-cursor--hover')
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)
    document.addEventListener('mouseover', onOver)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      document.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <div ref={outerRef} className="metco-cursor" aria-hidden="true" />
      <div ref={innerRef} className="metco-cursor-dot" aria-hidden="true" />
    </>
  )
}
