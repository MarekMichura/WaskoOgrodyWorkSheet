import {type RefObject, useEffect, useRef, useState} from 'react'

export default function useScrollRef<T extends HTMLElement>(
  fun: IntersectionObserverCallback,
  opt?: IntersectionObserverInit
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (element === null) return
    const obs = new IntersectionObserver(fun, opt)

    obs.observe(element)
    return () => {
      obs.unobserve(element)
    }
  }, [fun, opt])

  return ref
}

export function useScrollRefPast<T extends HTMLElement>(
  opt?: IntersectionObserverInit
): [RefObject<T | null>, {past: boolean; y: number}] {
  const [state, setState] = useState({past: false, y: 0})
  const ref = useScrollRef<T>(([entry]) => {
    const past = entry.boundingClientRect.top < 0 && !entry.isIntersecting
    const y = entry.boundingClientRect.y + window.scrollY

    if (state.past === past && Math.abs(state.y - y) <= 100) return
    setState({past, y})
  }, opt)

  return [ref, state]
}

export function useScrollIntersecting<T extends HTMLElement>(
  opt?: IntersectionObserverInit
): [RefObject<T | null>, boolean] {
  const [intersecting, setIntersecting] = useState(false)
  const ref = useScrollRef<T>(([entry]) => {
    if (intersecting === false && entry.isIntersecting) setIntersecting(true)
  }, opt)

  return [ref, intersecting]
}
