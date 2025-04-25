'use client'

import {QueryClientProvider} from '@tanstack/react-query'

import {IChildren} from '@/utils/type/common/IChildren'

import {getQueryClient} from '../../utils/query/queryClient'

function QueryProvider({children}: IChildren) {
  const client = getQueryClient()
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default QueryProvider
