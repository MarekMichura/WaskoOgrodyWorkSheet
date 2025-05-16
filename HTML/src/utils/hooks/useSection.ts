import {useCallback, useContext, useEffect, useRef} from 'react'

import {type ILocalizationSecondKeys} from '@/locale/translations/en_US'

import {EHomeLayoutAction} from '../context/homeLayoutContext/_type/IAction'
import homeLayoutContext from '../context/homeLayoutContext/default'

import {useScrollRefPast} from './useScrollRef'
import useWindowsSize from './useWindowsSize'

export default function useSection<T extends HTMLElement>(name: ILocalizationSecondKeys<'sections'>) {
  const [ref, {past, y}] = useScrollRefPast<T>()
  const [{}, dispatch] = useContext(homeLayoutContext)
  const prevScroll = useRef(y)
  const prevChecked = useRef(false)

  // add section
  useEffect(() => {
    dispatch({type: EHomeLayoutAction.AddSection, name, scroll: 0})
    prevScroll.current = 0
    return () => {
      dispatch({type: EHomeLayoutAction.RemoveSection, name})
    }
  }, [dispatch, name])

  // window size change
  const changeHeight = useCallback(() => {
    const con = ref.current
    if (con === null) return

    if (y !== prevScroll.current) {
      dispatch({type: EHomeLayoutAction.UpdateScrollPos, name, scroll: y})
      prevScroll.current = y
    }
  }, [dispatch, name, ref, y])
  useWindowsSize(changeHeight)

  // check if is show
  useEffect(() => {
    if (prevChecked.current === past) return

    prevChecked.current = past
    if (past) dispatch({type: EHomeLayoutAction.Check, name})
    else dispatch({type: EHomeLayoutAction.UnCheck, name})
  }, [dispatch, name, past])

  return ref
}
