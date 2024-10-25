import {useTransition} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {useProfil} from '/QueryFn/profil/useProfil'

import {Loading} from '../Loading'

import {routePermission, IRoute, routes, endPoints, IAdditionalRoute} from './IRoute'

export const MyRoute = () => {
  const [pending] = useTransition()
  const {data, isError} = useProfil()

  if (isError || !data) {
    const Login = endPoints[IAdditionalRoute.login]
    return <Login />
  }
  const roles = routePermission(data!.roles)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={endPoints[IAdditionalRoute.mainPage]}>
          {(Object.values(IRoute) as IRoute[])
            .filter((v) => roles[v])
            .map((v, k) => (
              <Route path={routes[v]} Component={endPoints[v]} key={k} />
            ))}
          <Route path="*" Component={endPoints[IAdditionalRoute.Error]} />
          <Route index Component={() => <>/</>} />
        </Route>
      </Routes>
      <Loading open={pending} text="Ładowanie strony głównej" />
    </BrowserRouter>
  )
}
