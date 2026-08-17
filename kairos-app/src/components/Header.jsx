import Logo from './Logo'
import { CONTACT, NAV_LINKS } from '../data/content'

export default function Header() {
  return (
    <header>
      <nav>
        <a className="brand" href="#top">
          <Logo size={30} />
          Kairós
        </a>
        <div className="navlinks">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <a className="navcta" href={CONTACT.whatsapp} target="_blank" rel="noopener">
          Agendar consulta
        </a>
      </nav>
    </header>
  )
}
