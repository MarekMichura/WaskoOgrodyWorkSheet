/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {ComponentType, LazyExoticComponent} from 'react'

interface IMyLazy<T extends ComponentType<any>> {
  preload: () => Promise<{default: T}>
  lazy: LazyExoticComponent<T>
}

function RetryCatch<T extends ComponentType<T>>(name: string, nr: number = 0) {
  return new Promise<{default: T}>((resolve) => {
    const path = `${name}?q=${nr}`

    import(/* @vite-ignore */ path)
      .then(resolve)
      .catch(() => setTimeout(() => RetryCatch<T>(name, nr + 1).then(resolve), 10000))
  })
}

function Retry<T extends ComponentType<T>>(importFn: () => Promise<{default: T}>) {
  return new Promise<{default: T}>((resolve) => {
    importFn()
      .then((a) => resolve(a))
      .catch(() => {
        const preStr = importFn.toString()
        const str = preStr.substring(preStr.indexOf('import("') + 8, preStr.lastIndexOf('.js")') + 3)
        RetryCatch<T>(str).then((a) => resolve(a))
      })
  })
}

export function myLazy<T extends ComponentType<any>>(importFn: () => Promise<{default: T}>): IMyLazy<T> {
  return {
    lazy: React.lazy(() => Retry(importFn)),
    preload: () => Retry(importFn),
  }
}
