import {Fragment} from 'react/jsx-runtime'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {useProfil} from '/QueryFn/profil/useProfil'

import {Loading} from '../Loading'

import {endPoints, IAdditionalRoute, IRoute, routePermission, routes} from './IRoute'

export function MyRoute() {
  const {data, isFetched} = useProfil()

  if (isFetched) <Fragment />
  if (data == null || data.wait) {
    const Login = endPoints[IAdditionalRoute.login].lazy
    return <Login />
  }

  const roles = routePermission(data!.roles)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" Component={endPoints[IAdditionalRoute.mainPage].lazy}>
          {(Object.values(IRoute) as IRoute[])
            .filter((v) => roles[v])
            .map((v, k) => (
              <Route path={routes[v]} Component={endPoints[v].lazy} key={k} />
            ))}
          <Route path="*" Component={endPoints[IAdditionalRoute.Error].lazy} />
        </Route>
      </Routes>
      <Loading text="Ładowanie strony głównej" />
    </BrowserRouter>
  )
}
