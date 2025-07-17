'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import dynamic from 'next/dynamic'
import {useCallback, useEffect, useRef, useState, type ComponentType} from 'react'
import {useTranslations} from 'use-intl'

import Ripple from '@/components/ripple/ripple'
import {type ILocalization} from '@/locale/translations/pl_PL'
import {type IRawTranslationText} from '@/utils/type/translationText/IRawTranslationText'
import useRawTranslationText from '@/utils/type/translationText/useRawTranslationText'

import {EHomeParts} from '../../_goto/EHomeParts'

import s from './css.module.scss'

const diggerIcon = dynamic(() => import('@/components/lottie/digger/digger'), {ssr: false})
const SoilIcon = dynamic(() => import('@/components/lottie/soil/soil'), {ssr: false})
const PlantIcon = dynamic(() => import('@/components/lottie/plant/plant'), {ssr: false})
const ParkIcon = dynamic(() => import('@/components/lottie/park/park'), {ssr: false})
const CutterIcon = dynamic(() => import('@/components/lottie/cutter/cutter'), {ssr: false})
const BluePrintIcon = dynamic(() => import('@/components/lottie/bluePrint/bluePrint'), {ssr: false})

interface IHomeSectElementProps {
  Icon: ComponentType<{status: boolean}>
  theme: Exclude<keyof ILocalization['home']['sect'], 'btn'>
}

function HomeSectElement({Icon, theme}: IHomeSectElementProps) {
  const t_sect = useTranslations(`home.sect`)
  const t_theme = useTranslations(`home.sect.${theme}`)
  const text = useRawTranslationText(t_theme.raw('text') as IRawTranslationText)

  const [status, setStatus] = useState(false)
  const [open, setOpen] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const onMouseEnter = useCallback(() => setStatus(true), [])
  const onMouseLeave = useCallback(() => setStatus(false), [])
  const onClick = useCallback(() => {
    setStatus(true)
    timeoutRef.current = setTimeout(() => setStatus(false), 1000)
  }, [])

  const cancel = useCallback((e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation(), [])
  const openWin = useCallback(() => setOpen((p) => !p), [])
  const closeWin = useCallback(() => setOpen((p) => !p), [])

  const panelRef = useRef(null)
  useGSAP(() => {
    const smoother = ScrollSmoother.get()
    smoother?.paused(open)

    gsap.set(panelRef.current, {top: open ? smoother?.scrollTop() : 0})
    gsap.to(panelRef.current, {
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'all' : 'none',
      backdropFilter: open ? 'blur(10px)' : 'blur(0)',
    })
  }, [open])

  return (
    <div className={s.ele} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
      <div className={s.icon}>
        <Icon status={status} />
      </div>
      <h1 className={s.title}>{t_theme('title')}</h1>
      <h2 className={s.subTitle}>{t_theme('subtitle')}</h2>
      {text[0]}
      <Ripple className={s.btn} onClick={openWin} defClass>
        {t_sect('btn')}
      </Ripple>
      <div ref={panelRef} className={s.panel} onClick={closeWin}>
        <div className={s.panelCon} onClick={cancel}>
          <h1>{t_theme('title')}</h1>
          <h2>{t_theme('subtitle')}</h2>
          {text}
        </div>
      </div>
    </div>
  )
}

function HomeSect() {
  return (
    <section className={s.con} id={EHomeParts.info}>
      <HomeSectElement theme="Landscaping" Icon={diggerIcon} />
      <HomeSectElement theme="Roof" Icon={SoilIcon} />
      <HomeSectElement theme="Planting" Icon={PlantIcon} />
      <HomeSectElement theme="Architecture" Icon={ParkIcon} />
      <HomeSectElement theme="Maintenance" Icon={CutterIcon} />
      <HomeSectElement theme="Project" Icon={BluePrintIcon} />
    </section>
  )
}

export default HomeSect
