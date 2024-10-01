import {useContext, useState} from 'react'

import {MainAction} from '/global/MAIN_ACTION'
import {IThemes} from '/global/THEME'
import BellIcon from '/Icon/BellIcon'
import FaceIcon from '/Icon/FaceIcon'
import MenuIcon from '/Icon/MenuIcon'
import ThemeModeIcon from '/Icon/ThemeModeIcon'
import Context from '/MContext'

import * as CSS from './css'

enum IMenu {
  none,
  profil,
  notification,
}

interface IProps {
  openMenu: boolean
  changeOpenMenu: () => void
}

function TopBar({openMenu, changeOpenMenu}: IProps) {
  const {state, dispatch} = useContext(Context)
  const [menu, setMenu] = useState<IMenu>(IMenu.none)
  const {title, theme, profil} = state
  const {firstName, lastName, userName, roles} = profil ?? {}
  const themeStatus = theme == IThemes.THEME_DARK

  function changeTheme() {
    dispatch({action: MainAction.CHANGE_THEME, dispatch})
  }

  function logOut() {
    dispatch({action: MainAction.LOG_OUT, dispatch})
  }
  function menuProfil() {
    setMenu(IMenu.profil)
  }

  function menuNotification() {
    setMenu(IMenu.notification)
  }

  function menuClose() {
    setMenu(IMenu.none)
  }

  return (
    <CSS.Container>
      <CSS.Left>
        <MenuIcon cssSVG={CSS.Icon} status={openMenu} onClick={changeOpenMenu} />
        <CSS.Title>{title}</CSS.Title>
      </CSS.Left>
      <CSS.Right>
        <CSS.IconCon onClick={menuNotification}>
          <BellIcon cssSVG={CSS.Icon} />
          {/* <CSS.BelNum>2</CSS.BelNum> */}
        </CSS.IconCon>
        <CSS.IconCon>
          <ThemeModeIcon cssSVG={CSS.Icon} status={themeStatus} onClick={changeTheme} />
        </CSS.IconCon>
        <CSS.MenuCon onClick={menuProfil}>
          {userName}
          <FaceIcon cssSVG={CSS.Icon} />
        </CSS.MenuCon>
      </CSS.Right>
      <CSS.Menu data-open={menu == IMenu.profil}>
        <CSS.MenuItem>
          <CSS.UserFlex>
            <div>
              <FaceIcon cssSVG={CSS.BigIcon} />
            </div>
            <CSS.UserRightFlex>
              <div>
                {firstName} {lastName}
              </div>
              <div>{roles?.[0]}</div>
            </CSS.UserRightFlex>
          </CSS.UserFlex>
          <hr />
          <CSS.MenuOption onClick={logOut}>Wyloguj się</CSS.MenuOption>
        </CSS.MenuItem>
      </CSS.Menu>
      <CSS.Menu data-open={menu == IMenu.notification}>
        <CSS.MenuItem>
          <CSS.MenuOption>Nie masz żadnych nowych powiadomień</CSS.MenuOption>
        </CSS.MenuItem>
      </CSS.Menu>
      <CSS.MenuBehind onClick={menuClose} data-open={menu != IMenu.none} />
    </CSS.Container>
  )
}

export default TopBar
