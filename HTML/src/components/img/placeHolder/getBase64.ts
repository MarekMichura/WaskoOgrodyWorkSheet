import fs from 'node:fs/promises'
import path from 'path'

import {cacheLife} from 'next/dist/server/use-cache/cache-life'
import {getPlaiceholder} from 'plaiceholder'

import {type IGetPublicBase64Result} from './_type/IGetPublicBase64Result'

export async function getPublicBase64(src: string): Promise<IGetPublicBase64Result> {
  'use cache'
  cacheLife({stale: Infinity, revalidate: Infinity, expire: Infinity})
  const filePath = path.join(process.cwd(), 'public', src)

  // eslint-disable-next-line security/detect-non-literal-fs-filename
  const file = await fs.readFile(filePath)
  const result = await getPlaiceholder(file)

  const {base64, metadata} = result
  const {width, height} = metadata

  return {base64, width, height, src}
}

export async function getPublicBase64s(src: readonly string[]) {
  return await Promise.all(src.map((path) => getPublicBase64(path)))
}
