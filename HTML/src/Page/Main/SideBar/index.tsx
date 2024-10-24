import {CalendarIcon} from '/Icon/CalendarIcon'
import {CashIcon} from '/Icon/Cash'
import {CommentIcon} from '/Icon/Comment'
import {GardenCardIcon} from '/Icon/GardenCardIcon'
import {HourGlassIcon} from '/Icon/HourGlassIcon'
import {LogoIcon} from '/Icon/LogoIcon'
import {PaymentIcon} from '/Icon/Payment'
import {UmbrelaIcon} from '/Icon/UmbrelaIcon'
import {useProfil} from '/QueryFn/profil/useProfil'
import {IRoute, routePermission} from '/Router/IRoute'

import {SideBarOption} from './Option'

import * as CSS from './css'

export const SideBar = ({open}: {open: boolean}) => {
  const {data} = useProfil()

  const permission = routePermission(data!.roles)

  return (
    <CSS.Container data-open={open}>
      <CSS.Logo>
        <LogoIcon />
      </CSS.Logo>
      <CSS.MenuContainer>
        <CSS.MenuScroll>
          <SideBarOption icon={HourGlassIcon} text="Godziny pracy" show={permission} route={IRoute.setWorkingHours} />
          <SideBarOption icon={CalendarIcon} text="Pokaż kalendarz" show={permission} route={IRoute.showCalendar} />
          <SideBarOption icon={GardenCardIcon} text="Uzupełnij akordy" show={permission} route={IRoute.setChord} />
          <SideBarOption icon={UmbrelaIcon} text="Poproś o wolne" show={permission} route={IRoute.askDayOff} />
          <SideBarOption icon={PaymentIcon} text="Zgłoś wydatek" show={permission} route={IRoute.addRefund} />
          <SideBarOption icon={CashIcon} text="Poproś o premie" show={permission} route={IRoute.askBonus} />
          <SideBarOption icon={CommentIcon} text="Zamieść uwagę" show={permission} route={IRoute.addComment} />
        </CSS.MenuScroll>
      </CSS.MenuContainer>
    </CSS.Container>
  )
}
