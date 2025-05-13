'use client'

import dynamic from 'next/dynamic'
import {useTranslations} from 'next-intl'

import IconsDescription from '@/components/IconDes/IconsDes'
import useSection from '@/utils/hooks/useSection'
import useStickyCard from '@/utils/hooks/useStickyCard'

const DiggerIcon = dynamic(() => import('@/components/img/icon/digger/digger'), {ssr: false})
const PlantingIcon = dynamic(() => import('@/components/img/icon/planting/planting'), {ssr: false})
const SoilIcon = dynamic(() => import('@/components/img/icon/soil/soil'), {ssr: false})

import s from '../css.module.scss'

function HomeIconStrengths() {
  const [stickyRef, top] = useStickyCard()
  const sectionRef = useSection<HTMLHeadingElement>('meet')

  const t = useTranslations('home.meet')

  return (
    <>
      <span ref={sectionRef} className={s.anchor} />
      <IconsDescription
        title={t('title')}
        className={s.card2}
        style={{top}}
        ref={stickyRef}
        icon1={{
          title: t('greenLandTitle'),
          description: t('greenLandDest'),
          icon: <DiggerIcon />,
        }}
        icon2={{
          title: t('greenRoofTitle'),
          description: t('greenRoofDest'),
          icon: <SoilIcon />,
        }}
        icon3={{
          title: t('plantingsTitle'),
          description: t('plantingsDest'),
          icon: <PlantingIcon />,
        }}
      />
    </>
  )
}

export default HomeIconStrengths
