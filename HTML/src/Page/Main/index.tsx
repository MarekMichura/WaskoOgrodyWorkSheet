import {useContext, useState} from 'react'

import {MainAction} from '/global/MAIN_ACTION'
import FaceIcon from '/Icon/FaceIcon'
import MenuIcon from '/Icon/MenuIcon'
import Context from '/MContext'

import * as CSS from './css'

function MainPage() {
  const {state, dispatch} = useContext(Context)
  const [menu, setMenu] = useState<boolean>(false)
  const {profil} = state

  if (profil === undefined) {
    dispatch({action: MainAction.LOG_OUT, dispatch})
    return
  }
  function logOut() {
    dispatch({action: MainAction.LOG_OUT, dispatch})
  }
  function theme() {
    dispatch({action: MainAction.CHANGE_THEME, dispatch})
  }
  function changeMenu() {
    setMenu((a) => !a)
  }

  return (
    <CSS.Container>
      <CSS.TopBar>
        <MenuIcon cssSVG={CSS.TopBarIcon} open={menu} onClick={changeMenu} />
        <div>
          <CSS.UserName onClick={theme}>{profil.userName}</CSS.UserName>
          {profil.image ? (
            <CSS.UserProfile src={profil.image} onClick={logOut} />
          ) : (
            <FaceIcon cssSVG={CSS.FaceIcon} onClick={logOut} />
          )}
        </div>
      </CSS.TopBar>
      <CSS.Content>Content</CSS.Content>
      <CSS.Menu>Manu</CSS.Menu>
      <CSS.Bottom>Bottom bar</CSS.Bottom>
    </CSS.Container>
  )
}

export default MainPage
