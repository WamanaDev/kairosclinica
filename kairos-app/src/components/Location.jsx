import { useReveal } from '../lib/useReveal'
import { CONTACT } from '../data/content'

export default function Location() {
  const ref = useReveal()

  return (
    <section id="localizacao">
      <div className="wrap" ref={ref}>
        <div className="sec-head">
          <p className="eyebrow">venha conhecer</p>
          <h2>Centro de Carapicuíba</h2>
        </div>
        <div className="loc">
          <div className="loc-info">
            <img className="loc-photo" src="/fotos/foto-01.webp" alt="Fachada da Clínica Kairós" />
            <h3>Clínica Kairós</h3>
            <div className="loc-row"><div className="k">Endereço</div><div className="v">{CONTACT.address}</div></div>
            <div className="loc-row"><div className="k">Telefone / WhatsApp</div><div className="v">{CONTACT.phoneDisplay}</div></div>
            <div className="loc-row"><div className="k">Instagram</div><div className="v"><a href={CONTACT.instagram} target="_blank" rel="noopener">{CONTACT.instagramHandle}</a></div></div>
            <div className="loc-row"><div className="k">Horário — Seg. a Sex.</div><div className="v">8h às 18h</div></div>
            <div className="loc-row"><div className="k">Sábado, domingo e feriados</div><div className="v">Fechado</div></div>
            <a className="btn btn-primary" style={{ marginTop: 24, background: 'var(--forest)' }} href={CONTACT.mapsSearch} target="_blank" rel="noopener">
              Abrir no Google Maps
            </a>
          </div>
          <div className="loc-map">
            <iframe src={CONTACT.mapsEmbed} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa da Clínica Kairós" />
          </div>
        </div>
      </div>
    </section>
  )
}
