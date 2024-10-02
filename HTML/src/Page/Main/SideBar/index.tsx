import {useContext} from 'react'

import Context from '/Context/Context'
import {route, routePermission} from '/global/ROUTE'
import CalendarIcon from '/Icon/CalendarIcon'
import CashIcon from '/Icon/Cash'
import CommentIcon from '/Icon/Comment'
import GardenCardIcon from '/Icon/GardenCardIcon'
import HourGlassIcon from '/Icon/HourGlassIcon'
import LogoIcon from '/Icon/LogoIcon'
import PaymentIcon from '/Icon/Payment'
import UmbrelaIcon from '/Icon/UmbrelaIcon'

import {ISideBar} from './props'
import SideBarOption from './SideBarOption'

import * as CSS from './css'

function SideBar({open}: ISideBar) {
  const {state} = useContext(Context)
  if (state.profil == undefined) return
  const {roles} = state.profil

  const perm = routePermission(roles)

  return (
    <CSS.Container data-open={open}>
      <CSS.Logo>
        <LogoIcon />
      </CSS.Logo>
      <CSS.MenuContainer>
        <CSS.MenuScroll>
          {/* Employer */}
          <SideBarOption icon={HourGlassIcon} text="Godziny pracy" show={perm} route={route.Set_working_hours} />
          <SideBarOption icon={CalendarIcon} text="Pokaż kalendarz" show={perm} route={route.Show_calendar} />
          {/* Gardener */}
          <SideBarOption icon={GardenCardIcon} text="Uzupełnij akordy" show={perm} route={route.Set_chord} />
          {/* Block employer */}
          <SideBarOption icon={UmbrelaIcon} text="Poproś o wolne" show={perm} route={route.Ask_day_off} />
          <SideBarOption icon={PaymentIcon} text="Zgłoś wydatek" show={perm} route={route.Add_refund} />
          <SideBarOption icon={CashIcon} text="Poproś o premie" show={perm} route={route.Ask_bonus} />

          <SideBarOption icon={CommentIcon} text="Zamieść uwagę" show={perm} route={route.Add_comment} />
        </CSS.MenuScroll>
      </CSS.MenuContainer>
    </CSS.Container>
  )
}

export default SideBar
