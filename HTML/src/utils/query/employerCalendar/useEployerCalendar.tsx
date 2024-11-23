import {NotifyOnChangeProps, useQuery, useQueryClient} from '@tanstack/react-query'
import factory from 'wretch'

import {toDateOnly, toDateTime} from '/common/dateToString'

import {queryKeys} from '../keys'

import {employerCalendarQueryData, employerCalendarQueryDataU} from './types/_employerCalendarQueryData'
import {employerCalendarQueryInput} from './types/_employerCalendarQueryInput'
import {employerCalendarResponse} from './types/_employerCalendarResponse'

export function useEmployerCalendar<T = employerCalendarQueryData>(
  {year, month}: employerCalendarQueryInput,
  changeProps?: NotifyOnChangeProps,
  select?: ((data: employerCalendarQueryData) => T) | undefined
) {
  const client = useQueryClient()
  return useQuery({
    queryKey: [...queryKeys.EmployerCalendar, year, month],
    notifyOnChangeProps: changeProps,
    refetchInterval: 10000,
    retryDelay: 15000,
    select,
    queryFn: () =>
      new Promise<employerCalendarQueryData>((resolve, reject) => {
        const prevData = client.getQueryData<employerCalendarQueryDataU>([...queryKeys.EmployerCalendar, year, month])
        const header: Record<string, string> = prevData ? {'If-Modified-Since': prevData.lastModification} : {}
        const start = toDateOnly(new Date(year, month, 1))
        const end = toDateOnly(new Date(year, month + 1, 0))

        factory(`/api/v1.0/EmployerCalendar?start=${start}&end=${end}`)
          .headers(header)
          .get()
          .error(304, () => resolve(prevData!))
          .res(async (response) => {
            const json = (await response.json()) as employerCalendarResponse
            const lastModification = toDateTime(new Date(Date.parse(response.headers.get('date')!)))

            return resolve({lastModification, data: json})
          })
          .catch(reject)
      }),
  })
}
