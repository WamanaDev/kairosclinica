import { useReveal } from '../lib/useReveal'
import { DIFFERENTIATORS } from '../data/content'

export default function WhyUs() {
  const ref = useReveal({ selector: '.why-card', y: 24 })

  return (
    <section id="diferenciais">
      <div className="wrap whyus-section" style={{ padding: 'clamp(40px,6vw,64px)' }}>
        <div className="sec-head">
          <p className="eyebrow">o que as famílias sentem ao entrar</p>
          <h2>Por que as famílias confiam na Kairós</h2>
          <p>Direto de avaliações reais no Google — sem filtro.</p>
        </div>
        <div className="whyus" ref={ref}>
          {DIFFERENTIATORS.map((d) => (
            <div className="why-card" key={d.title}>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
