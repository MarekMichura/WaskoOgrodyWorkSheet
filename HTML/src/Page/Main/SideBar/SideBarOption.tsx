import {useLocation} from 'react-router-dom'

import {IMenuOption} from './props'

import * as CSS from './css'

function SideBarOption({icon: Icon, show, text, to}: IMenuOption) {
  if (!show) return
  const location = useLocation()
  const path = location.pathname
  const selected = path == to

  return (
    <CSS.MenuOption data-selected={selected}>
      <CSS.MenuIconContainer>
        <Icon cssSVG={CSS.MenuIcon} />
      </CSS.MenuIconContainer>
      <CSS.MenuText>{text}</CSS.MenuText>
    </CSS.MenuOption>
  )
}

export default SideBarOption
