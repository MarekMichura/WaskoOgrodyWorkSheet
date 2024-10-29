import {useQueryClient} from '@tanstack/react-query'
import {useMemo} from 'react'

import {IResponseCalendar} from './ICalendarResponse'

export function useEmployerCalendarDayData(date: Date | null) {
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
