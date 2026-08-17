import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap'

// Fades + lifts children of the ref into view as they cross the viewport.
// Pass a selector to stagger multiple items (e.g. cards); omit to animate the container itself.
export function useReveal({ selector = null, y = 28, stagger = 0.09, start = 'top 82%' } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    if (prefersReducedMotion) return

    const targets = selector ? ref.current.querySelectorAll(selector) : ref.current
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger,
          scrollTrigger: { trigger: ref.current, start },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [selector, y, stagger, start])

  return ref
}
