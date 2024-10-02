import {lazy, useContext} from 'react'
import {Route, Routes} from 'react-router-dom'

import Context from '/MContext'

const Login = lazy(() => import('/Page/Login'))
const Error404 = lazy(() => import('/Page/Error404'))
const Main = lazy(() => import('/Page/Main'))

function MyRoutes() {
  const {state} = useContext(Context)
  const {init, profil} = state
  if (!init) return
  if (profil == undefined) return <Login />

  return (
    <Routes>
      <Route path="*" Component={Main}>
        <Route path="*" Component={Error404} />
      </Route>
    </Routes>
  )
}

export default MyRoutes
