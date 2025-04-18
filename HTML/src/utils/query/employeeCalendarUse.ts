import {DefinedInitialDataOptions, useSuspenseQuery} from '@tanstack/react-query'

import {employerWorkingDaysPOST} from '../actions/getEmployerWorkingDays'
import {ICalendarDate} from '../date/calcCalendarDates'
import {IResponseGetEmployeeWorkingDays} from '../type/api/employee/getWorkingDays/IResponseGetEmployeeWorkingDays'
import {EQuery} from '../type/common/EQuery'

export function useEmployeeCalendar(start: ICalendarDate, end: ICalendarDate, options?: DefinedInitialDataOptions<IResponseGetEmployeeWorkingDays>) {
  const query = useSuspenseQuery<IResponseGetEmployeeWorkingDays>({
    queryKey: [...EQuery.employeeGetCalendar, start, end],
    notifyOnChangeProps: ['data'],
    refetchInterval: 10000,
    retryDelay: 5000,
    placeholderData: {},

    queryFn: async () => {
      const {body} = await employerWorkingDaysPOST(start, end)
      if (body) return body
      return {}
    },
    ...options,
  })

  return query
}
