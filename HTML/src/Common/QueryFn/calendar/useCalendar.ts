import {useQuery, useQueryClient} from '@tanstack/react-query'

import {useNotification} from '/QueryFn/Notification/useNotification'

import {IResponseCalendar} from './ICalendarResponse'
import {queryFn} from './queryFn'

export const useEmployerCalendar = (year?: number, month?: number, start?: Date, end?: Date) => {
  const {mutationNotificationAdd} = useNotification()
  const client = useQueryClient()
  const enable = !(year == undefined || month == undefined || start == undefined || end == undefined)
  const prevData = client.getQueryData<IResponseCalendar>(['employer_calendar', year, month])

  const calendar = useQuery({
    queryKey: ['employer_calendar', year, month],
    queryFn: queryFn(prevData, mutationNotificationAdd, start, end),
    enabled: enable,
    refetchInterval: 10000,
    retryDelay: 2000,
  })

  return {...calendar}
}
