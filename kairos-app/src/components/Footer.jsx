import Logo from './Logo'
import { CONTACT, NAV_LINKS } from '../data/content'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brand">
              <Logo size={30} />
              Kairós
            </div>
            <p className="foot-desc">Tempo certo para crescer e florescer. Fonoaudiologia, psicologia e equipe especializada em TEA e TDAH no Centro de Carapicuíba.</p>
          </div>
          <div>
            <h5>Navegação</h5>
            <div className="flinks">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </div>
          </div>
          <div>
            <h5>Contato</h5>
            <div className="flinks">
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener">WhatsApp</a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener">Instagram</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>Clínica Kairós — Carapicuíba</span>
          <span>Site não-oficial gerado com dados públicos do Google e do Instagram</span>
        </div>
      </div>
    </footer>
  )
}
