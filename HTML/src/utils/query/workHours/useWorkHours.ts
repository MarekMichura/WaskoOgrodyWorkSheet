'use client'

import {useQuery, type DefinedInitialDataOptions} from '@tanstack/react-query'

import {EQueries} from '@/utils/enum/EQueries'
import {type IResponseWorkHours} from '@/utils/request/workHours/_type/IResponseWorkHours'
import {getWorkHours} from '@/utils/request/workHours/getWorkHours'

export function useWorkHours(
  start?: string,
  end?: string,
  opt?: Partial<DefinedInitialDataOptions<IResponseWorkHours>>
) {
  const query = useQuery<IResponseWorkHours>({
    queryKey: [...EQueries.employeeGetCalendar, start, end],
    notifyOnChangeProps: ['data'],
    refetchInterval: 30000,
    retryDelay: 50000,
    enabled: !!start && !!end,

    queryFn: async () => {
      if (start === undefined || end === undefined) return {}
      const {body, response} = await getWorkHours(start, end)
      if (response?.status !== 200) return {}
      return body!
    },
    ...opt,
  })

  return {query, workHours: query.data}
}
