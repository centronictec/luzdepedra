import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const imagesDir = path.join(__dirname, '../src/assets/imagens')
const thumbsDir = path.join(__dirname, '../src/assets/imagens/thumbnails')

if (!fs.existsSync(thumbsDir)) {
  fs.mkdirSync(thumbsDir, { recursive: true })
}

const images = fs.readdirSync(imagesDir).filter(f => /\.(png)$/i.test(f))

console.log(`Gerando thumbnails para ${images.length} imagens...`)

for (const image of images) {
  const inputPath = path.join(imagesDir, image)
  const name = path.parse(image).name
  const thumbPath = path.join(thumbsDir, `${name}-thumb.webp`)
  
  await sharp(inputPath)
    .resize(300, 300, { fit: 'cover' })
    .webp({ quality: 80 })
    .toFile(thumbPath)
  
  console.log(`✅ ${image} -> thumbnail criado`)
}

console.log('Thumbnails geradas com sucesso!')
