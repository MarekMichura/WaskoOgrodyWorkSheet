import createNextIntlPlugin from 'next-intl/plugin'

import nextConfigShorterNamesWebpack from './next.config.cssNames'

import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  distDir: 'build',
  output: 'standalone',
  reactStrictMode: true,

  sassOptions: {
    additionalData: `
      @use '@/utils/style/data.scss' as *;\n
      @use '@/utils/style/flex.scss' as *;\n
      @use '@/utils/style/media.scss' as *;\n
      @use 'sass:color';\n`,
  },
  experimental: {
    reactCompiler: true,
    useCache: true,
  },
  webpack: (config) => {
    return nextConfigShorterNamesWebpack(config)
  },
}

export default createNextIntlPlugin('./src/locale/request.ts')(nextConfig)
