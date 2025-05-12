'use client'

import dynamic from 'next/dynamic'
import {useTranslations} from 'next-intl'

import IconsDescription from '@/components/IconDes/IconsDes'
import useSection from '@/utils/hooks/useSection'
import useStickyCard from '@/utils/hooks/useStickyCard'

import s from '../css.module.scss'

const BluePrintIcon = dynamic(() => import('@/components/img/icon/blueprint/blueprint'), {ssr: false})
const PlantingIcon = dynamic(() => import('@/components/img/icon/planting/planting'), {ssr: false})
const ParkIcon = dynamic(() => import('@/components/img/icon/park/park'), {ssr: false})

function HomeIconsLabor() {
  const [stickyRef, top] = useStickyCard()
  const sectionRef = useSection<HTMLHeadingElement>('service')

  const t = useTranslations('home.service')

  return (
    <>
      <span ref={sectionRef} className={s.anchor} />
      <IconsDescription
        title={t('title')}
        className={s.card1}
        ref={stickyRef}
        style={{top}}
        icon1={{
          title: t('architectureTitle'),
          description: t('architectureDest'),
          icon: <BluePrintIcon />,
        }}
        icon2={{
          title: t('plantingsTitle'),
          description: t('plantingsDest'),
          icon: <PlantingIcon />,
        }}
        icon3={{
          title: t('projectsTitle'),
          description: t('projectsDest'),
          icon: <ParkIcon />,
        }}
      />
    </>
  )
}

export default HomeIconsLabor
