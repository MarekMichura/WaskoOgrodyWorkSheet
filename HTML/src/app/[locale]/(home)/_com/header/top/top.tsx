import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import {useLocale, useTranslations} from 'next-intl'
import {forwardRef, useCallback, useEffect, useRef, useState} from 'react'

import FlagEnglishIcon from '@/components/icon/flag/flagEnglish'
import FlagPolishIcon from '@/components/icon/flag/flagPolish'
import LangLoadIcon from '@/components/icon/lang/langLoad'
import MenuLoadIcon from '@/components/icon/menu/menuLoad'
import Logo from '@/components/img/logo/logoFull.png'
import {useDispatch} from '@/components/redux'
import {addBlurAction, removeBlurAction} from '@/components/redux/sliceBackBlur'
// import {changeTheme} from '@/components/redux/sliceTheme'
import Ripple from '@/components/ripple/ripple'
import {Link, usePathname} from '@/locale/navigation'
import {EHref} from '@/utils/enum/EHref'
import {clsx} from '@/utils/func/clsx'

import s from './css.module.scss'
import HeaderNavLink from './link/link'

const MenuIcon = dynamic(() => import('@/components/icon/menu/menu'), {ssr: false, loading: MenuLoadIcon})
const LangIcon = dynamic(() => import('@/components/icon/lang/lang'), {ssr: false, loading: LangLoadIcon})
// const ThemeIcon = dynamic(() => import('@/components/icon/theme/theme'), {ssr: false, loading: ThemeLoadIcon})

const HeaderTop = forwardRef<HTMLElement>((_, ref) => {
  const [menuProj, setMenuProj] = useState(false)
  const [menuLang, setMenuLang] = useState(false)
  const [menuNav, setMenuNav] = useState(false)
  const t = useTranslations('nav')

  const dispatch = useDispatch()

  const path = usePathname()
  const lang = useLocale()

  const menuConRef = useRef(null)
  const menuEleRefs = useRef<HTMLElement[]>([])
  const langConRef = useRef(null)
  const langEleRefs = useRef<HTMLElement[]>([])
  const navConRef = useRef(null)
  const navEleRefs = useRef<HTMLElement[]>([])

  const menuAnimationRef = useRef<gsap.core.Tween | gsap.core.Timeline>(null)
  const menuAnimationFun = useRef<(menu: boolean) => void>(null)

  const langAnimationRef = useRef<gsap.core.Tween | gsap.core.Timeline>(null)
  const langAnimationFun = useRef<(menu: boolean) => void>(null)

  const navAnimationRef = useRef<gsap.core.Tween | gsap.core.Timeline>(null)
  const navAnimationFun = useRef<(menu: boolean) => void>(null)

  useEffect(() => {
    gsap.to('#HeaderLogo', {autoAlpha: 1})
  }, [])

  useGSAP(() => {
    const mm = gsap
      .matchMedia()
      .add({small: '(max-width: 50rem)', motion: '(prefers-reduced-motion: no-preference)'}, (context) => {
        const {small, motion} = context.conditions!
        const con = navConRef.current
        const ele = navEleRefs.current
        if (!small || !ele) return

        if (!motion) {
          navAnimationFun.current = (menu: boolean) => {
            navAnimationRef.current?.kill()
            navAnimationRef.current = gsap.to(con, {
              duration: 0.5,
              opacity: menu ? 1 : 0,
              ease: menu ? 'power2.out' : 'power2.in',
              pointerEvents: menu ? 'all' : 'none',
            })
          }
          return
        }

        gsap.set(ele, {y: -30, scale: 0})
        navAnimationFun.current = (menu: boolean) => {
          navAnimationRef.current?.kill()
          navAnimationRef.current = gsap
            .timeline()
            .to(con, {
              duration: 0.5,
              xPercent: menu ? 0 : 100,
              opacity: menu ? 1 : 0,
              ease: menu ? 'bounce.out' : 'power2.in',
              pointerEvents: menu ? 'all' : 'none',
            })
            .to(ele, {duration: menu ? 0.3 : 0, y: menu ? 0 : -30, scale: menu ? 1 : 0, stagger: menu ? 0.1 : 0})
        }

        return () => {
          navAnimationFun.current = null
          gsap.killTweensOf(con)
          gsap.killTweensOf(ele)
          gsap.set(con, {clearProps: 'all'})
          gsap.set(ele, {clearProps: 'all'})
          setMenuNav(false)
        }
      })

    return () => mm.revert()
  }, [])

  useGSAP(() => {
    const mm = gsap
      .matchMedia()
      .add({small: '(max-width: 50rem)', motion: '(prefers-reduced-motion: no-preference)'}, (context) => {
        const {small, motion} = context.conditions!
        const con = menuConRef.current
        const ele = menuEleRefs.current
        if (small || !ele) return

        if (!motion) {
          menuAnimationFun.current = (menu: boolean) => {
            menuAnimationRef.current?.kill()
            menuAnimationRef.current = gsap.to(con, {
              duration: 0.5,
              opacity: menu ? 1 : 0,
              ease: menu ? 'power2.out' : 'power2.in',
              pointerEvents: menu ? 'all' : 'none',
            })
          }
          return
        }

        gsap.set(ele, {y: -30, scale: 0})
        gsap.set(con, {top: 0, width: '3rem', height: '3rem'})
        menuAnimationFun.current = (menu: boolean) => {
          menuAnimationRef.current?.kill()
          menuAnimationRef.current = gsap
            .timeline()
            .to(
              con,
              {
                duration: 0.5,
                opacity: menu ? 1 : 0,
                top: menu ? '6rem' : 0,
                pointerEvents: menu ? 'all' : 'none',
                ease: menu ? 'bounce.out' : 'power2.in',
              },
              '<'
            )
            .to(
              con,
              {
                duration: 0.3,
                delay: menu ? 0.3 : 0,
                width: menu ? 'auto' : '3rem',
                height: menu ? 'auto' : '3rem',
              },
              '<'
            )
            .to(
              ele,
              {
                duration: menu ? 0.3 : 0.1,
                delay: menu ? 0.4 : 0,
                y: menu ? 0 : -30,
                scale: menu ? 1 : 0,
                stagger: menu ? 0.1 : 0,
              },
              '<'
            )
        }

        return () => {
          menuAnimationFun.current = null
          gsap.killTweensOf(con)
          gsap.killTweensOf(ele)
          gsap.set(con, {clearProps: 'all'})
          gsap.set(ele, {clearProps: 'all'})
          setMenuProj(false)
        }
      })

    return () => mm.revert()
  }, [])

  useGSAP(() => {
    const mm = gsap
      .matchMedia()
      .add({small: '(max-width: 50rem)', motion: '(prefers-reduced-motion: no-preference)'}, (context) => {
        const {small, motion} = context.conditions!
        const con = langConRef.current
        const ele = langEleRefs.current
        if (small || !ele) return

        if (!motion) {
          langAnimationFun.current = (menu: boolean) => {
            langAnimationRef.current?.kill()
            langAnimationRef.current = gsap.to(con, {
              duration: 0.5,
              opacity: menu ? 1 : 0,
              ease: menu ? 'power2.out' : 'power2.in',
              pointerEvents: menu ? 'all' : 'none',
            })
          }
          return
        }

        gsap.set(ele, {y: -30, scale: 0})
        gsap.set(con, {top: 0, width: '3rem', height: '3rem'})
        langAnimationFun.current = (menu: boolean) => {
          langAnimationRef.current?.kill()
          langAnimationRef.current = gsap
            .timeline()
            .to(
              con,
              {
                duration: 0.5,
                opacity: menu ? 1 : 0,
                top: menu ? '6rem' : 0,
                pointerEvents: menu ? 'all' : 'none',
                ease: menu ? 'bounce.out' : 'power2.in',
              },
              '<'
            )
            .to(
              con,
              {
                duration: 0.3,
                delay: menu ? 0.3 : 0,
                width: menu ? 'auto' : '3rem',
                height: menu ? 'auto' : '3rem',
              },
              '<'
            )
            .to(
              ele,
              {
                duration: menu ? 0.3 : 0.1,
                delay: menu ? 0.4 : 0,
                y: menu ? 0 : -30,
                scale: menu ? 1 : 0,
                stagger: menu ? 0.1 : 0,
              },
              '<'
            )
        }

        return () => {
          langAnimationFun.current = null
          gsap.killTweensOf(con)
          gsap.killTweensOf(ele)
          gsap.set(con, {clearProps: 'all'})
          gsap.set(ele, {clearProps: 'all'})
          setMenuLang(false)
        }
      })

    return () => mm.revert()
  }, [])

  const closeAll = useCallback(() => {
    setMenuProj(false)
    setMenuLang(false)
    setMenuNav(false)
  }, [])

  useEffect(() => {
    if (!menuNav && !menuLang) return
    dispatch(addBlurAction(closeAll))

    return () => {
      dispatch(removeBlurAction(closeAll))
    }
  }, [menuNav, menuLang, dispatch, closeAll])

  useEffect(() => {
    menuAnimationFun.current?.(menuProj)
  }, [menuProj])

  useEffect(() => {
    navAnimationFun.current?.(menuNav)
  }, [menuNav])

  useEffect(() => {
    langAnimationFun.current?.(menuLang)
  }, [menuLang])

  // const themeClick = useCallback(() => {
  //   dispatch(changeTheme())
  // }, [dispatch])

  const menuClick = useCallback(() => {
    setMenuProj((prev) => !prev)
  }, [])

  const langClick = useCallback(() => {
    setMenuLang((prev) => !prev)
  }, [])

  const navClick = useCallback(() => {
    setMenuNav((prev) => !prev)
  }, [])

  const addMenuRefs = useCallback((ref: HTMLLIElement) => {
    if (menuEleRefs.current.includes(ref)) return
    menuEleRefs.current.push(ref)
  }, [])

  const addLangRefs = useCallback((ref: HTMLLIElement) => {
    langEleRefs.current.push(ref)
  }, [])

  const addNavRefs = useCallback((ref: HTMLLIElement) => {
    navEleRefs.current.push(ref)
  }, [])

  const [mainMenu, ...rest] = EHref

  return (
    <section className={s.container} ref={ref}>
      <div className={s.holder}>
        <Image src={Logo} className={s.logo} alt="Logo" priority id="HeaderLogo" />
      </div>

      <Ripple className={s.menu} onClick={navClick}>
        <MenuIcon status={false} />
      </Ripple>

      <nav className={s.nav} ref={navConRef}>
        <ul className={s.elements}>
          <li className={s.element} ref={addNavRefs}>
            <HeaderNavLink href={mainMenu.href} text={mainMenu.text} />
          </li>

          <li className={s.element} ref={addNavRefs}>
            <Ripple className={clsx(s.link, s.btnLink, s.btnLang)} onClick={menuClick}>
              {t('projects')}
            </Ripple>
            {/* <Ripple className={clsx(s.btnLink)} onClick={menuClick}>
              <LangIcon />
              <p>{t('projects')}</p>
            </Ripple> */}

            <ul className={s.langs} ref={menuConRef}>
              {rest.map(({href, text}, i) => (
                <li className={s.element} key={i} ref={addMenuRefs}>
                  <HeaderNavLink href={href} text={text} />
                </li>
              ))}
            </ul>
          </li>

          {/* {EHref.map(({href, text}, i) => (
            <li className={s.element} key={i} ref={addNavRefs}>
              <HeaderNavLink href={href} text={text} />
            </li>
          ))} */}

          <li className={s.elementLast} style={{marginTop: 'auto'}} />

          {/* <li className={s.element} ref={addNavRefs}>
            <Ripple className={s.btn} onClick={themeClick}>
              <ThemeIcon />
              <p>{t('changeTheme')}</p>
            </Ripple>
          </li> */}

          <li className={s.element} ref={addNavRefs}>
            <Ripple className={clsx(s.btn, s.btnLang)} onClick={langClick}>
              <LangIcon />
              <p>{t('setLang')}</p>
            </Ripple>

            <ul className={s.langs} ref={langConRef}>
              <li className={s.lang} ref={addLangRefs}>
                <Ripple as={Link} href={path} className={s.langBtn} locale="en-US" disabled={lang === 'en-US'}>
                  <FlagEnglishIcon />
                  <p className={s.name}>English</p>
                </Ripple>
              </li>

              <li className={s.lang} ref={addLangRefs}>
                <Ripple as={Link} href={path} className={s.langBtn} locale="pl-PL" disabled={lang === 'pl-PL'}>
                  <FlagPolishIcon />
                  <p className={s.name}>Polski</p>
                </Ripple>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </section>
  )
})

HeaderTop.displayName = 'HeaderTop'
export default HeaderTop
