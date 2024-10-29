import {useQuery, useQueryClient} from '@tanstack/react-query'
import {useMemo} from 'react'

import {useNotification} from '/QueryFn/Notification/useNotification'

import {calcRange} from './calcRange'
import {IResponseCalendar} from './ICalendarResponse'
import {queryFn} from './queryFn'

export function useEmployerCalendar(year: number, month: number) {
  const client = useQueryClient()
  const {mutationNotificationAdd} = useNotification()

  const prevData = client.getQueryData<IResponseCalendar>(['employer_calendar', year, month])
  const {start, end} = useMemo(() => calcRange(year, month), [year, month])

  const calendar = useQuery({
    queryKey: ['employer_calendar', year, month],
    queryFn: queryFn(prevData, mutationNotificationAdd, start, end),
    refetchInterval: 1500,
    retryDelay: 1500,
    notifyOnChangeProps: ['data', 'status', 'isPaused'],
  })

  return {...calendar, start, end}
}
