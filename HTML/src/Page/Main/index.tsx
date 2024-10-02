import {useContext, useState} from 'react'
import {Outlet} from 'react-router-dom'

import {MainAction} from '/global/MAIN_ACTION'
import Context from '/MContext'

import SideBar from './SideBar'
import TopBar from './TopBar'

import * as CSS from './css'

function MainPage() {
  const {state, dispatch} = useContext(Context)
  const [menu, setMenu] = useState<boolean>(false)
  const {profil} = state

  if (profil === undefined) {
    dispatch({action: MainAction.LOG_OUT, dispatch})
    return
  }

  function changeOpenMenu() {
    setMenu((a) => !a)
  }

  return (
    <CSS.Container>
      <SideBar open={menu} />
      <CSS.Content>
        <Outlet />
      </CSS.Content>
      <TopBar openMenu={menu} changeOpenMenu={changeOpenMenu} />
    </CSS.Container>
  )
}

export default MainPage
