import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/Login"
import MainPage from "./Pages/Main"
import ContextProfil from "./context"

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={ContextProfil}>
          <Route path="/" Component={MainPage}>
          </Route>
          <Route path="Login" Component={LoginPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute