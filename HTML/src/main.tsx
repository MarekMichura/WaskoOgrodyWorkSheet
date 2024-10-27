import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import {App} from './app'

const client = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={client}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </StrictMode>
)

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('/service-worker.js')
// }
