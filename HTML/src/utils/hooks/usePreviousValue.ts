'use client'
import {useRef, useEffect} from 'react'

export function usePreviousValue<T>(value: T): T | null {
  const prevValue = useRef<T>(null)

  useEffect(() => {
    prevValue.current = value
    return () => {
      prevValue.current = null
    }
  })

  return prevValue.current
}
