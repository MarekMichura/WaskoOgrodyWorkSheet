import {QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {PersistQueryClientProvider} from '@tanstack/react-query-persist-client'
import {useState} from 'react'

import {persisterProviderOpt, client} from '/query/persisterOpt'

function LoadPersister({children}: {children: JSX.Element}) {
  const [loading, setLoading] = useState(false)
  function success() {
    setLoading(true)
  }

  return (
    <PersistQueryClientProvider onSuccess={success} {...persisterProviderOpt}>
      <QueryClientProvider client={client}>
        {loading && children}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </PersistQueryClientProvider>
  )
}

export default LoadPersister
