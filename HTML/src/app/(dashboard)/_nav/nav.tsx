import Image from 'next/image'

import ChangeLangBtn from '@/components/form/btn/_changeLang/changeLangBtn'
import ChangeThemeBtn from '@/components/form/btn/_changeTheme/changeThemeBtn'
import logoIcon from '@/components/image/png/logoIcon.png'
import CalendarIcon from '@/components/image/svg/calendar'
import CommentIcon from '@/components/image/svg/comment'
import {FlagEnglishIcon} from '@/components/image/svg/FlagEnglishIcon'
import {FlagPolishIcon} from '@/components/image/svg/FlagPolishIcon'
import GardenCardIcon from '@/components/image/svg/gardenCard'
import HourGlassIcon from '@/components/image/svg/hourGlass'
import LanguageIcon from '@/components/image/svg/language'
import PaymentIcon from '@/components/image/svg/payment'
import ThemeModeIcon from '@/components/image/svg/themeMode'
import UmbrellaIcon from '@/components/image/svg/umbrella'
import {getLocale} from '@/utils/locale/_help/getLocale'
import {getTranslations} from '@/utils/locale/_help/getTranslations'
import {ERoutes} from '@/utils/type/ERoutes'

import s from '../css.module.scss'

import NavLink from './navLink'
import NavLogOut from './navLogOut'
import NavMenu from './navMenu'
import NavProfil from './navProfil'

async function EmployerLayoutNav() {
  const [locale, t] = await Promise.all([getLocale(), getTranslations('nav')])
  const path = ERoutes[locale]

  return (
    <aside className={s.nav}>
      <div className={s.sidebarHeader}>
        <Image src={logoIcon} alt="Logo" width={100} height={100} className={s.sidebarHeaderImg} />
        <h1>Wawel garden</h1>
        <input type="checkbox" className={s.sidebarInput} />
      </div>

      <nav className={s.sidebarLinks}>
        <div className={s.sidebarSeparator}>
          <span className={s.sidebarSeparatorSpan}>{t('date')}</span>
          <div className={s.sidebarSeparatorDiv} />
        </div>
        <NavLink href={path.viewWorkingHours} text={t('getWorkingHours')} Icon={CalendarIcon} />
        <NavLink href={'#'} text={t('setWorkingHours')} Icon={HourGlassIcon} />
        <NavLink href={'#'} text={t('askDayOff')} Icon={UmbrellaIcon} />
        <div className={s.sidebarSeparator}>
          <span className={s.sidebarSeparatorSpan}>{t('money')}</span>
          <div className={s.sidebarSeparatorDiv} />
        </div>
        <NavLink href={'#'} text={t('askBonus')} Icon={HourGlassIcon} />
        <NavLink href={'#'} text={t('setPledgedMoney')} Icon={PaymentIcon} />
        <div className={s.sidebarSeparator}>
          <span className={s.sidebarSeparatorSpan}>{t('gardener')}</span>
          <div className={s.sidebarSeparatorDiv} />
        </div>
        <NavLink href={'#'} text={t('setChords')} Icon={GardenCardIcon} />
        <div className={s.sidebarSeparator} style={{marginTop: 'auto'}}>
          <span className={s.sidebarSeparatorSpan}>{t('account')}</span>
          <div className={s.sidebarSeparatorDiv} />
        </div>
        <NavMenu text={t('locale')} Icon={LanguageIcon}>
          <ChangeLangBtn language="pl" className={s.sidebarLink} type="submit" disabled={locale == 'pl'}>
            <FlagPolishIcon />
            <span className={s.sidebarLinkContent}>Polski</span>
          </ChangeLangBtn>
          <ChangeLangBtn language="en" className={s.sidebarLink} type="submit" disabled={locale == 'en'}>
            <FlagEnglishIcon />
            <span className={s.sidebarLinkContent}>English</span>
          </ChangeLangBtn>
        </NavMenu>
        <NavLink href={'#'} text={t('setComment')} Icon={CommentIcon} />
        <ChangeThemeBtn className={s.sidebarLink} type="submit">
          <ThemeModeIcon />
          <span className={s.sidebarLinkContent}>{t('logout')}</span>
        </ChangeThemeBtn>
        <NavLogOut />
        <div className={s.sidebarSeparator}>
          <div className={s.sidebarSeparatorDiv} />
        </div>
      </nav>

      <NavProfil />
    </aside>
  )
}

export default EmployerLayoutNav
