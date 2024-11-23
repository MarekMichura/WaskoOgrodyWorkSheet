import {ComponentType, lazy} from 'react'

function importRetry<T>(fn: () => Promise<{default: T}>) {
  return new Promise<{default: T}>((resolve) => {
    fn()
      .then(resolve)
      .catch(() => {
        const i = 0
        const str = fn.toString()
        const importName = str.substring(str.indexOf('import("') + 8, str.lastIndexOf('.js"') + 3)
        for (let running = true; running; ) {
          import(/* @vite-ignore */ `${importName}?q=${i}`)
            .then((obj) => {
              running = false
              resolve(obj)
            })
            .catch()
        }
      })
  })
}

export function myLazy<T>(fn: () => Promise<{default: ComponentType<T>}>) {
  return {
    lazy: lazy(() => importRetry(fn)),
    preload: () => importRetry(fn),
  }
}
