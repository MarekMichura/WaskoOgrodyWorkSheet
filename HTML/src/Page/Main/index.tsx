import {useState} from 'react'
import {Outlet} from 'react-router-dom'

import {SuspendWrapper} from '/Suspend'

import {SideBar} from './SideBar'
import TopBar from './TopBar'

import * as CSS from './css'

export const MainPage = () => {
  const [menu, setMenu] = useState(false)

  return (
    <CSS.Container>
      <CSS.Content>
        <SuspendWrapper text="ładowanie strony" open={false}>
          <Outlet />
        </SuspendWrapper>
      </CSS.Content>
      <SideBar open={menu} />
      <TopBar openMenu={menu} changeOpenMenu={() => setMenu((a) => !a)} />
    </CSS.Container>
  )
}
