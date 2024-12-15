import {useQueryClient, useMutation} from '@tanstack/react-query'
import factory from 'wretch'

import {queryKeys} from '../keys'

import {removeNeedLoginQuery} from './fun/removeNeedLogin'
import {profileQueryDataU} from './types/_profileQuery'

export function useMutationLogout() {
  const client = useQueryClient()
  return useMutation({
    mutationKey: [...queryKeys.profile, 'logout'],
    networkMode: 'online',
    mutationFn: () => {
      return new Promise((resolve, reject) => {
        return factory('/api/v1.0/logout').get().res(resolve).catch(reject)
      })
    },
    onMutate: () => {
      client.setQueryData(queryKeys.profile, (old: profileQueryDataU): profileQueryDataU => (old ? {...old, logout: true} : undefined))
    },
    onSuccess: () => {
      client.invalidateQueries({queryKey: queryKeys.profile})
      removeNeedLoginQuery(client)
    },
  })
}
