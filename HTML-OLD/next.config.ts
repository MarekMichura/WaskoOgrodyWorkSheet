import fs from 'fs'
import path from 'path'

import type {NextConfig} from 'next'

const urlPath = path.join(__dirname, '/build/cache/my/')
const filePath = urlPath + 'cssData.json'
const firstLetter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const allSymbols = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-'
const firstLetterCount = firstLetter.length
const allSymbolsCount = allSymbols.length
let count = 0
let map = new Map()
let timeout: NodeJS.Timeout | undefined = undefined

function loadMap() {
  if (map.size === 0 && fs.existsSync(filePath)) {
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    map = new Map(Object.entries(fileData.map))
    count = fileData.count
    console.log('loaded: ' + count + ' elements')
  }
}

function saveMapAsync(time: number) {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    if (!fs.existsSync(urlPath)) fs.mkdirSync(urlPath)
    console.log('clear save')
    console.log(map.size)
    fs.writeFileSync(filePath, JSON.stringify({map: Object.fromEntries(map), count}, null, 2), 'utf8')
  }, time)
}

function generateName(className: string) {
  const get = map.get(className)
  if (get) return get

  const letterID = count % firstLetterCount
  let result = firstLetter[letterID]

  let current = ((count / firstLetterCount) | 0) - 1
  while (current >= 0) {
    const letterID = current % allSymbolsCount
    result += allSymbols[letterID]

    current = ((current / allSymbolsCount) | 0) - 1
  }

  count++
  map.set(className, result)
  saveMapAsync(1000)
  return result
}

loadMap()
let nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  distDir: 'build',
  output: 'standalone',
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    }

    config.module.rules // all rules
      .find((rule: any) => typeof rule.oneOf === 'object') // load file rules
      .oneOf.filter((rule: any) => Array.isArray(rule.use)) // check if rule has loader
      .flatMap((rule: any) => rule.use) // need only this table
      .filter((moduleLoader: any) => moduleLoader.loader?.includes('css-loader') && !moduleLoader.loader?.includes('postcss-loader')) // limit only to styles loaders
      .filter((moduleLoader: any) => moduleLoader.options.modules)
      .map((moduleLoader: any) => moduleLoader.options.modules)
      .forEach((module: any) => {
        module.getLocalIdent = (context: any, _: any, exportName: any) =>
          generateName(`${path.relative(context.rootContext, context.resourcePath)} ${exportName}`)
      })

    return config
  },
}

if (process.env.ANALYZE === 'true') {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const analyzer = require('@next/bundle-analyzer')
    const withBundleAnalyzer = analyzer({
      enabled: process.env.ANALYZE === 'true',
      analyzerMode: 'json',
    })
    nextConfig = withBundleAnalyzer(nextConfig)
  } catch {
    console.warn('⚠️  Bundle analyzer is enabled, but @next/bundle-analyzer is not installed.')
  }
}

export default nextConfig
