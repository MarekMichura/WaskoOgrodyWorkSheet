'use client'

import {QueryClientProvider} from '@tanstack/react-query'

import {type IChildren} from '../type/IChildren'

import {getQueryClient} from './qetQueryClient'

function QueryProvider({children}: IChildren) {
  const client = getQueryClient()
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export default QueryProvider
