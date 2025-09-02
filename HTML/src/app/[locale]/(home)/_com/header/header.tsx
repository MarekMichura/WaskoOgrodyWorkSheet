'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollSmoother} from 'gsap/ScrollSmoother'
import dynamic from 'next/dynamic'
import {useTranslations} from 'next-intl'
import {useCallback, useEffect, useRef, useState} from 'react'

import Ripple from '@/components/ripple/ripple'
import LogoFullImg from '@/images/logo/logoFullImg'
import {usePathname, useRouter} from '@/locale/navigation'
import {type IPaths} from '@/locale/routing'
import MenuLoadIcon from '@/lottie/menu/menuLoad'
import {clsx} from '@/utils/func/clsx'

import s from './css.module.scss'
const MenuIcon = dynamic(() => import('@/lottie/menu/menu'), {ssr: false, loading: MenuLoadIcon})

function HomeHeader() {
  const t = useTranslations('header')
  const [state, setState] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navRef = useRef(null)
  const listRef = useRef(null)
  const timelineRef = useRef<gsap.core.Timeline>(null)

  useGSAP(() => {
    const nav = navRef.current
    const list = listRef.current
    if (!nav || !list) return

    function onOpen() {
      const scroll = ScrollSmoother.get()
      scroll?.scrollTop()
      scroll?.paused(true)
    }

    function onClose() {
      const scroll = ScrollSmoother.get()
      scroll?.paused(false)
    }

    const mm = gsap.matchMedia()
    mm.add('(max-width: 50rem)', () => {
      timelineRef.current = gsap
        .timeline({paused: true})
        .fromTo(
          nav,
          {opacity: 0, pointerEvents: 'none'},
          {opacity: 1, pointerEvents: 'all', duration: 0.5, onStart: onOpen, onReverseComplete: onClose}
        )
        .fromTo(list, {xPercent: -100}, {xPercent: 0, duration: 0.5}, 0.125)
    })

    return () => {
      mm.revert()
    }
  })
  useEffect(() => {
    const tl = timelineRef.current
    if (!tl || !scroll) return

    if (!state) {
      tl.reverse()
    } else {
      tl.play()
    }
  }, [state])

  const open = useCallback(() => {
    setState(true)
  }, [])
  const close = useCallback(() => {
    setState(false)
  }, [])
  const stopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
  }, [])

  // prettier-ignore
  const scrollToPage = useCallback((ele?: string, page?: IPaths) => {
    function scrollTo() {
      const scroll = ScrollSmoother.get()
      if (ele) scroll?.scrollTo(ele, true, 'top top')
      else scroll?.scrollTop()
      scroll?.paused(false)
    }

    if (!page || page === pathname) return scrollTo()
    router.push(page)
    let c = 0
    const interval = setInterval(() => {
      if (window.location.pathname === page) {
        clearInterval(interval)
        scrollTo()
      }
      if (c > 10) {
        clearInterval(interval)
      }
      c++
    }, 100)
  }, [pathname, router])

  const scrollInfo = useCallback(() => {
    setState(false)
    scrollToPage('#info', '/')
  }, [scrollToPage])
  const scrollProjects = useCallback(() => {
    setState(false)
    scrollToPage('#projects', '/')
  }, [scrollToPage])
  const scrollRoofs = useCallback(() => {
    setState(false)
    scrollToPage(undefined, '/roof')
  }, [scrollToPage])
  const scrollContact = useCallback(() => {
    setState(false)
    scrollToPage('#footer')
  }, [scrollToPage])

  return (
    <header className={clsx(s.header, 'flexBetween')}>
      <LogoFullImg alt="Logo" />

      <Ripple defClass defColor="light" className={s.menu} onClick={open}>
        <MenuIcon status={state} />
      </Ripple>

      <nav className={s.nav} onClick={close} ref={navRef}>
        <ul className={s.list} onClick={stopPropagation} ref={listRef}>
          <li className={clsx(s.list, s.listLogo)}>
            <LogoFullImg alt="Logo" />
          </li>
          <li className={s.ele}>
            <Ripple defClass defColor="light" className={s.btn} onClick={scrollInfo}>
              {t('info')}
            </Ripple>
          </li>
          {/* <li className={s.ele}>
            <Ripple defClass defColor="light" className={s.btn}>
              {t('map')}
            </Ripple>
          </li> */}
          <li className={s.ele}>
            <Ripple defClass defColor="light" className={s.btn} onClick={scrollProjects}>
              {t('projects')}
            </Ripple>
          </li>
          <li className={s.ele}>
            <Ripple defClass defColor="light" className={s.btn} onClick={scrollRoofs}>
              {t('roofs')}
            </Ripple>
          </li>
          <li className={s.ele}>
            <Ripple defClass defColor="light" className={s.btn} onClick={scrollContact}>
              {t('contact')}
            </Ripple>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HomeHeader
