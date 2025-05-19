'use client'

import dynamic from 'next/dynamic'

import s from '../css.module.scss'

const MapSection = dynamic(() => import('./map'), {ssr: false, loading: () => <section className={s.map} />})

function MapClient() {
  return <MapSection />
}

export default MapClient
