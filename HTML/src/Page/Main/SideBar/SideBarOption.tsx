import {routePL, routes} from '/global/ROUTE'

import {IMenuOption} from './props'

import * as CSS from './css'

function SideBarOption({icon: Icon, route, show, text}: IMenuOption) {
  if (!show[route]) return
  const path = location.pathname
  const selected = routes[route].includes(path)

  console.log(routes[route], path, selected)

  return (
    <CSS.MenuOption to={routePL[route]} data-selected={selected}>
      <CSS.MenuIconContainer>
        <Icon cssSVG={CSS.MenuIcon} />
      </CSS.MenuIconContainer>
      <CSS.MenuText>{text}</CSS.MenuText>
    </CSS.MenuOption>
  )
}

export default SideBarOption
