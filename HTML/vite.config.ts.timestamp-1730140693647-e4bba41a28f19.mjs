// vite.config.ts
import path from "path";
import zlib from "zlib";
import react from "file:///html/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///html/node_modules/vite/dist/node/index.js";
import { compression } from "file:///html/node_modules/vite-plugin-compression2/dist/index.mjs";
import viteImagemin from "file:///html/node_modules/vite-plugin-imagemin/dist/index.mjs";
import { VitePWA } from "file:///html/node_modules/vite-plugin-pwa/dist/index.js";
var __vite_injected_original_dirname = "/html";
var vite_config_default = defineConfig({
  plugins: [
    react({
      babel: {
        presets: [["@babel/preset-react", { runtime: "automatic" }], "@babel/preset-typescript"],
        plugins: [
          ["babel-plugin-react-compiler", {}],
          ["babel-plugin-styled-components", { minify: true }]
        ]
      }
    }),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Wasko ogrody",
        short_name: "Wasko",
        start_url: "/",
        icons: [
          {
            src: "icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "icons/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
          },
          {
            src: "icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any"
          },
          {
            src: "icons/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ],
        theme_color: "#00000000",
        background_color: "#00000000",
        display: "fullscreen",
        orientation: "portrait"
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg}"],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === "script" || //
            request.destination === "style" || request.destination === "image",
            handler: "CacheFirst",
            options: {
              cacheName: "wasko-cache",
              expiration: {
                maxEntries: 1e3,
                maxAgeSeconds: 3e6
              }
            }
          }
        ]
      }
    }),
    compression({
      algorithm: "brotliCompress",
      filename: "[path][base].br",
      skipIfLargerOrEqual: false,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          [zlib.constants.BROTLI_PARAM_MODE]: 0,
          [zlib.constants.BROTLI_PARAM_LGWIN]: 200
        }
      }
    }),
    compression({
      algorithm: "deflate",
      filename: "[path][base].deflate",
      compressionOptions: {
        level: 9
      }
    }),
    compression({
      algorithm: "gzip",
      filename: "[path][base].gzip",
      compressionOptions: {
        level: 9
      }
    }),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7
      },
      optipng: {
        optimizationLevel: 7
      },
      mozjpeg: {
        quality: 80
      },
      pngquant: {
        quality: [0.7, 0.9],
        speed: 4
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox"
          },
          {
            name: "removeEmptyAttrs",
            active: false
          }
        ]
      }
    })
  ],
  server: {
    open: false,
    port: 3e3,
    hmr: {
      overlay: true
    }
  },
  build: {
    outDir: "build",
    minify: "terser",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        entryFileNames: "assets/[hash][hash].js",
        chunkFileNames: "assets/[hash][hash].js",
        assetFileNames: "assets/[hash][hash].js"
      }
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
        pure_funcs: ["console"]
      },
      mangle: {
        toplevel: true
      },
      output: {
        comments: false
      }
    }
  },
  optimizeDeps: { include: ["react", "react-dom"] },
  resolve: {
    alias: {
      "/ErrorBoundary": path.resolve(__vite_injected_original_dirname, "src/Common/ErrorBoundary/index.tsx"),
      "/Function": path.resolve(__vite_injected_original_dirname, "src/Common/Function"),
      "/Icon": path.resolve(__vite_injected_original_dirname, "src/Common/Icon"),
      "/Input": path.resolve(__vite_injected_original_dirname, "src/Common/Input/Input.tsx"),
      "/InputButton": path.resolve(__vite_injected_original_dirname, "src/Common/Input/Button.tsx"),
      "/InputCalendar": path.resolve(__vite_injected_original_dirname, "src/Common/Calendar"),
      "/Loading": path.resolve(__vite_injected_original_dirname, "src/Common/Loading"),
      "/Notification": path.resolve(__vite_injected_original_dirname, "src/Common/Notification"),
      "/PageCalendar": path.resolve(__vite_injected_original_dirname, "src/Page/EmployerCalendar"),
      "/PageError": path.resolve(__vite_injected_original_dirname, "src/Page/Error"),
      "/PageLogin": path.resolve(__vite_injected_original_dirname, "src/Page/Login"),
      "/PageMain": path.resolve(__vite_injected_original_dirname, "src/Page/Main"),
      "/PageSetWorkingHours": path.resolve(__vite_injected_original_dirname, "src/Page/SetWorkingHours"),
      "/PwaCatch": path.resolve(__vite_injected_original_dirname, "src/Common/PwaEventCatch"),
      "/QueryFn": path.resolve(__vite_injected_original_dirname, "src/Common/QueryFn"),
      "/Router": path.resolve(__vite_injected_original_dirname, "src/Common/Router"),
      "/Suspend": path.resolve(__vite_injected_original_dirname, "src/Common/Suspend")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaHRtbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2h0bWwvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2h0bWwvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHpsaWIgZnJvbSAnemxpYidcblxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXG5pbXBvcnQge2NvbXByZXNzaW9ufSBmcm9tICd2aXRlLXBsdWdpbi1jb21wcmVzc2lvbjInXG5pbXBvcnQgdml0ZUltYWdlbWluIGZyb20gJ3ZpdGUtcGx1Z2luLWltYWdlbWluJ1xuaW1wb3J0IHtWaXRlUFdBfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5cbmRlY2xhcmUgY29uc3QgX19kaXJuYW1lOiBzdHJpbmdcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICBiYWJlbDoge1xuICAgICAgICBwcmVzZXRzOiBbWydAYmFiZWwvcHJlc2V0LXJlYWN0Jywge3J1bnRpbWU6ICdhdXRvbWF0aWMnfV0sICdAYmFiZWwvcHJlc2V0LXR5cGVzY3JpcHQnXSxcbiAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgIFsnYmFiZWwtcGx1Z2luLXJlYWN0LWNvbXBpbGVyJywge31dLFxuICAgICAgICAgIFsnYmFiZWwtcGx1Z2luLXN0eWxlZC1jb21wb25lbnRzJywge21pbmlmeTogdHJ1ZX1dLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgbWFuaWZlc3Q6IHtcbiAgICAgICAgbmFtZTogJ1dhc2tvIG9ncm9keScsXG4gICAgICAgIHNob3J0X25hbWU6ICdXYXNrbycsXG4gICAgICAgIHN0YXJ0X3VybDogJy8nLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ2ljb25zL21hbmlmZXN0LWljb24tMTkyLm1hc2thYmxlLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJ2ljb25zL21hbmlmZXN0LWljb24tMTkyLm1hc2thYmxlLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnaWNvbnMvbWFuaWZlc3QtaWNvbi01MTIubWFza2FibGUucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnknLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnaWNvbnMvbWFuaWZlc3QtaWNvbi01MTIubWFza2FibGUucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMDAwMDAwMDAnLFxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnIzAwMDAwMDAwJyxcbiAgICAgICAgZGlzcGxheTogJ2Z1bGxzY3JlZW4nLFxuICAgICAgICBvcmllbnRhdGlvbjogJ3BvcnRyYWl0JyxcbiAgICAgIH0sXG4gICAgICB3b3JrYm94OiB7XG4gICAgICAgIGdsb2JQYXR0ZXJuczogWycqKi8qLntqcyxjc3MsaHRtbCxwbmcsc3ZnfSddLFxuICAgICAgICBydW50aW1lQ2FjaGluZzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46ICh7cmVxdWVzdH0pID0+XG4gICAgICAgICAgICAgIHJlcXVlc3QuZGVzdGluYXRpb24gPT09ICdzY3JpcHQnIHx8IC8vXG4gICAgICAgICAgICAgIHJlcXVlc3QuZGVzdGluYXRpb24gPT09ICdzdHlsZScgfHxcbiAgICAgICAgICAgICAgcmVxdWVzdC5kZXN0aW5hdGlvbiA9PT0gJ2ltYWdlJyxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdDYWNoZUZpcnN0JyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgY2FjaGVOYW1lOiAnd2Fza28tY2FjaGUnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAwMCxcbiAgICAgICAgICAgICAgICBtYXhBZ2VTZWNvbmRzOiAzMDAwMDAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBjb21wcmVzc2lvbih7XG4gICAgICBhbGdvcml0aG06ICdicm90bGlDb21wcmVzcycsXG4gICAgICBmaWxlbmFtZTogJ1twYXRoXVtiYXNlXS5icicsXG4gICAgICBza2lwSWZMYXJnZXJPckVxdWFsOiBmYWxzZSxcbiAgICAgIGNvbXByZXNzaW9uT3B0aW9uczoge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBbemxpYi5jb25zdGFudHMuQlJPVExJX1BBUkFNX1FVQUxJVFldOiAxMSxcbiAgICAgICAgICBbemxpYi5jb25zdGFudHMuQlJPVExJX1BBUkFNX01PREVdOiAwLFxuICAgICAgICAgIFt6bGliLmNvbnN0YW50cy5CUk9UTElfUEFSQU1fTEdXSU5dOiAyMDAsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGNvbXByZXNzaW9uKHtcbiAgICAgIGFsZ29yaXRobTogJ2RlZmxhdGUnLFxuICAgICAgZmlsZW5hbWU6ICdbcGF0aF1bYmFzZV0uZGVmbGF0ZScsXG4gICAgICBjb21wcmVzc2lvbk9wdGlvbnM6IHtcbiAgICAgICAgbGV2ZWw6IDksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGNvbXByZXNzaW9uKHtcbiAgICAgIGFsZ29yaXRobTogJ2d6aXAnLFxuICAgICAgZmlsZW5hbWU6ICdbcGF0aF1bYmFzZV0uZ3ppcCcsXG4gICAgICBjb21wcmVzc2lvbk9wdGlvbnM6IHtcbiAgICAgICAgbGV2ZWw6IDksXG4gICAgICB9LFxuICAgIH0pLFxuICAgIHZpdGVJbWFnZW1pbih7XG4gICAgICBnaWZzaWNsZToge1xuICAgICAgICBvcHRpbWl6YXRpb25MZXZlbDogNyxcbiAgICAgIH0sXG4gICAgICBvcHRpcG5nOiB7XG4gICAgICAgIG9wdGltaXphdGlvbkxldmVsOiA3LFxuICAgICAgfSxcbiAgICAgIG1vempwZWc6IHtcbiAgICAgICAgcXVhbGl0eTogODAsXG4gICAgICB9LFxuICAgICAgcG5ncXVhbnQ6IHtcbiAgICAgICAgcXVhbGl0eTogWzAuNywgMC45XSxcbiAgICAgICAgc3BlZWQ6IDQsXG4gICAgICB9LFxuICAgICAgc3Znbzoge1xuICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3JlbW92ZVZpZXdCb3gnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3JlbW92ZUVtcHR5QXR0cnMnLFxuICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbiAgc2VydmVyOiB7XG4gICAgb3BlbjogZmFsc2UsXG4gICAgcG9ydDogMzAwMCxcbiAgICBobXI6IHtcbiAgICAgIG92ZXJsYXk6IHRydWUsXG4gICAgfSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICdidWlsZCcsXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcbiAgICBjc3NDb2RlU3BsaXQ6IHRydWUsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiAnYXNzZXRzL1toYXNoXVtoYXNoXS5qcycsXG4gICAgICAgIGNodW5rRmlsZU5hbWVzOiAnYXNzZXRzL1toYXNoXVtoYXNoXS5qcycsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1toYXNoXVtoYXNoXS5qcycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgY29tcHJlc3M6IHtcbiAgICAgICAgZWNtYTogNSxcbiAgICAgICAgZHJvcF9jb25zb2xlOiB0cnVlLFxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxuICAgICAgICBwYXNzZXM6IDEwLFxuICAgICAgICBkZWFkX2NvZGU6IHRydWUsXG4gICAgICAgIHRvcGxldmVsOiB0cnVlLFxuICAgICAgICB1bnVzZWQ6IHRydWUsXG4gICAgICAgIG1vZHVsZTogdHJ1ZSxcbiAgICAgICAgY29sbGFwc2VfdmFyczogdHJ1ZSxcbiAgICAgICAgcmVkdWNlX3ZhcnM6IHRydWUsXG4gICAgICAgIHB1cmVfZnVuY3M6IFsnY29uc29sZSddLFxuICAgICAgfSxcbiAgICAgIG1hbmdsZToge1xuICAgICAgICB0b3BsZXZlbDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgY29tbWVudHM6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBvcHRpbWl6ZURlcHM6IHtpbmNsdWRlOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbSddfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnL0Vycm9yQm91bmRhcnknOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL0NvbW1vbi9FcnJvckJvdW5kYXJ5L2luZGV4LnRzeCcpLFxuICAgICAgJy9GdW5jdGlvbic6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvQ29tbW9uL0Z1bmN0aW9uJyksXG4gICAgICAnL0ljb24nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL0NvbW1vbi9JY29uJyksXG4gICAgICAnL0lucHV0JzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9Db21tb24vSW5wdXQvSW5wdXQudHN4JyksXG4gICAgICAnL0lucHV0QnV0dG9uJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9Db21tb24vSW5wdXQvQnV0dG9uLnRzeCcpLFxuICAgICAgJy9JbnB1dENhbGVuZGFyJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9Db21tb24vQ2FsZW5kYXInKSxcbiAgICAgICcvTG9hZGluZyc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvQ29tbW9uL0xvYWRpbmcnKSxcbiAgICAgICcvTm90aWZpY2F0aW9uJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9Db21tb24vTm90aWZpY2F0aW9uJyksXG4gICAgICAnL1BhZ2VDYWxlbmRhcic6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvUGFnZS9FbXBsb3llckNhbGVuZGFyJyksXG4gICAgICAnL1BhZ2VFcnJvcic6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvUGFnZS9FcnJvcicpLFxuICAgICAgJy9QYWdlTG9naW4nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL1BhZ2UvTG9naW4nKSxcbiAgICAgICcvUGFnZU1haW4nOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL1BhZ2UvTWFpbicpLFxuICAgICAgJy9QYWdlU2V0V29ya2luZ0hvdXJzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9QYWdlL1NldFdvcmtpbmdIb3VycycpLFxuICAgICAgJy9Qd2FDYXRjaCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvQ29tbW9uL1B3YUV2ZW50Q2F0Y2gnKSxcbiAgICAgICcvUXVlcnlGbic6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvQ29tbW9uL1F1ZXJ5Rm4nKSxcbiAgICAgICcvUm91dGVyJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9Db21tb24vUm91dGVyJyksXG4gICAgICAnL1N1c3BlbmQnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjL0NvbW1vbi9TdXNwZW5kJyksXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlNLE9BQU8sVUFBVTtBQUNsTixPQUFPLFVBQVU7QUFFakIsT0FBTyxXQUFXO0FBQ2xCLFNBQVEsb0JBQW1CO0FBQzNCLFNBQVEsbUJBQWtCO0FBQzFCLE9BQU8sa0JBQWtCO0FBQ3pCLFNBQVEsZUFBYztBQVB0QixJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsTUFDSixPQUFPO0FBQUEsUUFDTCxTQUFTLENBQUMsQ0FBQyx1QkFBdUIsRUFBQyxTQUFTLFlBQVcsQ0FBQyxHQUFHLDBCQUEwQjtBQUFBLFFBQ3JGLFNBQVM7QUFBQSxVQUNQLENBQUMsK0JBQStCLENBQUMsQ0FBQztBQUFBLFVBQ2xDLENBQUMsa0NBQWtDLEVBQUMsUUFBUSxLQUFJLENBQUM7QUFBQSxRQUNuRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLFdBQVc7QUFBQSxRQUNYLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsWUFDTixTQUFTO0FBQUEsVUFDWDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGFBQWE7QUFBQSxRQUNiLGtCQUFrQjtBQUFBLFFBQ2xCLFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxjQUFjLENBQUMsNEJBQTRCO0FBQUEsUUFDM0MsZ0JBQWdCO0FBQUEsVUFDZDtBQUFBLFlBQ0UsWUFBWSxDQUFDLEVBQUMsUUFBTyxNQUNuQixRQUFRLGdCQUFnQjtBQUFBLFlBQ3hCLFFBQVEsZ0JBQWdCLFdBQ3hCLFFBQVEsZ0JBQWdCO0FBQUEsWUFDMUIsU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlO0FBQUEsY0FDakI7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixxQkFBcUI7QUFBQSxNQUNyQixvQkFBb0I7QUFBQSxRQUNsQixRQUFRO0FBQUEsVUFDTixDQUFDLEtBQUssVUFBVSxvQkFBb0IsR0FBRztBQUFBLFVBQ3ZDLENBQUMsS0FBSyxVQUFVLGlCQUFpQixHQUFHO0FBQUEsVUFDcEMsQ0FBQyxLQUFLLFVBQVUsa0JBQWtCLEdBQUc7QUFBQSxRQUN2QztBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLG9CQUFvQjtBQUFBLFFBQ2xCLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxZQUFZO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixvQkFBb0I7QUFBQSxRQUNsQixPQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsYUFBYTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ1IsbUJBQW1CO0FBQUEsTUFDckI7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLG1CQUFtQjtBQUFBLE1BQ3JCO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1IsU0FBUyxDQUFDLEtBQUssR0FBRztBQUFBLFFBQ2xCLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixRQUFRO0FBQUEsVUFDVjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLE1BQ0gsU0FBUztBQUFBLElBQ1g7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixRQUFRO0FBQUEsSUFDUixjQUFjO0FBQUEsSUFDZCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxRQUNmLFFBQVE7QUFBQSxRQUNSLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLGVBQWU7QUFBQSxRQUNmLGFBQWE7QUFBQSxRQUNiLFlBQVksQ0FBQyxTQUFTO0FBQUEsTUFDeEI7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxjQUFjLEVBQUMsU0FBUyxDQUFDLFNBQVMsV0FBVyxFQUFDO0FBQUEsRUFDOUMsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsa0JBQWtCLEtBQUssUUFBUSxrQ0FBVyxvQ0FBb0M7QUFBQSxNQUM5RSxhQUFhLEtBQUssUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxNQUMxRCxTQUFTLEtBQUssUUFBUSxrQ0FBVyxpQkFBaUI7QUFBQSxNQUNsRCxVQUFVLEtBQUssUUFBUSxrQ0FBVyw0QkFBNEI7QUFBQSxNQUM5RCxnQkFBZ0IsS0FBSyxRQUFRLGtDQUFXLDZCQUE2QjtBQUFBLE1BQ3JFLGtCQUFrQixLQUFLLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsTUFDL0QsWUFBWSxLQUFLLFFBQVEsa0NBQVcsb0JBQW9CO0FBQUEsTUFDeEQsaUJBQWlCLEtBQUssUUFBUSxrQ0FBVyx5QkFBeUI7QUFBQSxNQUNsRSxpQkFBaUIsS0FBSyxRQUFRLGtDQUFXLDJCQUEyQjtBQUFBLE1BQ3BFLGNBQWMsS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQ3RELGNBQWMsS0FBSyxRQUFRLGtDQUFXLGdCQUFnQjtBQUFBLE1BQ3RELGFBQWEsS0FBSyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUNwRCx3QkFBd0IsS0FBSyxRQUFRLGtDQUFXLDBCQUEwQjtBQUFBLE1BQzFFLGFBQWEsS0FBSyxRQUFRLGtDQUFXLDBCQUEwQjtBQUFBLE1BQy9ELFlBQVksS0FBSyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLE1BQ3hELFdBQVcsS0FBSyxRQUFRLGtDQUFXLG1CQUFtQjtBQUFBLE1BQ3RELFlBQVksS0FBSyxRQUFRLGtDQUFXLG9CQUFvQjtBQUFBLElBQzFEO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
