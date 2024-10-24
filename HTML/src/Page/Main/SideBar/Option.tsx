import {FaceIcon} from '/Icon/FaceIcon'
import {IRoute, links} from '/Router/IRoute'

import * as CSS from './css'

interface ISideBarOption {
  icon: typeof FaceIcon
  show: Record<IRoute, boolean>
  text: string
  route: IRoute
}

export const SideBarOption = ({icon: Icon, route, show, text}: ISideBarOption) => {
  if (!show[route]) return <></>

  // useEffect(() => {
  //   const path = pathname.split('/')[1]
  //   setSelected(links[route] == `/${path}`)
  // }, [pathname])

  return (
    <CSS.MenuOption to={links[route]} data-selected={false}>
      <CSS.MenuIconContainer>
        <Icon cssSVG={CSS.MenuIcon} />
      </CSS.MenuIconContainer>
      <CSS.MenuText>{text}</CSS.MenuText>
    </CSS.MenuOption>
  )
}
