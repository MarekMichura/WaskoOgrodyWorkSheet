import {lazy, useContext} from 'react'
import {Route, Routes} from 'react-router-dom'

import Context from '/MContext'

const Login = lazy(() => import('/Page/Login'))
const Main = lazy(() => import('/Page/Main'))

function MyRoutes() {
  const {state} = useContext(Context)
  const {init, profil} = state

  if (!init) return
  if (profil == undefined) return <Login />

  return (
    <Routes>
      <Route path="*" Component={Main}></Route>
    </Routes>
  )
}

export default MyRoutes
