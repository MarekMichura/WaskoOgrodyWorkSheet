'use client'

import s from './cssLoading.module.scss'
import {ISuspenseLoading} from './ISuspenseLoading'

function SuspenseLoading({text}: ISuspenseLoading) {
  return (
    <div className={s.container}>
      <div className={s.content} />
      <h1 className={s.text}>{text ?? 'Ładowanie...'}</h1>
    </div>
  )
}

export default SuspenseLoading
