import sharp from 'sharp'

const dir = '../assets-original/equipe-crop'
const outDir = 'public/equipe'
import fs from 'node:fs'
fs.mkdirSync(outDir, { recursive: true })

// Tight crops isolating just the person's photo from each promo graphic —
// no text/graphic decoration, so the site can build its own card UI around it.
const jobs = [
  { name: 'francine', left: 330, top: 10, width: 290, height: 450 },
  { name: 'jade', left: 390, top: 0, width: 348, height: 400 },
  { name: 'jennifer', left: 410, top: 80, width: 328, height: 560 },
  { name: 'claudio', left: 350, top: 30, width: 205, height: 500 },
  { name: 'debora', left: 25, top: 85, width: 310, height: 580 },
  { name: 'gabriele', left: 395, top: 55, width: 343, height: 380 },
  { name: 'karen', left: 395, top: 55, width: 343, height: 370 },
]

for (const j of jobs) {
  const src = `${dir}/${j.name}.jpg`
  await sharp(src)
    .extract({ left: j.left, top: j.top, width: j.width, height: j.height })
    .resize({ width: 560, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(`${outDir}/${j.name}.webp`)
  console.log('wrote', j.name)
}
