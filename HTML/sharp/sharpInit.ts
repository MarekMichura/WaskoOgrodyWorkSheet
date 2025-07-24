/* eslint-disable no-console */
import {type Dirent} from 'fs'
import fs from 'fs/promises'
import path from 'path'

import sharp from 'sharp'

const inputDir: string = path.resolve('sharp')
const outputDir: string = path.resolve('public/img')
const sizes: number[] = [16, 320, 640, 1080, 1920]

interface FormatOptions {
  format: keyof sharp.FormatEnum
  options: sharp.JpegOptions | sharp.PngOptions | sharp.WebpOptions | sharp.AvifOptions
}

const formats: FormatOptions[] = [
  {format: 'webp', options: {quality: 80}},
  {format: 'avif', options: {quality: 50}},
  {format: 'jpeg', options: {quality: 80}},
]

async function cleanOutput(): Promise<void> {
  await fs.rm(outputDir, {recursive: true, force: true})
  await fs.mkdir(outputDir, {recursive: true})
}

async function getImageFiles(dir: string, baseDir: string = dir): Promise<string[]> {
  let files: string[] = []
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  const entries: Dirent[] = await fs.readdir(dir, {withFileTypes: true})

  for (const entry of entries) {
    const fullPath: string = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      const nestedFiles: string[] = await getImageFiles(fullPath, baseDir)
      files = files.concat(nestedFiles)
    } else {
      const ext: string = path.extname(entry.name).toLowerCase()
      if (['.jpg', '.jpeg', '.png'].includes(ext)) {
        const relativePath: string = path.relative(baseDir, fullPath)
        files.push(relativePath)
      }
    }
  }
  return files
}

async function optimizeImages(): Promise<void> {
  await cleanOutput()

  const imageFiles: string[] = await getImageFiles(inputDir)

  for (const relativeFilePath of imageFiles) {
    const ext: string = path.extname(relativeFilePath).toLowerCase()
    const baseName: string = path.basename(relativeFilePath, ext)
    const relativeDir: string = path.dirname(relativeFilePath)

    const inputFilePath: string = path.join(inputDir, relativeFilePath)

    for (const size of sizes) {
      for (const {format, options} of formats) {
        const outputSubdir: string = path.join(outputDir, relativeDir)
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        await fs.mkdir(outputSubdir, {recursive: true})

        const outputFileName: string = `${baseName}-${size}.${format}`
        const outputFilePath: string = path.join(outputSubdir, outputFileName)

        await sharp(inputFilePath).resize({width: size}).toFormat(format, options).toFile(outputFilePath)

        console.log(`✅ ${outputFilePath}`)
      }
    }
  }

  console.log('🎉 Wszystkie obrazy zoptymalizowane!')
}

optimizeImages().catch((err: unknown) => {
  console.error('❌ Błąd podczas optymalizacji:', err)
  process.exit(1)
})
