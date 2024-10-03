import {useContext} from 'react'

import Context from '/Context/Context'
import {route} from '/global/ROUTE'
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
  const {permission} = state

  return (
    <CSS.Container data-open={open}>
      <CSS.Logo>
        <LogoIcon />
      </CSS.Logo>
      <CSS.MenuContainer>
        <CSS.MenuScroll>
          <SideBarOption icon={HourGlassIcon} text="Godziny pracy" show={permission} route={route.Set_working_hours} />
          <SideBarOption icon={CalendarIcon} text="Pokaż kalendarz" show={permission} route={route.Show_calendar} />
          <SideBarOption icon={GardenCardIcon} text="Uzupełnij akordy" show={permission} route={route.Set_chord} />
          <SideBarOption icon={UmbrelaIcon} text="Poproś o wolne" show={permission} route={route.Ask_day_off} />
          <SideBarOption icon={PaymentIcon} text="Zgłoś wydatek" show={permission} route={route.Add_refund} />
          <SideBarOption icon={CashIcon} text="Poproś o premie" show={permission} route={route.Ask_bonus} />
          <SideBarOption icon={CommentIcon} text="Zamieść uwagę" show={permission} route={route.Add_comment} />
        </CSS.MenuScroll>
      </CSS.MenuContainer>
    </CSS.Container>
  )
}

export default SideBar
