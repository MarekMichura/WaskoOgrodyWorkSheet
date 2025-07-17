'use client'

import dynamic from 'next/dynamic'

import {EHomeParts} from '../../_goto/EHomeParts'

import s from './css.module.scss'

const HomeMapClient = dynamic(() => import('./homeMapClient'), {ssr: false})

function HomeMap() {
  return (
    <section className={s.sec} id={EHomeParts.map}>
      <HomeMapClient />
    </section>
  )
}

export default HomeMap
