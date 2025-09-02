'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'
import {useTranslations} from 'next-intl'
import {useCallback, useEffect, useRef, useState} from 'react'

import Ripple from '@/components/ripple/ripple'
import ArrowIcon from '@/images/svg/arrow'

import s from './css.module.scss'
import HomeCardBigImg from './homeCardBigImg'
import {type IHomeCardProps} from './IHomeCardProps'
import {nextPrevImg} from './nextPrevImg'

const PlayIcon = dynamic(() => import('@/lottie/play/play'), {ssr: false})
function HomeCard({name, title, desc, Img, count}: IHomeCardProps) {
  const t_card = useTranslations('home.cards')
  const [{current, big, autoPlay, triggered, moving}, setStatus] = useState({
    big: false,
    current: 0,
    autoPlay: true,
    triggered: false,
    moving: false,
  })

  const triggerRef = useRef<HTMLButtonElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)
  const scrollTriggerRef = useRef<ScrollTrigger>(null)
  const scaleTimelineRef = useRef<gsap.core.Timeline>(null)
  const opacityTimelineRef = useRef<gsap.core.Timeline>(null)

  type IChangeCurrent = {num: number; plus?: undefined} | {num?: undefined; plus: boolean}
  // prettier-ignore
  const changeCurrent = useCallback(({num, plus}: IChangeCurrent) => {
    setStatus((prev) => {
      let current = num ?? plus ? prev.current + 1 : prev.current - 1
      if (prev.current === num || prev.moving) return prev
      if (current < 0) current = count - 1
      if (current >= count) current = 0

      scaleTimelineRef.current?.pause()
      opacityTimelineRef.current?.play()
      return {...prev, current, moving: true}
    })
  },[count])
  const enter = useCallback(() => {
    setStatus((prev) => ({...prev, triggered: true}))
  }, [])
  const leave = useCallback(() => {
    setStatus((prev) => ({...prev, triggered: false}))
  }, [])
  const endMoving = useCallback(() => {
    setStatus((prev) => ({...prev, moving: false}))
    scaleTimelineRef.current?.progress(0)
    opacityTimelineRef.current?.pause()
    opacityTimelineRef.current?.progress(0)
  }, [])
  const changeAutoPlay = useCallback(() => {
    setStatus((prev) => {
      const autoPlay = !prev.autoPlay
      if (autoPlay) scaleTimelineRef.current?.play()
      else scaleTimelineRef.current?.pause()

      return {...prev, autoPlay}
    })
  }, [])
  const changeBig = useCallback(() => {
    setStatus((prev) => ({...prev, big: !prev.big}))
  }, [])
  const closeBig = useCallback(() => {
    setStatus((prev) => ({...prev, big: false}))
  }, [])
  const prev = useCallback(() => {
    changeCurrent({plus: false})
  }, [changeCurrent])
  const next = useCallback(() => {
    changeCurrent({plus: true})
  }, [changeCurrent])

  useGSAP(() => {
    const loading = loadingRef.current
    const trigger = triggerRef.current
    if (loading === null || trigger === null) return

    scaleTimelineRef.current = gsap
      .timeline({paused: true})
      .fromTo(loading, {'--scale': 0}, {'--scale': '100%', duration: 3, onComplete: next})
    opacityTimelineRef.current = gsap
      .timeline({paused: true})
      .fromTo(loading, {'--opacity': 1}, {'--opacity': 0, duration: 1.1, onComplete: endMoving})
    scrollTriggerRef.current = ScrollTrigger.create({
      trigger,
      start: 'top bottom',
      end: 'bottom top',
      onEnterBack: enter,
      onEnter: enter,
      onLeave: leave,
    })
  })

  useEffect(() => {
    function resize() {
      const trigger = scrollTriggerRef.current
      trigger?.refresh()
    }

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  useEffect(() => {
    if (!autoPlay || !triggered) return

    scaleTimelineRef.current?.play()
  }, [autoPlay, triggered, moving])

  const {nextImg, prevImg} = nextPrevImg(current, count)
  return (
    <article className={s.card}>
      <div className={s.slider} ref={loadingRef}>
        <Img id={prevImg} key={prevImg} props={{style: {left: '-150%'}, onClick: changeBig}} />
        <Img id={current} key={current} props={{style: {left: '50%'}, priority: true, onClick: changeBig}} />
        <Img id={nextImg} key={nextImg} props={{style: {left: '150%'}, onClick: changeBig}} />
        <Ripple defColor="light" className={s.imgLeft} onClick={prev}>
          <ArrowIcon />
        </Ripple>
        <Ripple defColor="light" className={s.imgRight} onClick={next}>
          <ArrowIcon />
        </Ripple>
        <Ripple defColor="dark" className={s.play} onClick={changeAutoPlay} ref={triggerRef}>
          <PlayIcon status={autoPlay} />
        </Ripple>
      </div>
      <div className={s.text}>
        <div className={s.sect}>
          <label className={s.label}>{t_card('cardName')}</label>
          <p>{name}</p>
        </div>
        <div className={s.sect}>
          <label className={s.label}>{t_card('cardTitle')}</label>
          <p>{title}</p>
        </div>
        <div className={s.sect}>
          <label className={s.label}>{t_card('cardAddress')}</label>
          <p>{}</p>
        </div>
        <div className={s.sect}>
          <label className={s.label}>{t_card('cardDesc')}</label>
          <p>{desc}</p>
        </div>
      </div>
      {big && (
        <HomeCardBigImg close={closeBig} key={current}>
          <Img id={current} props={{sizes: '100vw', placeholder: 'blur'}} />
        </HomeCardBigImg>
      )}
    </article>
  )
}

export default HomeCard
