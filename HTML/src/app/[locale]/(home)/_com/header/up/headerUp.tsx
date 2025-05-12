import clsx from 'clsx'
import {motion} from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import {useLocale, useTranslations} from 'next-intl'
import {forwardRef, useCallback, useState} from 'react'

import RippleBtn from '@/components/form/ripple/rippleBtn'
import RippleLink from '@/components/form/ripple/rippleLink'
import FlagEnglishIcon from '@/components/img/icon/lang/_flags/flagEnglish'
import FlagPolishIcon from '@/components/img/icon/lang/_flags/flagPolish'
import LoadingLangIcon from '@/components/img/icon/lang/loadLang'
import LoadMenuIcon from '@/components/img/icon/menu/loadMenu'
import LoadThemeIcon from '@/components/img/icon/theme/loadTheme'
import Logo from '@/components/img/logo/logoFull.png'
import {usePathname} from '@/locale/navigation'
import {EHref} from '@/utils/enums/EHref'
import useMenu, {EMenuState} from '@/utils/hooks/useMenu'
import useWindowsSize from '@/utils/hooks/useWindowSize'
import {useMutateChangeTheme} from '@/utils/query/theme/mutateSwitchTheme'

import {navVariations, langVariations, backVariations} from '../_data/upVariations'

import s from './css.module.scss'
import HeaderUpLink from './headerLink'

const MenuIcon = dynamic(() => import('@/components/img/icon/menu/menu'), {ssr: false, loading: LoadMenuIcon})
const ThemeIcon = dynamic(() => import('@/components/img/icon/theme/theme'), {ssr: false, loading: LoadThemeIcon})
const LangIcon = dynamic(() => import('@/components/img/icon/lang/lang'), {ssr: false, loading: LoadingLangIcon})

const HeaderUp = forwardRef<HTMLElement>(({}, ref) => {
  const themeMut = useMutateChangeTheme()

  const [disableMenu, setDisableMenu] = useState(false)
  const [navMenu, navMenuChange, navMenuClose] = useMenu({disableScrollOnOpen: true, disable: disableMenu})
  const [lanMenu, lanMenuChange, lanMenuClose] = useMenu({disableScrollOnOpen: true, disable: !disableMenu})

  const t = useTranslations('nav')
  const locale = useLocale()
  const path = usePathname()

  // size change event
  const changeSize = useCallback(() => {
    if (window.innerWidth > 800 && !disableMenu) setDisableMenu(true)
    else if (window.innerWidth <= 800 && disableMenu) setDisableMenu(false)
  }, [disableMenu])
  useWindowsSize(changeSize)

  // change theme
  const changeTheme = useCallback(() => themeMut.mutateAsync(), [themeMut])
  // close all menus
  const closeAll = useCallback(() => {
    navMenuClose()
    lanMenuClose()
  }, [lanMenuClose, navMenuClose])

  return (
    <section ref={ref} className={s.section}>
      <div className={s.logoHolder}>
        <Image alt="Logo" src={Logo} className={s.logo} placeholder="blur" priority />
      </div>

      <RippleBtn className={s.navOpener} onClick={navMenuChange}>
        <MenuIcon status={navMenu === EMenuState.open} />
      </RippleBtn>

      <motion.nav className={s.nav} animate={navMenu} variants={navVariations}>
        <ul className={s.list}>
          {EHref.map((link, i) => (
            <HeaderUpLink key={i} {...link} onClick={closeAll} />
          ))}
          <li className={s.listEle} style={{marginTop: 'auto'}}>
            <RippleBtn className={s.rippleIcon} onClick={changeTheme}>
              <ThemeIcon />
              <span className={s.hiddenSpan}>{t('changeTheme')}</span>
            </RippleBtn>
          </li>
          <li className={s.listEle}>
            <RippleBtn className={clsx(s.rippleIcon, s.noClickSmall)} onClick={lanMenuChange}>
              <LangIcon />
              <span className={s.hiddenSpan}>{t('setLang')}</span>
            </RippleBtn>
            <motion.ul className={s.langs} animate={lanMenu} variants={langVariations}>
              <li className={s.lang}>
                <RippleLink href={path} locale="en-US" disabled={locale === 'en-US'} className={s.rippleLang}>
                  <FlagEnglishIcon />
                  <span>English</span>
                </RippleLink>
              </li>
              <li className={s.lang}>
                <RippleLink href={path} locale="pl-PL" disabled={locale === 'pl-PL'} className={s.rippleLang}>
                  <FlagPolishIcon />
                  <span>Polski</span>
                </RippleLink>
              </li>
            </motion.ul>
          </li>
        </ul>
      </motion.nav>

      <motion.div
        className={s.back}
        onClick={closeAll}
        initial={{opacity: 0}}
        variants={backVariations}
        animate={navMenu === EMenuState.open || lanMenu === EMenuState.open ? 'open' : 'close'}
      />
    </section>
  )
})

HeaderUp.displayName = 'HeaderUp'
export default motion.create(HeaderUp)
