import {useQueryClient, useQuery, useMutation} from '@tanstack/react-query'

import {fnQuery, fnAddMutation, fnRemoveMutation} from './fnQuery'

export function useNotification() {
  const client = useQueryClient()

  const notification = useQuery({
    queryKey: ['Notification'],
    initialData: [],
    queryFn: fnQuery,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  })

  const mutationNotificationAdd = useMutation({
    mutationFn: fnAddMutation,
    onSuccess: (data) => client.setQueryData(['Notification'], data),
  })
  const mutationNotificationRemove = useMutation({
    mutationFn: fnRemoveMutation,
    onSuccess: (data) => client.setQueryData(['Notification'], data),
  })

  return {...notification, mutationNotificationRemove, mutationNotificationAdd}
}
