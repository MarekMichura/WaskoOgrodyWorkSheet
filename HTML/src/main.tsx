import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import {PwaControl} from '/PwaCatch/index'

import {App} from './app'
import {createIDBPersister} from './Persister'

const persister = createIDBPersister()
const client = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      refetchOnReconnect: true,
    },
  },
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PersistQueryClientProvider client={client} persistOptions={{persister, maxAge: Infinity}}>
      <QueryClientProvider client={client}>
        <PwaControl />
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </PersistQueryClientProvider>
  </StrictMode>
)
