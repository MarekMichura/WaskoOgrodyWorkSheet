import {type RefObject, useEffect} from 'react'

export default function useRefSize<T extends HTMLElement>(ref: RefObject<T | null>, fun: (ref: T) => void) {
  useEffect(() => {
    const ele = ref.current
    if (!ele) return
    fun(ele)

    const observer = new ResizeObserver(() => {
      fun(ele)
    })
    observer.observe(ele)

    return () => {
      observer.disconnect()
    }
  }, [fun, ref])
}
