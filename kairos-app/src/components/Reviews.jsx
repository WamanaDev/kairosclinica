import { useEffect, useRef } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap'
import { REVIEWS } from '../data/content'

function ReviewCard({ text }) {
  return (
    <div className="review-card">
      <span className="stars">★★★★★</span>
      “{text}”
      <div className="who">Avaliação no Google</div>
    </div>
  )
}

export default function Reviews() {
  const trackRef = useRef(null)
  const tweenRef = useRef(null)

  useEffect(() => {
    if (prefersReducedMotion || !trackRef.current) return
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 28,
        ease: 'none',
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])

  const pause = () => tweenRef.current?.pause()
  const resume = () => tweenRef.current?.resume()

  return (
    <section id="avaliacoes">
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 0 }}>
          <p className="eyebrow">sem filtro, direto do Google</p>
          <h2>O que as famílias dizem</h2>
        </div>
        <div className="reviews-head">
          <div className="rating-badge">5.0</div>
          <div>
            <div className="stars">★★★★★</div>
            <div style={{ opacity: 0.6, fontSize: '0.9rem', marginTop: 4 }}>Baseado em 15 avaliações no Google</div>
          </div>
        </div>
      </div>

      {prefersReducedMotion ? (
        <div className="wrap">
          <div className="marquee-track" style={{ flexWrap: 'wrap', width: 'auto' }}>
            {REVIEWS.map((r, i) => (
              <ReviewCard text={r.text} key={i} />
            ))}
          </div>
        </div>
      ) : (
        <div className="marquee" onMouseEnter={pause} onMouseLeave={resume}>
          <div className="marquee-track" ref={trackRef}>
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <ReviewCard text={r.text} key={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
