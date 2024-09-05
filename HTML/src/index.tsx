import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './globalStyle'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import ContextProfil from './Common/ContextProfil'
import LoginPage from './Pages/Login'
import BasePage from './Common/BasePage'
import ContextNotification from './Common/ContextNotification'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

const Contexts = () => {
  return (
    <ContextProfil>
      <ContextNotification>
        <Outlet />
      </ContextNotification>
    </ContextProfil>
  )
}

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Contexts}>
          <Route path="/" Component={BasePage}>
          </Route>
          <Route path="Login" Component={LoginPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
