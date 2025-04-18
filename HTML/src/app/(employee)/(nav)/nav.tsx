import Image from 'next/image'

import logoIcon from '@/components/icon/png/logoIcon.png'
import CalendarIcon from '@/components/icon/svg/calendar'
import CommentIcon from '@/components/icon/svg/comment'
import GardenCardIcon from '@/components/icon/svg/gardenCard'
import HourGlassIcon from '@/components/icon/svg/hourGlass'
import PaymentIcon from '@/components/icon/svg/payment'
import ThemeModeIcon from '@/components/icon/svg/themeMode'
import UmbrellaIcon from '@/components/icon/svg/umbrella'
import ChangeThemeBtn from '@/components/theme/changeThemeBtn'
import {ERoute} from '@/utils/type/common/ERoute'

import s from '../cssEmployee.module.scss'

import NavLink from './navLink'
import NavLogOut from './navLogOut'
import NavProfil from './navProfil'

async function Nav() {
  return (
    <aside className={s.nav}>
      <div className={s.sidebarHeader}>
        <Image src={logoIcon} alt="Logo" width={100} height={100} className={s.sidebarHeaderImg} />
        <h1>Wawel garden</h1>
        <input type="checkbox" className={s.sidebarInput} />
      </div>

      <nav className={s.sidebarLinks}>
        <div className={s.sidebarSeparator}>
          <span className={s.sidebarSeparatorSpan}>Godziny</span>
          <div className={s.sidebarSeparatorDiv} />
        </div>
        <NavLink href={ERoute.getWorkingHours} text="Przeglądaj godziny pracy" Icon={CalendarIcon} />
        <NavLink href={'#'} text="Uzupełnij godziny" Icon={HourGlassIcon} />
        <NavLink href={'#'} text="Poproś o dzień wolny" Icon={UmbrellaIcon} />
        <div className={s.sidebarSeparator}>
          <span className={s.sidebarSeparatorSpan}>Pieniądze</span>
          <div className={s.sidebarSeparatorDiv} />
        </div>
        <NavLink href={'#'} text="Poproś o bonus" Icon={HourGlassIcon} />
        <NavLink href={'#'} text="Zastawione pieniądze" Icon={PaymentIcon} />
        <div className={s.sidebarSeparator}>
          <span className={s.sidebarSeparatorSpan}>Ogrodnik</span>
          <div className={s.sidebarSeparatorDiv} />
        </div>
        <NavLink href={'#'} text="Uzupełnij akordy" Icon={GardenCardIcon} />
        <div className={s.sidebarSeparator} style={{marginTop: 'auto'}}>
          <span className={s.sidebarSeparatorSpan}>Obsługa</span>
          <div className={s.sidebarSeparatorDiv} />
        </div>
        <NavLink href={'#'} text="Zamieść notatkę" Icon={CommentIcon} />
        <ChangeThemeBtn className={s.sidebarLink} type="submit">
          <ThemeModeIcon />
          <span className={s.sidebarLinkContent}>Zmień motyw</span>
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

export default Nav
