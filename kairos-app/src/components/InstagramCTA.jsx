import { useReveal } from '../lib/useReveal'
import { CONTACT } from '../data/content'

export default function InstagramCTA() {
  const ref = useReveal()

  return (
    <section>
      <div className="wrap" ref={ref}>
        <div className="ig-card">
          <div>
            <h3>Conteúdo toda semana no Instagram</h3>
            <p>Sinais de alerta, orientações para famílias e novidades da clínica. Acompanhe {CONTACT.instagramHandle}.</p>
            <a className="btn btn-primary" style={{ marginTop: 20 }} href={CONTACT.instagram} target="_blank" rel="noopener">
              Seguir no Instagram
            </a>
          </div>
          <div className="ig-stats">
            <div><div className="n">1.902</div><div className="l">Seguidores</div></div>
            <div><div className="n">50</div><div className="l">Publicações</div></div>
          </div>
        </div>
      </div>
    </section>
  )
}
