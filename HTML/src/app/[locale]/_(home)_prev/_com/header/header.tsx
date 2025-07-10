'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useCallback, useEffect, useRef, useState} from 'react'
import {shallowEqual} from 'react-redux'

import {useSelector} from '@/components/redux'

import {bottomHeader} from './_data/bottomHeader'
import {topHeader} from './_data/topHeader'
import {EHeaderPosition} from './_enum/EHeaderPosition'
import HeaderBottom from './bottom/bottom'
import s from './css.module.scss'
import HeaderTop from './top/top'

function HomeHeader() {
  const [{scroll, position}, setState] = useState({scroll: true, position: EHeaderPosition.down})

  const mmRef = useRef<gsap.MatchMedia>(null)
  const sectionTopRef = useRef(null)
  const sectionBottomRef = useRef(null)

  // get data from redux
  const {forcePos, opacity} = useSelector(({section}) => {
    if (section.current === undefined) return {}
    if (section.current >= section.sections.length || section.current < 0) return {}
    const element = section.sections[section.current]
    const forcePos = element.navbar?.status
    const opacity = element.navbar?.opacity

    return {forcePos, opacity}
  }, shallowEqual)

  // create match media
  useEffect(() => {
    const mm = gsap.matchMedia()
    mmRef.current = mm

    return () => mm.revert()
  }, [])

  // set position from section
  useEffect(() => {
    if (forcePos === undefined) return

    setState({scroll: false, position: forcePos})
    return () => setState((prev) => ({scroll: true, position: prev.position}))
  }, [forcePos])

  // event function scroll
  const scrollUpdate = useCallback((trigger: ScrollTrigger) => {
    const direction = trigger.direction

    setState((prev) => {
      if (!prev.scroll) return prev
      if (direction > 0) return {scroll: true, position: EHeaderPosition.up}
      if (direction < 0) return {scroll: true, position: EHeaderPosition.down}
      else return prev
    })
  }, [])

  // create scroll event
  useGSAP(() => {
    if (!scroll) return
    const trigger = ScrollTrigger.create({id: 'headerScroll', start: 0, end: 'max', onUpdate: scrollUpdate})

    return () => trigger.kill()
  }, [scroll])

  // animate header position
  useGSAP(() => {
    mmRef.current?.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to([sectionTopRef.current, sectionBottomRef.current], {opacity: opacity})
      gsap.to(sectionBottomRef.current, bottomHeader[position])
      gsap.to(sectionTopRef.current, topHeader[position])
    })
  }, [position, opacity])

  return (
    <header className={s.header}>
      <HeaderTop ref={sectionTopRef} />
      <HeaderBottom ref={sectionBottomRef} />
    </header>
  )
}

export default HomeHeader
