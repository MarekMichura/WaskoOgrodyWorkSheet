import {Fragment, useEffect, useState} from 'react'

import styles from './loading.module.scss'
import {loadingProps} from './types/_loadingProps'

const delay = 500
const {container, content, text} = styles
export function Loading({first, state}: loadingProps) {
  const [{open, time, disable}, setState] = useState({open: first, time: Date.now(), disable: !first})

  useEffect(() => {
    let timeOut: NodeJS.Timeout | null = null
    const delta = delay + time - Date.now()
    if (state !== open) {
      timeOut = setTimeout(() => setState({open: state, time: Date.now(), disable: false}), delta)
    } else if (!disable && open === false) {
      timeOut = setTimeout(() => setState((state) => ({...state, disable: true})), delta)
    }

    return () => {
      if (timeOut) clearTimeout(timeOut)
    }
  }, [state, time, disable, open])

  if (disable) return <Fragment />
  return (
    <div className={container} data-open={open}>
      <div className={content}></div>
      <h1 className={text}>Ładowanie...</h1>
    </div>
  )
}
