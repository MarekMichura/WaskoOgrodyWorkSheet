import {useQuery, useQueryClient} from '@tanstack/react-query'
import {useMemo} from 'react'

import {useNotification} from '/QueryFn/Notification/useNotification'

import {IResponseCalendar} from './ICalendarResponse'
import {queryFn} from './queryFn'

const calcRange = (year: number, month: number) => {
  const start = new Date(year, month, 1)
  const day = start.getDay() - 1
  start.setDate(start.getDate() - (day == -1 ? 6 : day))
  const end = new Date(start.getFullYear(), start.getMonth(), start.getDate() + 41)

  return {start, end}
}

export const useEmployerCalendar = (year: number, month: number) => {
  const client = useQueryClient()
  const {mutationNotificationAdd} = useNotification()

  const prevData = client.getQueryData<IResponseCalendar>(['employer_calendar', year, month])
  const {start, end} = useMemo(() => calcRange(year, month), [year, month])

  const calendar = useQuery({
    queryKey: ['employer_calendar', year, month],
    queryFn: queryFn(prevData, mutationNotificationAdd, start, end),
    refetchInterval: 500,
    retryDelay: 2000,
    notifyOnChangeProps: ['data', 'isError'],
  })

  return {...calendar, start, end}
}

export const useEmployerCalendarDayData = (date: Date | null) => {
  const client = useQueryClient()

  const data = useMemo(() => {
    if (date == null) return null
    const str = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`

    const result = client
      .getQueriesData<IResponseCalendar>({
        queryKey: ['employer_calendar'],
      })
      .filter(([, value]) => {
        return value !== undefined && value.data?.[str] !== undefined
      })

    if (result.length == 0) return null
    if (result.length == 1) return {time: result[0][1]!.time, ...result[0][1]!.data[str]}

    const max = result.reduce((max, check) => {
      const checkValue = check[1]
      const maxValue = max[1]
      if (!checkValue || !checkValue.time) return max
      if (!maxValue || !maxValue.time) return check

      const maxTime = new Date(Date.parse(maxValue.time))
      const checkTime = new Date(Date.parse(checkValue.time))

      if (maxTime > checkTime) return max
      return check
    })
    return {time: max[1]!.time, ...max[1]!.data[str]}
  }, [date, client])

  return data
}
