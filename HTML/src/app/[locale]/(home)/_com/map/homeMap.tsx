'use client'

import dynamic from 'next/dynamic'

import s from './css.module.scss'

const HomeMapClient = dynamic(() => import('./homeMapClient'), {ssr: false})

function HomeMap() {
  return (
    <section className={s.sec}>
      <HomeMapClient />
    </section>
  )
}

export default HomeMap
