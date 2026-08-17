import sharp from 'sharp'
import fs from 'node:fs'
import path from 'node:path'

const srcDir = path.resolve('..', 'assets-original', 'fotos')
const outDir = path.resolve('public', 'fotos')
fs.mkdirSync(outDir, { recursive: true })

const files = fs.readdirSync(srcDir).filter((f) => /\.(png|jpe?g)$/i.test(f))

for (const file of files) {
  const name = file.replace(/\.(png|jpe?g)$/i, '')
  const inPath = path.join(srcDir, file)
  const outPath = path.join(outDir, `${name}.webp`)
  await sharp(inPath).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 74 }).toFile(outPath)
  const { size } = fs.statSync(outPath)
  console.log(`${file} -> ${name}.webp (${(size / 1024).toFixed(0)} KB)`)
}
console.log('done')
