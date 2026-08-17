import { useState } from 'react'
import { useReveal } from '../lib/useReveal'
import { SIGNALS } from '../data/content'

function Sprout() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="leaf-bullet">
      <path d="M12 21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 13c-4 0-6.5-3-6.5-3s1 4.5 6.5 4.5M12 13c4 0 6.5-3 6.5-3s-1 4.5-6.5 4.5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export default function Signals() {
  const [tab, setTab] = useState('fono')
  const listRef = useReveal({ selector: '.signal-item', y: 16, stagger: 0.05 })

  return (
    <section id="sinais" className="signals-section">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">antes de qualquer diagnóstico, um olhar atento</p>
          <h2>Sinais que merecem atenção</h2>
          <p>Cada criança tem seu próprio ritmo — mas alguns sinais indicam que vale a pena buscar uma avaliação especializada.</p>
        </div>

        <div className="signal-tabs" role="tablist">
          {Object.entries(SIGNALS).map(([key, group]) => (
            <button
              key={key}
              role="tab"
              className="signal-tab"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="signal-list" ref={listRef} key={tab}>
          {SIGNALS[tab].items.map((text, i) => (
            <div className="signal-item" key={i}>
              <Sprout />
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
