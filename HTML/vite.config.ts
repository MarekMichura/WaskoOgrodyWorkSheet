import path from 'path'
import zlib from 'zlib'

import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import combineDuplicatedSelectors from 'postcss-combine-duplicated-selectors'
import postCssMerge from 'postcss-merge-rules'
import postcssMediaQueries from 'postcss-sort-media-queries'
import { BuildOptions, CSSOptions, defineConfig } from 'vite'
import { compression } from 'vite-plugin-compression2'
// import cssInject from 'vite-plugin-css-injected-by-js'
import viteImagemin from 'vite-plugin-imagemin'
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules'
import { VitePWA } from 'vite-plugin-pwa'

function components(component: string) {
  return path.resolve(__dirname, `src/components/${component}`)
}

function pages() {
  return path.resolve(__dirname, `src/pages/`)
}

function utils(util: string) {
  return path.resolve(__dirname, `src/utils/${util}`)
}

const alias = {
  '/calendar': components('calendar'),
  '/button': components('button'),
  '/input': components('input'),
  '/router': components('router'),
  '/status': components('status'),
  '/suspense': components('suspense'),
  '/svg': components('icon/svg'),
  //
  '/lazy': utils('lazy'),
  '/notification': utils('notification'),
  '/profile': utils('profile'),
  '/query': utils('query'),
  '/route': utils('route'),
  '/stat': utils('status'),
  '/style': utils('style'),
  '/theme': utils('theme'),
  '/common': utils('common'),
  //
  '/page': pages(),
}

const server = {
  open: false,
  port: 3000,
  hmr: {
    overlay: true,
  },
}

const build: BuildOptions = {
  outDir: 'build',
  minify: 'terser',
  target: 'esnext',
  cssCodeSplit: true,
  rollupOptions: {
    output: {
      manualChunks: (file) => {
        if (file.includes('node_modules')) return 'dependencies.js'
      },
      entryFileNames: '[hash][name].js',
      chunkFileNames: '[hash][name].js',
      assetFileNames: '[hash][extname]',
    },
  },
  terserOptions: {
    compress: {
      ecma: 2020,
      drop_console: true,
      drop_debugger: true,
      passes: 10,
      dead_code: true,
      toplevel: true,
      unused: true,
      module: true,
      collapse_vars: true,
      reduce_vars: true,
    },
    mangle: {
      toplevel: true,
    },
    output: {
      comments: false,
    },
  },
}

const css: CSSOptions = {
  preprocessorOptions: {
    scss: {
      api: 'modern-compiler',
      additionalData: `
          @use "${path.resolve(__dirname, 'src/utils/style/bundle.module.scss')}" as *;\n
          @use "${path.resolve(__dirname, 'src/utils/style/theme/darkColors.module.scss')}" as *;\n
          @use "${path.resolve(__dirname, 'src/utils/style/theme/lightColors.module.scss')}" as *;\n
          @use "${path.resolve(__dirname, 'src/utils/style/theme/themes.module.scss')}" as *;\n
          `,
    },
  },
  postcss: {
    plugins: [
      autoprefixer({
        overrideBrowserslist: ['>1%', 'last 2 versions', 'not dead'],
      }),
      cssnano({
        preset: [
          'default',
          {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
            discardDuplicates: true,
            mergeRules: true,
            mergeLonghand: true,
          },
        ],
      }),
      postcssMediaQueries(),
      postCssMerge(),
      combineDuplicatedSelectors({
        removeDuplicatedProperties: true,
      }),
    ],
  },
}

const babel = react({
  babel: {
    presets: [['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
    plugins: [['babel-plugin-react-compiler']],
  },
})

const br = compression({
  algorithm: 'brotliCompress',
  filename: '[path]br/[base].br',
  skipIfLargerOrEqual: false,
  compressionOptions: {
    params: {
      [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
      [zlib.constants.BROTLI_PARAM_MODE]: 1,
      [zlib.constants.BROTLI_PARAM_LGWIN]: 24,
    },
  },
})

const deflate = compression({
  algorithm: 'deflate',
  filename: '[path]deflate/[base].deflate',
  compressionOptions: {
    level: 9,
  },
})

const gzip = compression({
  algorithm: 'gzip',
  filename: '[path]gzip/[base].gzip',
  compressionOptions: {
    level: 9,
  },
})

const pwa = VitePWA({
  registerType: 'autoUpdate',
  manifest: {
    name: 'Wasko ogrody',
    short_name: 'Wasko',
    start_url: '/',
    lang: 'pl',
    theme_color: '#000000',
    background_color: '#000000',
    display: 'fullscreen',
    orientation: 'any',
    icons: [
      { src: 'icons/manifest-icon-512.maskable.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: 'icons/manifest-icon-512.maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: 'icons/manifest-icon-512.maskable.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: 'icons/manifest-icon-512.maskable.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,png,svg}'],
    navigationPreload: true,
    runtimeCaching: [
      {
        urlPattern: ({ request }) => request.destination === 'document',
        handler: 'NetworkFirst',
        options: {
          cacheName: 'wasko-document-cache',
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 3000000,
          },
        },
      },
      {
        urlPattern: ({ request }) =>
          request.destination === 'script' || //
          request.destination === 'style' ||
          request.destination === 'image',
        handler: 'StaleWhileRevalidate',
        options: {
          cacheName: 'wasko-script-image-cache',
          expiration: {
            maxEntries: 1000,
            maxAgeSeconds: 3000000,
          },
        },
      },
    ],
  },
  injectRegister: 'auto',
})

const imageMin = viteImagemin({
  //gif
  gifsicle: {
    optimizationLevel: 3,
    interlaced: true,
    colors: 200,
  },
  //png
  pngquant: {
    speed: 1,
    strip: true,
    quality: [0.7, 0.8],
    dithering: 0.8,
  },
  //jpg
  mozjpeg: {
    quality: 75,
    progressive: true,
    targa: false,
    revert: false,
    fastCrush: false,
    dcScanOpt: 1,
    trellis: true,
    trellisDC: true,
    tune: 'hvs-psnr',
    overshoot: true,
    arithmetic: false,
    dct: 'float',
    quantBaseline: false,
    quantTable: 4,
    smooth: 10,
    sample: ['2x2'],
  },
  //webp
  webp: {
    quality: 30,
    method: 6,
    metadata: 'none',
  },
  filter: (file) => !file.includes('strong') && file.includes('images') && file.includes('icons'),
})

const imageMinStrong = viteImagemin({
  //gif
  gifsicle: {
    optimizationLevel: 3,
    interlaced: true,
    colors: 100,
  },
  //png
  pngquant: {
    speed: 1,
    strip: true,
    quality: [0.4, 0.5],
    dithering: 0.5,
  },
  //jpg
  mozjpeg: {
    quality: 50,
    progressive: true,
    targa: false,
    revert: false,
    fastCrush: false,
    dcScanOpt: 1,
    trellis: true,
    trellisDC: true,
    tune: 'hvs-psnr',
    overshoot: true,
    arithmetic: false,
    dct: 'float',
    quantBaseline: false,
    quantTable: 4,
    smooth: 5,
    sample: ['2x2'],
  },
  //webp
  webp: {
    quality: 20,
    method: 6,
    metadata: 'none',
  },
  filter: (file) => file.includes('strong'),
})

export default defineConfig({
  css,
  build,
  server,
  preview: { port: 3000 },
  resolve: { alias },
  optimizeDeps: { include: ['react', 'react-dom'] },
  plugins: [pwa, babel, br, gzip, deflate, imageMin, imageMinStrong, optimizeCssModules()],
})
