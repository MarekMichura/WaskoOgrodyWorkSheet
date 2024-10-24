import {useQueryClient, useQuery, useMutation} from '@tanstack/react-query'

import {INotification} from '../Notification/types/INotification'
import {useNotification} from '../Notification/useNotification'

import {fnMutationLogin} from './fnMutationLogin'
import {fnMutationLogOut} from './fnMutationLogOut'
import {fnQuery} from './fnQuery'
import {IFnQuery} from './types/IFnQuery'
import {IProfil} from './types/IProfil'

export const useProfil = () => {
  const {mutationNotificationAdd} = useNotification()
  const client = useQueryClient()
  const prevData = client.getQueryData<IProfil>(['profil'])
  const status = client.getQueryState(['profil'])

  const profil = useQuery<IFnQuery, INotification>({
    queryKey: ['profil'],
    queryFn: fnQuery(prevData, mutationNotificationAdd, status?.status),
    notifyOnChangeProps: 'all',
    refetchOnMount: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    refetchInterval: (query) => (query.state.data ? 10000 : false),
  })

  const mutationLogin = useMutation({
    mutationFn: fnMutationLogin,
    onSuccess: ({profil, type, text}) => {
      client.setQueryData(['profil'], {...profil, workStartDate: new Date(Date.parse(profil.workStartDate))})
      mutationNotificationAdd.mutate({type, text})
    },
    onError: ({type, text}: INotification) => {
      client.setQueryData(['profil'], false)
      mutationNotificationAdd.mutate({type, text})
    },
  })

  const mutationLogOut = useMutation({
    mutationFn: fnMutationLogOut,
    onSuccess: ({type, text}) => {
      client.setQueryData(['profil'], false)
      mutationNotificationAdd.mutate({type, text})
    },
    onError: ({type, text}: INotification) => {
      client.setQueryData(['profil'], false)
      mutationNotificationAdd.mutate({type, text})
    },
  })

  return {...profil, mutationLogin, mutationLogOut}
}
