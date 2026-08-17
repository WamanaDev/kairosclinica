import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap'

// Animates a numeric text node counting up from 0 when it scrolls into view.
export function useCountUp(value, { decimals = 0, duration = 1.4 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current || value == null) return
    if (prefersReducedMotion) {
      ref.current.textContent = value.toFixed(decimals)
      return
    }
    const obj = { v: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        v: value,
        duration,
        ease: 'power2.out',
        scrollTrigger: { trigger: ref.current, start: 'top 88%' },
        onUpdate: () => {
          if (ref.current) ref.current.textContent = obj.v.toFixed(decimals)
        },
      })
    })
    return () => ctx.revert()
  }, [value, decimals, duration])

  return ref
}
