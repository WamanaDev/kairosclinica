import { useEffect, useState } from 'react'
import { useReveal } from '../lib/useReveal'
import { PHOTOS } from '../data/content'

export default function Gallery() {
  const [openAt, setOpenAt] = useState(null)
  const gridRef = useReveal({ selector: '.g-tile', y: 20, stagger: 0.045 })

  useEffect(() => {
    if (openAt == null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenAt(null)
      if (e.key === 'ArrowRight') setOpenAt((i) => (i + 1) % PHOTOS.length)
      if (e.key === 'ArrowLeft') setOpenAt((i) => (i - 1 + PHOTOS.length) % PHOTOS.length)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [openAt])

  return (
    <section id="espaco">
      <div className="wrap">
        <div className="sec-head">
          <p className="eyebrow">para você conhecer antes de chegar</p>
          <h2>Conheça o espaço</h2>
          <p>Salas pensadas para cada tipo de atendimento — do acolhimento na recepção à sala externa de estímulo sensorial.</p>
        </div>

        <div className="gallery-grid" ref={gridRef}>
          {PHOTOS.map((p, i) => (
            <button
              key={p.file}
              className={`g-tile${p.big ? ' g-big' : ''}`}
              onClick={() => setOpenAt(i)}
              aria-label={`Ampliar foto: ${p.alt}`}
            >
              <img src={`/fotos/${p.file}.webp`} alt={p.alt} loading="lazy" />
              <span className="g-tag">{p.tag}</span>
            </button>
          ))}
        </div>
      </div>

      {openAt != null && (
        <div className="lightbox" onClick={() => setOpenAt(null)}>
          <button className="lb-close" aria-label="Fechar" onClick={() => setOpenAt(null)}>✕</button>
          <button
            className="lb-nav lb-prev"
            aria-label="Foto anterior"
            onClick={(e) => { e.stopPropagation(); setOpenAt((i) => (i - 1 + PHOTOS.length) % PHOTOS.length) }}
          >‹</button>
          <figure onClick={(e) => e.stopPropagation()}>
            <img src={`/fotos/${PHOTOS[openAt].file}.webp`} alt={PHOTOS[openAt].alt} />
            <figcaption>{PHOTOS[openAt].tag}</figcaption>
          </figure>
          <button
            className="lb-nav lb-next"
            aria-label="Próxima foto"
            onClick={(e) => { e.stopPropagation(); setOpenAt((i) => (i + 1) % PHOTOS.length) }}
          >›</button>
        </div>
      )}
    </section>
  )
}
