'use client'

import gsap from 'gsap'
import {Flip} from 'gsap/Flip'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useEffect, useRef} from 'react'

import HeroSection from '@/components/hero/heroSection'
import {type IHeroSection} from '@/components/hero/_type/IHeroSection'
import {useSection} from '@/utils/hook/useSection'

import {EHeaderPosition} from '../../../_com/header/_enum/EHeaderPosition'

import s from './css.module.scss'

function HomeHeroImg(props: Omit<IHeroSection, 'children'>) {
  const sectionRef = useSection('heroImg', {status: EHeaderPosition.down})
  const imgRef = useRef<HTMLDivElement>(null)
  const conRef = useRef(null)

  useEffect(() => {
    let triggerAnim: ScrollTrigger | null = null
    let tweenOpacity: gsap.core.Tween | null = null
    let tl: gsap.core.Timeline | null = null
    if (!conRef.current) return

    const resizeObserver = new ResizeObserver(() => {
      if (triggerAnim) {
        tl?.kill()
        triggerAnim.kill()
        tweenOpacity?.kill()
        setUpAnimation()
      }
    })

    function setUpAnimation() {
      const logo = document.querySelector('#HeaderLogo')
      const con = imgRef.current
      const section = conRef.current
      if (!logo || !con || !section) return

      const smoother = ScrollSmoother.get()
      const prevScroll = smoother ? smoother.scrollTop() : window.scrollY
      if (smoother?.progress === undefined) window.scrollTo(0, 0)
      else smoother.scrollTo(0, false)

      gsap.set(logo, {clearProps: 'all'})
      tweenOpacity = gsap.to(logo, {autoAlpha: 1})

      const prevCon = logo.parentNode!
      con.appendChild(logo)
      logo.getBoundingClientRect()
      const state = Flip.getState(logo)
      prevCon.appendChild(logo)

      tl = gsap.timeline()
      tl.add(Flip.from(state, {pointerEvents: 'none'}))
      tl.from(logo, {'--contrast': 5, '--size': '1px'}, 0)

      triggerAnim = ScrollTrigger.create({
        trigger: section,
        start: 'center center',
        end: 'bottom top',
        animation: tl,
        scrub: 1,
      })

      if (smoother === undefined) window.scrollTo(0, prevScroll)
      else smoother.scrollTo(prevScroll, false)
    }

    setUpAnimation()
    resizeObserver.observe(conRef.current)
    return () => {
      gsap.set('#HeaderLogo', {clearProps: 'all'})
      gsap.set('#HeaderLogo', {autoAlpha: '1'})
      tl?.kill()
      triggerAnim?.kill()
      tweenOpacity?.kill()
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <>
      <span ref={sectionRef} />
      <HeroSection {...props} ref={conRef}>
        <div ref={imgRef} className={s.heroLogo} />
      </HeroSection>
    </>
  )
}

export default HomeHeroImg
