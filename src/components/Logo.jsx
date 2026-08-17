import { useEffect, useRef } from 'react'
import { gsap } from '../lib/gsap'

// The clinic's real mark: an arch (threshold) with a five-leaf sprout growing from a mound.
export default function Logo({ size = 34, animate = false, className = '' }) {
  const rootRef = useRef(null)

  useEffect(() => {
    if (!animate || !rootRef.current) return
    const leaves = rootRef.current.querySelectorAll('.k-leaf')
    const mound = rootRef.current.querySelector('.k-mound')
    const trunk = rootRef.current.querySelector('.k-trunk')
    const arch = rootRef.current.querySelector('.k-arch')

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 })
      tl.fromTo(arch, { opacity: 0, scale: 0.92, transformOrigin: '50% 100%' }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' })
        .fromTo(mound, { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: 0.35, ease: 'power2.out' }, '-=0.25')
        .fromTo(trunk, { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: 0.25, ease: 'power2.out' }, '-=0.1')
        .fromTo(
          leaves,
          { scale: 0, opacity: 0, transformOrigin: '0% 0%' },
          { scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(2.2)', stagger: 0.09 },
          '-=0.05'
        )
    }, rootRef)
    return () => ctx.revert()
  }, [animate])

  return (
    <svg
      ref={rootRef}
      className={`Logo${className ? ` ${className}` : ''}`}
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="k-arch"
        d="M22 106V58A28 40 0 0 1 78 58V106Z"
        stroke="currentColor"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path className="k-mound" d="M32 106Q50 84 68 106Z" fill="currentColor" />
      <path className="k-trunk" d="M50 98V80" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path className="k-leaf" transform="translate(50,80)" d="M0,0C6.5,-6.8 6.5,-24.8 0,-34C-6.5,-24.8 -6.5,-6.8 0,0Z" fill="currentColor" />
      <path className="k-leaf" transform="translate(50,80) rotate(-35)" d="M0,0C6,-5.2 6,-19 0,-26C-6,-19 -6,-5.2 0,0Z" fill="var(--moss)" />
      <path className="k-leaf" transform="translate(50,80) rotate(35)" d="M0,0C6,-5.2 6,-19 0,-26C-6,-19 -6,-5.2 0,0Z" fill="var(--moss)" />
      <path className="k-leaf" transform="translate(50,80) rotate(-75)" d="M0,0C7.5,-5.6 7.5,-20.4 0,-28C-7.5,-20.4 -7.5,-5.6 0,0Z" fill="currentColor" />
      <path className="k-leaf" transform="translate(50,80) rotate(75)" d="M0,0C7.5,-5.6 7.5,-20.4 0,-28C-7.5,-20.4 -7.5,-5.6 0,0Z" fill="currentColor" />
    </svg>
  )
}
