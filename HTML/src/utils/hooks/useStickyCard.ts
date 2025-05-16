import {type RefObject, useCallback, useRef, useState} from 'react'

import useWindowsSize from './useWindowsSize'

export default function useStickyCard<T extends HTMLElement>(): [RefObject<T | null>, number] {
  const ref = useRef<T>(null)
  const [top, setTop] = useState(0)

  const changeHeight = useCallback(() => {
    const con = ref.current
    if (con === null) return

    const conHeight = con.getBoundingClientRect().height
    const winSize = window.innerHeight
    const newTop = winSize - conHeight

    if (newTop > 0) setTop(0)
    else setTop(newTop)
  }, [])
  useWindowsSize(changeHeight)

  return [ref, top]
}
