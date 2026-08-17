import { useState } from 'react'
import { useReveal } from '../lib/useReveal'
import { FAQ as FAQ_ITEMS } from '../data/content'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  const ref = useReveal({ selector: '.faq-item', y: 14, stagger: 0.05 })

  return (
    <section id="faq">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">antes de falar com a gente</p>
          <h2>Perguntas frequentes</h2>
        </div>
        <div className="faq-list" ref={ref}>
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i
            return (
              <div className="faq-item" data-open={isOpen} key={item.q}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {item.q}
                  <span className="plus">+</span>
                </button>
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
