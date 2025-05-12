import withPlaiceholder from '@plaiceholder/next'
import createNextIntlPlugin from 'next-intl/plugin'

import nextConfigShorterNamesWebpack from './next.config.cssNames'

import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  distDir: 'build',
  output: 'standalone',
  reactStrictMode: true,

  sassOptions: {
    additionalData: `@use '@/utils/style/data.scss' as *;\n@use '@/utils/style/mixin.scss' as *;\n@use 'sass:color';`,
  },

  experimental: {
    reactCompiler: true,
    useCache: true,
  },

  webpack: (config) => {
    return nextConfigShorterNamesWebpack(config)
  },
}

const withNextIntl = createNextIntlPlugin('./src/locale/request.ts')
export default withPlaiceholder(withNextIntl(nextConfig))
