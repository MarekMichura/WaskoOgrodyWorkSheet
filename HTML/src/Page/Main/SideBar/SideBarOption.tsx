import {startTransition, useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

import {links} from '/global/ROUTE'

import {IMenuOption} from './props'

import * as CSS from './css'

function SideBarOption({icon: Icon, route, show, text}: IMenuOption) {
  if (!show[route]) return
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    const path = pathname.split('/')[1]
    setSelected(links[route] == `/${path}`)
  }, [pathname])

  function Click() {
    startTransition(() => navigate(links[route]))
  }

  return (
    <CSS.MenuOption onClick={Click} data-selected={selected}>
      <CSS.MenuIconContainer>
        <Icon cssSVG={CSS.MenuIcon} />
      </CSS.MenuIconContainer>
      <CSS.MenuText>{text}</CSS.MenuText>
    </CSS.MenuOption>
  )
}

export default SideBarOption
