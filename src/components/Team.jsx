import { useState } from 'react'
import { useReveal } from '../lib/useReveal'
import { TEAM } from '../data/content'

function TeamCard({ member }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <button
      className={`team-card${flipped ? ' is-flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${member.name}, ${member.role}. Toque para ${flipped ? 'ver a foto' : 'ver a formação'}.`}
    >
      <div className="team-card-inner">
        <div className="team-face team-front">
          <div className="team-photo">
            <img src={`/equipe/${member.photo}.webp`} alt={member.name} loading="lazy" />
          </div>
          <div className="team-id">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
          <span className="team-hint">+ formação</span>
        </div>

        <div className="team-face team-back">
          <div className="team-back-body">
            <h3>{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <ul>
              {member.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            {member.quote && <p className="team-quote">“{member.quote}”</p>}
          </div>
          <span className="team-hint">← voltar</span>
        </div>
      </div>
    </button>
  )
}

export default function Team() {
  const ref = useReveal({ selector: '.team-card', y: 24, stagger: 0.06 })

  return (
    <section id="equipe">
      <div className="wrap">
        <div className="team-intro">
          <div className="sec-head" style={{ marginBottom: 0 }}>
            <p className="eyebrow">quem vai acompanhar seu filho</p>
            <h2>Nossa equipe</h2>
            <p>Profissionais com formação específica em desenvolvimento infantil, TEA e TDAH. Toque em um card para conhecer a formação de cada um.</p>
          </div>
          <div className="team-group-photo">
            <img src="/equipe/team-group.webp" alt="Equipe da Clínica Kairós reunida" loading="lazy" />
          </div>
        </div>
        <div className="team-grid" ref={ref}>
          {TEAM.map((m) => (
            <TeamCard member={m} key={m.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
