'use client'

import {QueryClientProvider} from '@tanstack/react-query'

import {getQueryClient} from '@/utils/query/qetQueryClient'
import {type IChildren} from '@/utils/types/IChildren'

function QueryProvider({children}: IChildren) {
  const client = getQueryClient()
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default QueryProvider
