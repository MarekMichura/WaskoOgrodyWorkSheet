import {Fragment, useEffect} from 'react'

import {ISuspendWrapperController} from './ITypes'

export const SuspendWrapperController = ({set}: ISuspendWrapperController) => {
  useEffect(() => {
    set(true)
    return () => set(false)
  }, [set])

  return <Fragment />
}
