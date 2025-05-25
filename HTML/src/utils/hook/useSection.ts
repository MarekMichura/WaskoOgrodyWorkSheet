import {useCallback, useLayoutEffect, useRef} from 'react'

import {useDispatch} from '@/components/redux'
import {addSection, removeSection, updateSection, type IReducerSection} from '@/components/redux/sliceSection'
import {type ILocalization} from '@/locale/translations/en_US'

import {useWindowEvent} from './useWindowEvent'

export function useSection<T extends HTMLElement>(
  name: keyof ILocalization['sections'],
  navbar?: IReducerSection['navbar']
) {
  const ref = useRef<T>(null)
  const dispatch = useDispatch()

  const getY = useCallback((ele: T) => {
    const rect = ele.getBoundingClientRect()
    return rect.top + window.scrollY
  }, [])

  const updateY = useCallback(() => {
    const ele = ref.current
    if (!ele) return

    const y = getY(ele)
    dispatch(updateSection({name, y, navbar}))
  }, [dispatch, getY, name, navbar])

  useLayoutEffect(() => {
    const ele = ref.current
    if (!ele) return

    const y = getY(ele)
    dispatch(addSection({name, y, navbar}))

    return () => {
      dispatch(removeSection(name))
    }
  }, [dispatch, getY, name, navbar])

  useWindowEvent('resize', updateY)
  return ref
}
