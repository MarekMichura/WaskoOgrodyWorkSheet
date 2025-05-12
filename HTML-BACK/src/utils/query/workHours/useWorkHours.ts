'use client'

import {useSuspenseQuery, type DefinedInitialDataOptions} from '@tanstack/react-query'
import {useRouter} from 'next/navigation'

import {type IResponseWorkingHours} from '@/utils/action/workingHours/_type/IResponseWorkingHours'
import {getWorkingHours} from '@/utils/action/workingHours/getWorkingHours'
import {EQueries} from '@/utils/type/EQueries'

export const defProfilData: IResponseWorkingHours = {}
export function useWorkHours(start?: string, end?: string, opt?: Partial<DefinedInitialDataOptions<IResponseWorkingHours>>) {
  const router = useRouter()

  const query = useSuspenseQuery<IResponseWorkingHours>({
    queryKey: [...EQueries.employeeGetCalendar, start, end],
    notifyOnChangeProps: ['data'],
    refetchInterval: 30000,
    retryDelay: 50000,
    placeholderData: defProfilData,
    enabled: !!start && !!end,

    queryFn: async () => {
      if (start === undefined || end === undefined) return {}
      const {body, response} = await getWorkingHours(start!, end!)
      if (!response?.ok) setTimeout(() => router.refresh(), 1)
      return body ?? defProfilData
    },
    ...opt,
  })

  return {query, workHours: query.data}
}
