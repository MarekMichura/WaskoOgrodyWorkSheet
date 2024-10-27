/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {ComponentType, LazyExoticComponent} from 'react'

interface IMyLazy<T extends ComponentType<any>> extends LazyExoticComponent<T> {
  preload: () => Promise<{
    default: T
  }>
}

const RetryCatch = <T extends ComponentType<T>>(name: string, nr: number = 0) => {
  return new Promise<{default: T}>((resolve) => {
    const path = `${name}?q=${nr}`
    console.log('Retry: ' + path)
    import(path).then(resolve).catch(() => setTimeout(() => RetryCatch<T>(name, nr + 1).then(resolve), 1000))
  })
}

const Retry = <T extends ComponentType<T>>(importFn: () => Promise<{default: T}>) => {
  console.log('Im in promise')
  return new Promise<{default: T}>((resolve) => {
    console.log('Im in retry')
    importFn()
      .then((a) => resolve(a))
      .catch(() => {
        const preStr = importFn.toString()
        console.log('Im in catch: ' + preStr)
        const str = preStr.substring(14).substring(-3)
        RetryCatch<T>(str).then((a) => resolve(a))
      })
  })
}

export const lazy = <T extends ComponentType<any>>(importFn: () => Promise<{default: T}>): IMyLazy<T> => {
  const lazy = React.lazy(() => Retry(importFn)) as IMyLazy<T>
  lazy.preload = () => Retry(importFn)

  return lazy
}
