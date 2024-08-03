import { BrowserRouter, Routes, Route } from "react-router-dom"
import Admin from "./Admin"
import SetRole from "./Login/setRole"
import User from "./User"
import { UserContext } from "./app"
import { useContext } from "react"
import { error } from "console"
import Panel from "./Panel"


export const mapRoleToRoute = {
  "User": "/Panel/",
  "Admin": "/Admin/"
};

const mapRoleToTSX = {
  "User": <Panel />,
  "Admin": <Admin />
};

const Router = () => {
  const { user, dispatch } = useContext(UserContext.Context)
  const roles = user?.roles
  if (roles === undefined) throw new Error();

  function defaultPage(role: string) {
    switch (role) {
      case "User": return <Admin />
      case "Admin": return <User />
      default:
        return ""
    }
  }

  return <BrowserRouter>
    <Routes>
      <Route path="/*" element={roles.length > 1 ? <SetRole /> : defaultPage(roles[0])} />
      {roles.length > 1 ? <Route path='Role' element={<SetRole />} /> : ""}
      {roles.map((ele, key) => { return <Route key={key} path={mapRoleToRoute[ele] + '*'} element={mapRoleToTSX[ele]} /> })}
    </Routes>
  </BrowserRouter>
}

export default Router