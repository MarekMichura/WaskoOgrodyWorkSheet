import path from 'path'
import zlib from 'zlib'

import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import {compression} from 'vite-plugin-compression2'
// import viteImagemin from 'vite-plugin-imagemin'

declare const __dirname: string
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [
          ['@babel/preset-react', {runtime: 'automatic'}],
          '@babel/preset-typescript', //
        ],
        plugins: [
          ['babel-plugin-react-compiler', {}],
          ['babel-plugin-styled-components', {minify: true}],
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
    // viteImagemin({
    //   gifsicle: {
    //     optimizationLevel: 7,
    //   },
    //   optipng: {
    //     optimizationLevel: 7,
    //   },
    //   mozjpeg: {
    //     quality: 80,
    //   },
    //   pngquant: {
    //     quality: [0.7, 0.9],
    //     speed: 4,
    //   },
    //   svgo: {
    //     plugins: [
    //       {
    //         name: 'removeViewBox',
    //       },
    //       {
    //         name: 'removeEmptyAttrs',
    //         active: false,
    //       },
    //     ],
    //   },
    // }),
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
      },
      mangle: {
        toplevel: true,
        // properties: true,
      },
      output: {
        comments: false,
      },
    },
  },
  optimizeDeps: {include: ['react', 'react-dom']},
  resolve: {
    alias: {
      '/Button': path.resolve(__dirname, 'src/Common/Input/Button.tsx'),
      '/Function': path.resolve(__dirname, 'src/Common/Function'),
      '/Calendar': path.resolve(__dirname, 'src/Page/EmployerCalendar'),
      '/EmployerCalendar': path.resolve(__dirname, 'src/Page/EmployerCalendar'),
      '/ErrorBoundary': path.resolve(__dirname, 'src/Common/ErrorBoundary'),
      '/Error': path.resolve(__dirname, 'src/Page/Error'),
      '/Icon': path.resolve(__dirname, 'src/Common/Icon'),
      '/Input': path.resolve(__dirname, 'src/Common/Input/Input.tsx'),
      '/Loading': path.resolve(__dirname, 'src/Common/Loading'),
      '/Login': path.resolve(__dirname, 'src/Page/Login'),
      '/Main': path.resolve(__dirname, 'src/Page/Main'),
      '/Notification': path.resolve(__dirname, 'src/Common/Notification'),
      '/QueryFn': path.resolve(__dirname, 'src/Common/QueryFn'),
      '/Router': path.resolve(__dirname, 'src/Common/Router'),
      '/Suspend': path.resolve(__dirname, 'src/Common/Suspend'),
    },
  },
})
