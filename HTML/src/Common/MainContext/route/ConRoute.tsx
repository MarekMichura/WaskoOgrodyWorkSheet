import {lazy, useContext} from 'react'
import {Route, Routes} from 'react-router-dom'

import {route, routes} from '/global/ROUTE'
import Context from '/MContext'

const Error404 = lazy(() => import('/Page/Error404'))
const Login = lazy(() => import('/Page/Login'))
const Main = lazy(() => import('/Page/Main'))
const CalendarEmployer = lazy(() => import('/Page/EmployerCalendar'))

function MyRoutes() {
  const {state} = useContext(Context)
  const {init, profil} = state
  if (!init) return
  if (profil == undefined) return <Login />

  return (
    <Routes>
      <Route path="*" Component={Main}>
        <Route path={routes[route.Show_calendar]} Component={CalendarEmployer} />
        <Route path="*" Component={Error404} />
      </Route>
    </Routes>
  )
}

export default MyRoutes
