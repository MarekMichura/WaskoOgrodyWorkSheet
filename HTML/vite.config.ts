import path from 'path'

import react from '@vitejs/plugin-react'
import {visualizer} from 'rollup-plugin-visualizer'
import {defineConfig} from 'vite'
import viteCompression from 'vite-plugin-compression'

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
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false,
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false,
    }),
    visualizer({open: true}),
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
    minify: 'esbuild',
    // cssCodeSplit: true,
    // terserOptions: {
    //   compress: {
    //     ecma: 5,
    //     drop_console: true,
    //     drop_debugger: true,
    //     passes: 10,
    //     dead_code: true,
    //     toplevel: true,
    //     unused: true,
    //     module: true,
    //   },
    //   mangle: {
    //     toplevel: true,
    //     properties: true,
    //   },
    //   output: {
    //     comments: false,
    //   },
    // },
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
