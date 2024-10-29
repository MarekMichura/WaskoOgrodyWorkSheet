import {useQueryClient, useQuery} from '@tanstack/react-query'

import {INotification} from '../Notification/types/INotification'
import {useNotification} from '../Notification/useNotification'

import {fnQuery} from './fnQuery'
import {IFnQuery} from './types/IFnQuery'
import {IProfil} from './types/IProfil'

export function useProfil() {
  const {mutationNotificationAdd} = useNotification()
  const client = useQueryClient()
  const prevData = client.getQueryData<IProfil>(['profil'])
  const status = client.getQueryState(['profil'])

  const profil = useQuery<IFnQuery, INotification>({
    queryKey: ['profil'],
    queryFn: fnQuery(prevData, mutationNotificationAdd, status?.status),
    retryDelay: 2000,
    refetchInterval: 500,
    notifyOnChangeProps: ['data'],
    enabled(query) {
      if (query.state.dataUpdateCount == 0) return true
      if (query.state.data == undefined) return false
      if (query.state.data.wait == undefined) return false
      return true
    },
  })

  return profil
}
