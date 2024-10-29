import {useQueryClient, useMutation} from '@tanstack/react-query'

import {INotification} from '../Notification/types/INotification'
import {useNotification} from '../Notification/useNotification'

import {fnMutationLogOut} from './fnMutationLogOut'
import {IProfil} from './types/IProfil'

export function useLogOut() {
  const {mutationNotificationAdd} = useNotification()
  const client = useQueryClient()

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
      const data = client.getQueryData(['Profil']) as IProfil
      client.setQueryData(['profil'], {...data, wait: true} as IProfil)

      return data
    },
  })

  return mutationLogOut
}
