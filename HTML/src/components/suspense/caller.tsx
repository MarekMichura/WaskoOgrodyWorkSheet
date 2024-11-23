import {useEffect, Fragment} from 'react'

import {callerProps} from './types/_callerProps'

export function Caller({setLoading}: callerProps) {
  useEffect(() => {
    setLoading(true)
    return () => setLoading(false)
  }, [setLoading])

  return <Fragment />
}
