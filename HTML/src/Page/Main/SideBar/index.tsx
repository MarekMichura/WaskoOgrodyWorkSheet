import {useContext} from 'react'

import Context from '/Context/Context'
import {route, routeEN} from '/global/ROUTE'
import FaceIcon from '/Icon/FaceIcon'
import LogoIcon from '/Icon/LogoIcon'

import {IUserRole} from '../../../Common/global/ROLE'

import {ISideBar} from './props'
import SideBarOption from './SideBarOption'

import * as CSS from './css'

function SideBar({open}: ISideBar) {
  const {state} = useContext(Context)
  if (state.profil == undefined) return
  const {roles} = state.profil

  const isEmployer = roles.includes(IUserRole.Employer)
  const isGardener = isEmployer && roles.includes(IUserRole.Gardener)
  const canAskDayOff = isEmployer && !roles.includes(IUserRole.BlockAskingBonus)
  const canFound = isEmployer && !roles.includes(IUserRole.BlockAskingFound)
  const canAskBonus = isEmployer && !roles.includes(IUserRole.BlockAskingBonus)

  return (
    <CSS.Container data-open={open}>
      <CSS.Logo>
        <LogoIcon />
      </CSS.Logo>
      <CSS.MenuContainer>
        <CSS.MenuScroll>
          {/* Everyone */}
          <SideBarOption icon={FaceIcon} text="Zamieść uwagę" show={true} to={routeEN[route.Add_comment]} />
          {/* Employer */}
          <SideBarOption icon={FaceIcon} text="Godziny pracy" show={isEmployer} to={routeEN[route.Set_working_hours]} />
          <SideBarOption icon={FaceIcon} text="Pokaż kalendarz" show={isEmployer} to={routeEN[route.Show_calendar]} />
          {/* Gardener */}
          <SideBarOption icon={FaceIcon} text="Uzupełnij akordy" show={isGardener} to={routeEN[route.Set_chord]} />
          {/* Block employer */}
          <SideBarOption icon={FaceIcon} text="Poproś o wolne" show={canAskDayOff} to={routeEN[route.Ask_day_off]} />
          <SideBarOption icon={FaceIcon} text="Zgłoś wydatek" show={canFound} to={routeEN[route.Add_found]} />
          <SideBarOption icon={FaceIcon} text="Poproś o premie" show={canAskBonus} to={routeEN[route.Ask_bonus]} />
        </CSS.MenuScroll>
      </CSS.MenuContainer>
    </CSS.Container>
  )
}

export default SideBar
