import {NotifyOnChangeProps, useQueryClient, useQuery} from '@tanstack/react-query'
import factory from 'wretch'
import {WretchError} from 'wretch/resolver'

import {toDateTime} from '/common/dateToString'

import {queryKeys} from '../keys'

import {calcPermission} from './fun/permission'
import {removeNeedLoginQuery} from './fun/removeNeedLogin'
import {profileQueryData, profileQueryDataU} from './types/_profileQuery'
import {profileResponse} from './types/_profileResponse'

export function useProfile<T = profileQueryData>(changeProps?: NotifyOnChangeProps, select?: ((data: profileQueryDataU) => T) | undefined) {
  const client = useQueryClient()
  return useQuery({
    queryKey: queryKeys.profile,
    notifyOnChangeProps: changeProps,
    networkMode: 'online',
    refetchInterval: 3000,
    retryDelay: 5000,
    select,
    enabled: (query) => {
      const data = client.getQueryData<profileQueryDataU>(queryKeys.profile)
      const result = data !== undefined && data?.logout !== false && query.state.status !== 'error'
      return result
    },
    retry(failureCount, error) {
      if ((error as WretchError)?.status === 401 || failureCount > 5) {
        removeNeedLoginQuery(client)
        return false
      }
      return true
    },
    queryFn: () =>
      new Promise<profileQueryDataU>((resolve, reject) => {
        const prevData = client.getQueryData<profileQueryDataU>([...queryKeys.profile])
        const header = prevData ? {'If-Modified-Since': prevData.lastModification} : {}

        return factory('/api/v1.0/getProfile')
          .headers(header as Record<string, string>)
          .get()
          .unauthorized((error) => {
            reject(error)
          })
          .error(304, () => resolve(prevData!))
          .res(async (response) => {
            const json = (await response.json()) as profileResponse
            const lastModification = toDateTime(new Date(Date.parse(response.headers.get('date')!)))
            const workStartDate = new Date(Date.parse(json.workStartDate))
            const permissions = calcPermission(json.roles)

            resolve({...json, workStartDate, lastModification, permissions})
          })
          .catch(reject)
      }),
  })
}
