import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRoute from './appRoute'
import GlobalStyle from './globalStyle'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoute />
  </React.StrictMode>
)
