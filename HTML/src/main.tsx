import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import {PwaControl} from '/PwaCatch/index'

import {App} from './app'

const client = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <PwaControl />
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
)
