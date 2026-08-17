import sharp from 'sharp'
import fs from 'node:fs'

const outDir = '../assets-original/equipe-crop'
fs.mkdirSync(outDir, { recursive: true })

const jobs = [
  { file: '1.jpeg', name: 'francine', top: 410, height: 635 },
  { file: '2.jpeg', name: 'jade', top: 410, height: 635 },
  { file: '3.jpeg', name: 'jennifer', top: 450, height: 660 },
  { file: '4.jpeg', name: 'claudio', top: 450, height: 630 },
  { file: '5.jpeg', name: 'debora', top: 425, height: 770 },
  { file: '6.jpeg', name: 'gabriele', top: 390, height: 930 },
  { file: '9.jpeg', name: 'karen', top: 315, height: 945 },
]

for (const j of jobs) {
  const src = '../' + j.file
  const out = `${outDir}/${j.name}.jpg`
  await sharp(src).extract({ left: 0, top: j.top, width: 738, height: j.height }).jpeg({ quality: 90 }).toFile(out)
  console.log('wrote', out)
}
