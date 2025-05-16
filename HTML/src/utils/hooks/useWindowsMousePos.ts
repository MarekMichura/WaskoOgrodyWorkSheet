import {useEffect} from 'react'

export default function useWindowsMousePos(fun: (e: MouseEvent) => void, disable?: boolean) {
  useEffect(() => {
    if (disable) return
    window.addEventListener('mousemove', fun)
    return () => window.removeEventListener('mousemove', fun)
  }, [disable, fun])
}
