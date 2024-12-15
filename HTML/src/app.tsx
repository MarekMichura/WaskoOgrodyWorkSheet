import {useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'

import {useProfile} from '/query/profile/useProfile'
import {useTheme} from '/query/theme/useTheme'
import {ERoutes} from '/route/eRoutes'
import {main, login, error404} from '/route/imports'
import {route} from '/route/route'
import {routeComponents} from '/route/routeComponents'

const ECalendar = routeComponents[ERoutes.showCalendar].lazy
const SWHours = routeComponents[ERoutes.setWorkingHours].lazy
const Login = login.lazy
const Main = main.lazy
function App() {
  const {data: theme} = useTheme(['data'])
  const {data: profile, isError: profileError} = useProfile(['data', 'isError'])

  useEffect(() => {
    if (theme !== undefined) document.documentElement.setAttribute('data-theme', theme)
    else document.documentElement.removeAttribute('data-theme')
  }, [theme])

  if (profile === undefined || profile.logout || profileError) return <Login />
  const perm = profile?.permissions

  console.log(route[ERoutes.setWorkingHours])
  return (
    <Routes>
      <Route path="*" Component={Main}>
        <Route path="*" Component={error404.lazy} />
        {perm[ERoutes.showCalendar] && <Route path={route[ERoutes.showCalendar]} Component={ECalendar} />}
        {perm[ERoutes.setWorkingHours] && <Route path={route[ERoutes.setWorkingHours]} Component={SWHours} />}
      </Route>
    </Routes>
  )
}

export default App
