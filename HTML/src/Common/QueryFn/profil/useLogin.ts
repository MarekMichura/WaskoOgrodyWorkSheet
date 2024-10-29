import {useQueryClient, useMutation} from '@tanstack/react-query'

import {links, endPoints, IRoute} from '/Router/IRoute'

import {INotification} from '../Notification/types/INotification'
import {useNotification} from '../Notification/useNotification'

import {fnMutationLogin} from './fnMutationLogin'

export function useLogin() {
  const {mutationNotificationAdd} = useNotification()
  const client = useQueryClient()

  const mutationLogin = useMutation({
    mutationFn: fnMutationLogin,
    onSuccess: ({profil, type, text}) => {
      client.setQueryData(['profil'], {...profil, workStartDate: new Date(Date.parse(profil.workStartDate))})
      mutationNotificationAdd.mutate({type, text})
    },
    onError: ({type, text}: INotification) => {
      client.setQueryData(['profil'], null)
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

  return mutationLogin
}
