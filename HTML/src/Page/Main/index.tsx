import {useState} from 'react'
import {ErrorBoundary} from 'react-error-boundary'
import {Outlet} from 'react-router-dom'

import {endPoints, IAdditionalRoute} from '/Router/IRoute'
import {SuspendWrapper} from '/Suspend/index'

import {SideBar} from './SideBar'
import TopBar from './TopBar'

import * as CSS from './css'

const Error = endPoints[IAdditionalRoute.Error].lazy

const MainPage = () => {
  const [menu, setMenu] = useState(false)

  return (
    <CSS.Container>
      <CSS.Content>
        <SuspendWrapper openDefault={true} text="Ładowanie podstrony">
          <ErrorBoundary FallbackComponent={() => <Error />}>
            <Outlet />
          </ErrorBoundary>
        </SuspendWrapper>
      </CSS.Content>
      <SideBar open={menu} />
      <TopBar openMenu={menu} changeOpenMenu={() => setMenu((a) => !a)} />
    </CSS.Container>
  )
}

export default MainPage
