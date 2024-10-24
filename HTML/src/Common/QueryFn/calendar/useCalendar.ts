import {useQuery} from '@tanstack/react-query'

import {useNotification} from '/QueryFn/Notification/useNotification'

import {queryFn} from './queryFn'

export const useEmployerCalendar = (year?: number, month?: number, start?: Date, end?: Date) => {
  const {mutationNotificationAdd} = useNotification()
  const enable = !(year == undefined || month == undefined || start == undefined || end == undefined)

  const calendar = useQuery({
    queryKey: ['employer_calendar', year, month],
    queryFn: queryFn(mutationNotificationAdd, start, end),
    enabled: enable,
    refetchInterval: 10000,
  })

  return {...calendar}
}
