'use cache'

import fs from 'node:fs/promises'
import path from 'path'

import {getPlaiceholder} from 'plaiceholder'

import {type IGetPublicBase64Result} from './_type/IGetPublicBase64Result'

export async function getPublicBase64(src: string): Promise<IGetPublicBase64Result> {
  const filePath = path.join(process.cwd(), 'public', src)

  const file = await fs.readFile(filePath)
  const result = await getPlaiceholder(file)

  const {base64, metadata} = result
  const {width, height} = metadata

  return {base64, width, height, src}
}

export async function getPublicBase64s(src: string[]) {
  return await Promise.all(src.map((path) => getPublicBase64(path)))
}
