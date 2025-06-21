'use client'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import {useLocale, useTranslations} from 'next-intl'
import {useCallback, useEffect, useMemo, useRef, useState} from 'react'

import CalendarIcon from '@/components/icon/calendar'
import CommentIcon from '@/components/icon/comment'
import GardenCardIcon from '@/components/icon/gardenCard'
import HourGlassIcon from '@/components/icon/hourGlass'
import LogOutIcon from '@/components/icon/logOut'
import PaymentIcon from '@/components/icon/payment'
import UmbrellaIcon from '@/components/icon/umbrella'
import Logo from '@/components/img/logo/logoIcon.png'
import LetterAvatar from '@/components/letterAvatar/letterAvatar'
import FlagEnglishIcon from '@/components/lottie/flag/flagEnglish'
import FlagPolishIcon from '@/components/lottie/flag/flagPolish'
import LangLoadIcon from '@/components/lottie/lang/langLoad'
import Ripple from '@/components/ripple/ripple'
import {Link, usePathname, useRouter} from '@/locale/navigation'
import {EPermissions} from '@/utils/enum/EPermissions'
import {clsx} from '@/utils/func/clsx'
import useProfil from '@/utils/query/profil/useProfil'
import {logout} from '@/utils/request/logout/logout'
import {type IChildren} from '@/utils/type/IChildren'

import s from './css.module.scss'
import NavBtn from './link/btn'
import NavLink from './link/link'
import NavMenu from './menu/manu'
import NavSeparator from './separator/separator'

function DashboardNav({children}: IChildren) {
  const {profil} = useProfil()
  const role = profil.roles

  const asideAnimationRef = useRef<gsap.core.Tween | gsap.core.Timeline>(null)
  const asideAnimationFun = useRef<(m: boolean) => void>(null)
  const asideRef = useRef(null)
  const [{aside}, setState] = useState({aside: false})

  const router = useRouter()
  const t = useTranslations('dashboard.nav')
  const locale = useLocale()
  const path = usePathname()

  const {canAskForBonus, canAskForDayOff, canAskForRefound, isEmployer, isGardener} = useMemo(() => {
    const isEmployer = role.includes(EPermissions.employer)
    const canAskForDayOff = isEmployer && !role.includes(EPermissions.blockAskingForDayOff)
    const canAskForRefound = isEmployer && !role.includes(EPermissions.blockAskingForRefound)
    const canAskForBonus = isEmployer && !role.includes(EPermissions.blockAskingForBonus)

    const isGardener = role.includes(EPermissions.gardener)

    return {
      isEmployer,
      isGardener,
      canAskForBonus,
      canAskForDayOff,
      canAskForRefound,
    }
  }, [role])

  useGSAP(() => {
    const mm = gsap
      .matchMedia()
      .add({small: '(max-width: 30rem)', motion: '(prefers-reduced-motion: no-preference)'}, (context) => {
        const {small} = context.conditions!
        const ele = asideRef.current
        asideAnimationRef.current?.kill()
        if (small) {
          asideAnimationFun.current = (s) => {
            asideAnimationRef.current = gsap.to(ele, {xPercent: s ? 100 : 0, ease: 'bounce.out'})
          }
        } else {
          asideAnimationFun.current = (s) => {
            asideAnimationRef.current = gsap.to(ele, {width: s ? '18rem' : '5.5rem', ease: 'bounce.out'})
          }
        }

        return () => {
          asideAnimationFun.current = null
          gsap.killTweensOf(ele)
          gsap.set(ele, {clearProps: 'all'})
          setState((p) => ({...p, aside: false}))
        }
      })

    return () => mm.revert()
  })

  useEffect(() => {
    asideAnimationFun.current?.(aside)
  }, [aside])

  const changeState = useCallback(() => {
    setState((s) => ({...s, aside: !s.aside}))
  }, [])

  const logOut = useCallback(async () => {
    router.replace({pathname: '/login', query: {redirect: path}})
    logout()
  }, [path, router])

  return (
    <div className={s.con}>
      <header className={s.header}>
        <Ripple className={s.asideBtn} type="button" onClick={changeState}>
          <Image src={Logo} alt="Logo" className={s.logo} />
          <h1 className={s.asideH1}>Wawel garden</h1>
        </Ripple>
      </header>
      <main className={s.main}>{children}</main>

      <aside className={s.aside} ref={asideRef}>
        <Ripple className={clsx(s.asideBtn, s.hideSmall)} type="button" onClick={changeState}>
          <Image src={Logo} alt="Logo" className={s.logo} />
          <h1 className={s.asideH1}>Wawel garden</h1>
        </Ripple>

        <nav className={s.nav}>
          {isEmployer && (
            <>
              <NavSeparator text={t('work')} open={aside} />
              <NavLink href={'/getWorkHours'} text={t('getWorkHours')} Icon={<CalendarIcon />} />
              <NavLink href={'/setWorkHours'} text={t('setWorkHours')} Icon={<HourGlassIcon />} />
              {canAskForDayOff && <NavLink href={'/dayOff'} text={t('dayOff')} Icon={<UmbrellaIcon />} />}

              {(canAskForRefound || canAskForBonus) && <NavSeparator text={t('money')} open={aside} />}
              {canAskForBonus && <NavLink href={'/askBonus'} text={t('askBonus')} Icon={<HourGlassIcon />} />}
              {canAskForRefound && <NavLink href={'/reimburse'} text={t('reimburse')} Icon={<PaymentIcon />} />}
            </>
          )}

          {isGardener && (
            <>
              <NavSeparator text={t('gardener')} open={aside} />
              <NavLink href={'/chords'} text={t('chords')} Icon={<GardenCardIcon />} />
            </>
          )}

          <NavSeparator text={t('account')} open={aside} className={s.margin} />
          <NavMenu text={t('locale')} className={s.lang} Icon={<LangLoadIcon />} open={aside}>
            <NavLink href={path} locale="pl-PL" text="Polski" Icon={<FlagPolishIcon />} disabled={locale === 'pl-PL'} />
            <NavLink
              href={path}
              locale="en-US"
              text="English"
              Icon={<FlagEnglishIcon />}
              disabled={locale === 'en-US'}
            />
          </NavMenu>
          <NavLink href={'/comment'} text={t('comment')} Icon={<CommentIcon />} />
          <NavBtn text={t('logout')} Icon={<LogOutIcon />} click={() => logOut()} />

          <NavSeparator text={''} open={false} />
          <Ripple as={Link} className={s.profil} href={'/profil'}>
            {!profil.image || profil.image == '' ? (
              <LetterAvatar className={s.logo} />
            ) : (
              <Image src={profil.image} alt="profil" width={100} height={100} className={s.logo} />
            )}
            <h1 className={s.asideH1}>{`${profil.firstName} ${profil.lastName}`}</h1>
          </Ripple>
        </nav>
      </aside>
    </div>
  )
}

export default DashboardNav
