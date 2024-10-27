import {useState} from 'react'
import {Outlet} from 'react-router-dom'

import {SuspendWrapper} from '/Suspend'

import {SideBar} from './SideBar'
import TopBar from './TopBar'

import * as CSS from './css'

const MainPage = () => {
  const [menu, setMenu] = useState(false)

  return (
    <CSS.Container>
      <CSS.Content>
        <SuspendWrapper openDefault={true} text="Ładowanie podstrony">
          <Outlet />
        </SuspendWrapper>
      </CSS.Content>
      <SideBar open={menu} />
      <TopBar openMenu={menu} changeOpenMenu={() => setMenu((a) => !a)} />
    </CSS.Container>
  )
}

export default MainPage
