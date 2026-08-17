import { useReveal } from '../lib/useReveal'
import { STEPS } from '../data/content'

export default function HowItWorks() {
  const ref = useReveal({ selector: '.step', y: 22 })

  return (
    <section id="como-funciona">
      <div className="wrap">
        <div className="sec-head center">
          <p className="eyebrow">do primeiro contato ao plano de cuidado</p>
          <h2>Como funciona o primeiro passo</h2>
        </div>
        <div className="steps" ref={ref}>
          {STEPS.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="step-badge">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
