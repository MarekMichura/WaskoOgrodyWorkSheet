import {useEffect} from 'react'

export default function useEvent<T extends EventTarget, K extends keyof GlobalEventHandlersEventMap>(
  event: K,
  ele: T,
  fun: (this: T, ev: GlobalEventHandlersEventMap[K]) => void,
  call: boolean = false
): void {
  useEffect(() => {
    if (!ele) return
    ele.addEventListener(event, fun as EventListener)

    if (call) {
      fun.call(ele, new Event(event) as GlobalEventHandlersEventMap[K])
    }

    return () => {
      ele.removeEventListener(event, fun as EventListener)
    }
  }, [call, ele, event, fun])
}
