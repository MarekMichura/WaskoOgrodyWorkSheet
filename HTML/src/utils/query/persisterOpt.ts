import {OmitKeyof, QueryClient} from '@tanstack/react-query'
import {PersistQueryClientOptions, PersistQueryClientProviderProps} from '@tanstack/react-query-persist-client'

import {storageIDB} from './storageIDB'

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      refetchOnReconnect: true,
    },
  },
})

export const persistOptions: OmitKeyof<PersistQueryClientOptions, 'queryClient'> = {
  persister: storageIDB(),
  maxAge: Infinity,
}

export const persisterProviderOpt: PersistQueryClientProviderProps = {
  client,
  persistOptions,
}
