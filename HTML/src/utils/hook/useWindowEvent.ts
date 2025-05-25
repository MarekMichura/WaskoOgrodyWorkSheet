import {useLayoutEffect} from 'react'

type winFun<T extends keyof WindowEventMap> = (this: Window, event?: WindowEventMap[T]) => void
interface IUseWindowEventProps {
  passive?: boolean
  runOnInit?: boolean
  disable?: boolean
}

export function useWindowEvent<T extends keyof WindowEventMap>(event: T, fun: winFun<T>, props?: IUseWindowEventProps) {
  useLayoutEffect(() => {
    if (props?.disable) return

    window.addEventListener(event, fun, {passive: props?.passive})
    if (props?.runOnInit) fun.call(window, undefined)

    return () => window.removeEventListener(event, fun)
  }, [fun, event, props])
}
