import { useReveal } from '../lib/useReveal'
import { MYTHS } from '../data/content'

export default function Awareness() {
  const ref = useReveal({ selector: '.myth-card', y: 20, stagger: 0.06 })

  return (
    <section id="conscientizacao">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">conscientização</p>
          <h2>TEA e TDAH: entender para acolher melhor</h2>
          <p>
            TEA (Transtorno do Espectro Autista) e TDAH (Transtorno de Déficit de Atenção e Hiperatividade) são
            condições neurológicas do desenvolvimento — não são causadas por criação, e não são "fases".
            Quanto mais cedo a criança recebe o suporte terapêutico certo, maiores as chances de desenvolver
            autonomia, comunicação e habilidades sociais ao longo da vida.
          </p>
        </div>

        <div className="myth-grid" ref={ref}>
          {MYTHS.map((m) => (
            <div className="myth-card" key={m.myth}>
              <div className="myth-row myth-row-myth">
                <span className="myth-badge myth-badge-x">mito</span>
                <p>{m.myth}</p>
              </div>
              <div className="myth-row myth-row-fact">
                <span className="myth-badge myth-badge-ok">real</span>
                <p>{m.fact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
