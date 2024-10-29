import path from 'path'
import zlib from 'zlib'

import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import {compression} from 'vite-plugin-compression2'
import viteImagemin from 'vite-plugin-imagemin'
import {VitePWA} from 'vite-plugin-pwa'

declare const __dirname: string
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [['@babel/preset-react', {runtime: 'automatic'}], '@babel/preset-typescript'],
        plugins: [
          ['babel-plugin-react-compiler', {}],
          ['babel-plugin-styled-components', {minify: true}],
        ],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Wasko ogrody',
        short_name: 'Wasko',
        start_url: '/',
        lang: 'pl',
        icons: [
          {
            src: 'icons/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icons/manifest-icon-192.maskable.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'icons/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icons/manifest-icon-512.maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
        theme_color: '#000000',
        background_color: '#000000',
        display: 'fullscreen',
        orientation: 'any',
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: ({request}) =>
              request.destination === 'script' || //
              request.destination === 'style' ||
              request.destination === 'image',
            handler: 'CacheFirst',
            options: {
              cacheName: 'wasko-cache',
              expiration: {
                maxEntries: 1000,
                maxAgeSeconds: 3000000,
              },
            },
          },
        ],
      },
    }),
    compression({
      algorithm: 'brotliCompress',
      filename: '[path][base].br',
      skipIfLargerOrEqual: false,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          [zlib.constants.BROTLI_PARAM_MODE]: 0,
          [zlib.constants.BROTLI_PARAM_LGWIN]: 200,
        },
      },
    }),
    compression({
      algorithm: 'deflate',
      filename: '[path][base].deflate',
      compressionOptions: {
        level: 9,
      },
    }),
    compression({
      algorithm: 'gzip',
      filename: '[path][base].gzip',
      compressionOptions: {
        level: 9,
      },
    }),
    viteImagemin({
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
        quality: [0.6, 0.8],
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
    }),
  ],
  server: {
    open: false,
    port: 3000,
    hmr: {
      overlay: true,
    },
  },
  build: {
    outDir: 'build',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name][hash][hash].js',
        chunkFileNames: 'assets/[name][hash][hash].js',
        assetFileNames: 'assets/[name][hash][hash].js',
      },
    },
    terserOptions: {
      compress: {
        ecma: 5,
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
  },
  optimizeDeps: {include: ['react', 'react-dom']},
  resolve: {
    alias: {
      '/ErrorBoundary': path.resolve(__dirname, 'src/Common/ErrorBoundary/index.tsx'),
      '/Function': path.resolve(__dirname, 'src/Common/Function'),
      '/Icon': path.resolve(__dirname, 'src/Common/Icon'),
      '/Input': path.resolve(__dirname, 'src/Common/Input/Input.tsx'),
      '/InputButton': path.resolve(__dirname, 'src/Common/Input/Button.tsx'),
      '/InputCalendar': path.resolve(__dirname, 'src/Common/Calendar'),
      '/Loading': path.resolve(__dirname, 'src/Common/Loading'),
      '/Notification': path.resolve(__dirname, 'src/Common/Notification'),
      '/PageCalendar': path.resolve(__dirname, 'src/Page/EmployerCalendar'),
      '/PageError': path.resolve(__dirname, 'src/Page/Error'),
      '/PageLogin': path.resolve(__dirname, 'src/Page/Login'),
      '/PageMain': path.resolve(__dirname, 'src/Page/Main'),
      '/PageSetWorkingHours': path.resolve(__dirname, 'src/Page/SetWorkingHours'),
      '/PwaCatch': path.resolve(__dirname, 'src/Common/PwaEventCatch'),
      '/QueryFn': path.resolve(__dirname, 'src/Common/QueryFn'),
      '/Router': path.resolve(__dirname, 'src/Common/Router'),
      '/Suspend': path.resolve(__dirname, 'src/Common/Suspend'),
    },
  },
})
