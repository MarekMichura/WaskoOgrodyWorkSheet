'use client'

import dynamic from 'next/dynamic'
import {useTranslations} from 'next-intl'

import IconsDescription from '@/components/IconDes/IconsDes'
import useSection from '@/utils/hooks/useSection'
import useStickyCard from '@/utils/hooks/useStickyCard'

const ParkIcon = dynamic(() => import('@/components/img/icon/park/park'), {ssr: false})
const SoilIcon = dynamic(() => import('@/components/img/icon/soil/soil'), {ssr: false})
const CutterIcon = dynamic(() => import('@/components/img/icon/cutter/cutter'), {ssr: false})

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
          icon: <ParkIcon />,
        }}
        icon2={{
          title: t('greenRoofTitle'),
          description: t('greenRoofDest'),
          icon: <SoilIcon />,
        }}
        icon3={{
          title: t('greenMaintenanceTitle'),
          description: t('greenMaintenanceDest'),
          icon: <CutterIcon />,
        }}
      />
    </>
  )
}

export default HomeIconStrengths
