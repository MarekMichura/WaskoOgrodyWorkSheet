import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/Login"
import UserPage from "./Pages/User"
import AdminPage from "./Pages/Admin"
import { ProfilContext, ProfilReducer } from "./Profile/Reducer"
import { useContext, useEffect, useReducer } from "react"
import { IProfil } from "./Profile/type"

function Tmp() {
  const con = useContext(ProfilContext);

  return <div>{con.profil?.UserName}</div>
}

function AppRoute() {
  const [profil, dispatch] = useReducer(ProfilReducer, undefined);

  useEffect(() => {
    fetch("GetProfil")
      .then((response) => response.json())
      .then((profil: IProfil) => {
        dispatch({ type: "Login", profil })
      })
      .catch(() => { })
  }, []);

  return (
    <ProfilContext.Provider value={{ dispatch, profil }}>
      <BrowserRouter>
        <Routes>
          <Route path="" Component={Tmp} />
          <Route path="Login" Component={LoginPage} />
          <Route path="User" Component={UserPage} />
          <Route path="Admin" Component={AdminPage} />
        </Routes>
      </BrowserRouter>
    </ProfilContext.Provider>
  )
}

export default AppRoute