import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {useTranslations} from 'next-intl'
import {useEffect, useRef} from 'react'

import {type IDayInfoProps} from './_type/IDayInfoProps'
import s from './css.module.scss'

function DayInfo({data: {dayOff, workingHours}}: IDayInfoProps) {
  const t = useTranslations('dashboard.getWorkHours')

  const dayOffRef = useRef(null)
  const workRef = useRef(null)

  const dayOffAnimRef = useRef<gsap.core.Tween | gsap.core.Timeline>(null)
  const workAnimRef = useRef<gsap.core.Tween | gsap.core.Timeline>(null)
  const dayOffAnimFun = useRef<(m: boolean) => void>(null)
  const workAnimFun = useRef<(m: boolean) => void>(null)

  useGSAP(() => {
    const mm = gsap
      .matchMedia()
      .add({small: '(max-width: 50rem)', motion: '(prefers-reduced-motion: no-preference)'}, (context) => {
        const {small} = context.conditions!
        const ele1 = dayOffRef.current
        const ele2 = workRef.current

        dayOffAnimRef.current?.kill()
        workAnimRef.current?.kill()
        if (small) {
          dayOffAnimFun.current = (s) => {
            dayOffAnimRef.current = gsap.to(ele1, {height: s ? 'auto' : '0'})
          }
          workAnimFun.current = (s) => {
            workAnimRef.current = gsap.to(ele2, {height: s ? 'auto' : '0'})
          }
        } else {
          dayOffAnimFun.current = (s) => {
            dayOffAnimRef.current = gsap.to(ele1, {width: s ? 'auto' : '0'})
          }
          workAnimFun.current = (s) => {
            workAnimRef.current = gsap.to(ele2, {width: s ? 'auto' : '0'})
          }
        }

        return () => {
          dayOffAnimRef.current = null
          workAnimRef.current = null
          gsap.killTweensOf(ele1)
          gsap.killTweensOf(ele2)
          gsap.set(ele1, {clearProps: 'all'})
          gsap.set(ele2, {clearProps: 'all'})
        }
      })

    return () => mm.revert()
  })

  useEffect(() => {
    dayOffAnimFun.current?.(dayOff.length > 0)
  }, [dayOff])

  useEffect(() => {
    workAnimFun.current?.(workingHours.length > 0)
  }, [workingHours])

  return (
    <>
      <section className={s.sec} ref={dayOffRef}>
        <div className={s.con}>
          <h1>{t('dayOff')}</h1>
          <ul>
            {dayOff.map(({reason}, i) => (
              <li key={i}>{reason}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className={s.sec} ref={workRef}>
        <div className={s.con}>
          <h1>{t('work')}</h1>
          <ul>
            {workingHours.map(({location}, i) => (
              <li key={i}>{location}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default DayInfo
