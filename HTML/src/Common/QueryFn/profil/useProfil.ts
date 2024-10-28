import {useQueryClient, useQuery, useMutation} from '@tanstack/react-query'

import {endPoints, IRoute, links} from '/Router/IRoute'

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
    onMutate() {
      const loc = window.location.pathname
      const len = loc.indexOf('/', 1)
      const route = len == -1 ? loc : loc.substring(0, len)
      const routeID = Object.entries(links).find(([, value]) => value == route)?.[0]
      if (routeID != undefined) endPoints[routeID as unknown as IRoute].preload()
    },
  })

  const mutationLogOut = useMutation({
    mutationFn: fnMutationLogOut,
    onError(error: INotification, _, context) {
      client.setQueryData(['profil'], context)
      mutationNotificationAdd.mutate(error)
    },
    onSuccess: (data) => {
      client.clear()
      mutationNotificationAdd.mutate(data)
    },
    onMutate() {
      const data = profil.data
      client.setQueryData(['profil'], {...data, wait: true} as IProfil)

      return data
    },
  })

  return {...profil, mutationLogin, mutationLogOut}
}
