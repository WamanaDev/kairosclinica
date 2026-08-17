import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import Logo from './Logo'
import { gsap, prefersReducedMotion } from '../lib/gsap'
import { CONTACT } from '../data/content'

const HeroParticles = lazy(() => import('./HeroParticles'))

export default function Hero() {
  const copyRef = useRef(null)
  const [showParticles, setShowParticles] = useState(false)

  useEffect(() => {
    setShowParticles(window.innerWidth >= 900 && !prefersReducedMotion)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || !copyRef.current) return
    const items = copyRef.current.querySelectorAll('[data-anim]')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 22 },
        { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.12, delay: 0.1 }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy" ref={copyRef}>
          <p className="eyebrow" data-anim>tempo certo para crescer e florescer</p>
          <h1 data-anim>
            O momento certo para <em>entender seu filho</em> começa aqui
          </h1>
          <p className="lede" data-anim>
            Fonoaudiologia, psicologia e uma equipe especializada em TEA e TDAH. Em Carapicuíba,
            cada família é acolhida no seu próprio tempo — com um plano de cuidado real.
          </p>
          <div className="hero-cta" data-anim>
            <a className="btn btn-primary" href={CONTACT.whatsapp} target="_blank" rel="noopener">
              Agendar pelo WhatsApp
            </a>
            <a className="btn btn-outline" href="#especialidades">Ver especialidades</a>
          </div>
          <div className="hero-trust" data-anim>
            <span className="stars">★★★★★</span>
            <span><strong>5,0</strong> no Google · 15 avaliações de famílias atendidas</span>
          </div>
        </div>

        <div className="hero-frame">
          <div className="arch-window">
            {showParticles && (
              <Suspense fallback={null}>
                <HeroParticles />
              </Suspense>
            )}
            <div className="arch-glow" />
            <Logo size={230} animate />
          </div>
        </div>
      </div>
    </section>
  )
}
