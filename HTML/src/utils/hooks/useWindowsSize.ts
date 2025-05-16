import {useEffect} from 'react'

export default function useWindowsSize(fun: () => void) {
  useEffect(() => {
    fun()
    window.addEventListener('resize', fun)
    return () => window.removeEventListener('resize', fun)
  }, [fun])
}


