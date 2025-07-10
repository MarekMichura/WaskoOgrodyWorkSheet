'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'
import {useTranslations} from 'next-intl'
import {useCallback, useRef} from 'react'

import s from './css.module.scss'
import SectionElement from './element'

const diggerIcon = dynamic(() => import('@/components/lottie/digger/digger'), {ssr: false})
const SoilIcon = dynamic(() => import('@/components/lottie/soil/soil'), {ssr: false})
const PlantIcon = dynamic(() => import('@/components/lottie/plant/plant'), {ssr: false})
const ParkIcon = dynamic(() => import('@/components/lottie/park/park'), {ssr: false})
const CutterIcon = dynamic(() => import('@/components/lottie/cutter/cutter'), {ssr: false})
const BluePrintIcon = dynamic(() => import('@/components/lottie/bluePrint/bluePrint'), {ssr: false})

function HomeRotateSection() {
  const t = useTranslations('home.icons')
  const conRef = useRef<HTMLElement>(null)
  const refs = useRef<HTMLElement[]>([])

  useGSAP(() => {
    const panels = refs.current
    const con = conRef.current
    const length = panels.length - 1

    gsap.set(con, {height: `${panels.length * 100}dvh`})
    panels.forEach((panel, i) => {
      gsap.set(panel, {xPercent: -50, x: `${45 * i}dvw`, rotateZ: 45 * i, transformOrigin: 'center bottom'})
    })

    const pin = gsap.to(panels[0], {
      scrollTrigger: {
        trigger: con,
        start: '0%',
        end: 'bottom bottom',
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    })

    const st = ScrollTrigger.create({
      trigger: con,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: ({progress}) => {
        const p = progress * length
        panels.map((panel, j) => {
          const i = p - j
          gsap.set(panel, {xPercent: -50, x: `${-45 * i}dvw`, rotateZ: -45 * i, transformOrigin: 'center bottom'})
        })
      },
      scrub: 1,
    })

    return () => {
      pin.kill()
      st.kill()
      refs.current = []
    }
  }, [])

  const refAdd = useCallback((ref: HTMLLIElement) => {
    if (ref && !refs.current.includes(ref)) {
      refs.current.push(ref)
    }
  }, [])

  return (
    <section className={s.sec} ref={conRef}>
      <SectionElement ref={refAdd} Icon={diggerIcon} title={t('greenLandTitle')} text={t('greenLandDest')} />
      <SectionElement ref={refAdd} Icon={SoilIcon} title={t('greenRoofTitle')} text={t('greenRoofDest')} />
      <SectionElement ref={refAdd} Icon={PlantIcon} title={t('plantingsTitle')} text={t('plantingsDest')} />
      <SectionElement ref={refAdd} Icon={ParkIcon} title={t('architectureTitle')} text={t('architectureDest')} />
      <SectionElement
        ref={refAdd}
        Icon={CutterIcon}
        title={t('greenMaintenanceTitle')}
        text={t('greenMaintenanceDest')}
      />
      <SectionElement ref={refAdd} Icon={BluePrintIcon} title={t('projectsTitle')} text={t('projectsDest')} />
    </section>
  )
}

export default HomeRotateSection
