import {Fragment} from 'react/jsx-runtime'

import {endPoints, links} from '/Router/IRoute'

import {ISideBarOption} from './ISideBarOption'

import * as CSS from './css'

export const SideBarOption = ({icon: Icon, route, show, text}: ISideBarOption) => {
  const preFetch = () => {
    endPoints[route].preload()
  }

  if (!show[route]) return <Fragment />
  return (
    <CSS.MenuOption to={links[route]} data-selected={false} onMouseEnter={preFetch}>
      <CSS.MenuIconContainer>
        <Icon cssSVG={CSS.MenuIcon} />
      </CSS.MenuIconContainer>
      <CSS.MenuText>{text}</CSS.MenuText>
    </CSS.MenuOption>
  )
}
