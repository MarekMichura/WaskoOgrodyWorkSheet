import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import InitThemeHTML from '@Context/function/Init'
import MainContext from '@Context/MainContext'
import LoginPage from '@Page/Login'

import GlobalStyle from './globalStyle'
import React from 'react'

InitThemeHTML()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainContext}>
          <Route path="Login" Component={LoginPage} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
