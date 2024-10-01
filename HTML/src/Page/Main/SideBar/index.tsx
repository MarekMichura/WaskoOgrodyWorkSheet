import FaceIcon from '/Icon/FaceIcon'
import LogoIcon from '/Icon/LogoIcon'

import * as CSS from './css'

interface ISideBar {
  open: boolean
}

interface IMenuOption {
  icon: typeof FaceIcon
  selected: boolean
  show: boolean
  text: string
}

function MenuOption({icon: Icon, show, text, selected}: IMenuOption) {
  if (!show) return

  return (
    <CSS.MenuOption data-selected={selected}>
      <CSS.MenuIconContainer>
        <Icon cssSVG={CSS.MenuIcon} />
      </CSS.MenuIconContainer>
      <CSS.MenuText>{text}</CSS.MenuText>
    </CSS.MenuOption>
  )
}

function SideBar({open}: ISideBar) {
  console.log(open)

  return (
    <CSS.Container data-open={open}>
      <CSS.Logo>
        <LogoIcon />
      </CSS.Logo>
      <CSS.MenuContainer>
        <CSS.MenuScroll>
          <MenuOption icon={FaceIcon} text="Test" show={true} selected={false} />
          <MenuOption icon={FaceIcon} text="Test" show={true} selected={true} />
          <MenuOption icon={FaceIcon} text="Test" show={true} selected={true} />
          <MenuOption icon={FaceIcon} text="Test" show={true} selected={true} />
          <MenuOption icon={FaceIcon} text="Test" show={true} selected={true} />
          <MenuOption icon={FaceIcon} text="Test" show={true} selected={true} />
          <MenuOption icon={FaceIcon} text="Test" show={true} selected={true} />
          <MenuOption icon={FaceIcon} text="Test" show={true} selected={true} />
          <MenuOption icon={FaceIcon} text="Test" show={true} selected={true} />
        </CSS.MenuScroll>
      </CSS.MenuContainer>
    </CSS.Container>
  )
}

export default SideBar
