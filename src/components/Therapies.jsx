import { useReveal } from '../lib/useReveal'
import { THERAPIES } from '../data/content'

const ICONS = {
  speech: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  mind: (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
}

export default function Therapies() {
  const gridRef = useReveal({ selector: '.therapy-card', y: 26 })

  return (
    <section id="terapias">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">abordagens terapêuticas</p>
          <h2>Terapias que apoiam o desenvolvimento</h2>
          <p>Cada criança responde melhor a uma combinação diferente de estímulos. Conheça as abordagens que fazem parte do cuidado na Kairós.</p>
        </div>
        <div className="therapies-grid" ref={gridRef}>
          {THERAPIES.map((t) => (
            <div className={`therapy-card${t.photo ? ' has-photo' : ''}`} key={t.title}>
              {t.photo ? (
                <div className="therapy-photo">
                  <img src={`/fotos/${t.photo}.webp`} alt={t.title} loading="lazy" />
                </div>
              ) : (
                <div className="service-icon">{ICONS[t.icon]}</div>
              )}
              <div className="therapy-body">
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <p className="therapy-detail">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
