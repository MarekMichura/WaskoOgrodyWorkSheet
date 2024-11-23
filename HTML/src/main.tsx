import '/style/globalStyle.scss'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'

import LoadingSuspense from '/suspense/suspense'

import App from './app'
import LoadPersister from './persister'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
      <LoadingSuspense>
        <LoadPersister>
          <App />
        </LoadPersister>
      </LoadingSuspense>
    </BrowserRouter>
  </StrictMode>
)
