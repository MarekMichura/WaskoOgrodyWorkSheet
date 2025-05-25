'use client'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./map'), {ssr: false})
import s from './css.module.scss'

function ProjectMapDynamicImport() {
  return (
    <section className={s.con}>
      <Map />
    </section>
  )
}

export default ProjectMapDynamicImport
