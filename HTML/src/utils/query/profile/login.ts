import {useQueryClient, useMutation} from '@tanstack/react-query'
import factory from 'wretch'

import {toDateTime} from '/common/dateToString'

import {queryKeys} from '../keys'

import {calcPermission} from './fun/permission'
import {loginRequest} from './types/_loginRequest'
import {loginResponse} from './types/_loginResponse'
import {profileQueryData} from './types/_profileQuery'

export function useMutationLogin() {
  const client = useQueryClient()
  return useMutation({
    mutationKey: [...queryKeys.profile, 'login'],
    networkMode: 'online',
    mutationFn: (data: loginRequest) => {
      return new Promise<profileQueryData>((resolve, reject) => {
        return factory('/api/v1.0/authenticate')
          .post(data)
          .res(async (response) => {
            const json = (await response.json()) as loginResponse
            if (!json.authenticated) return reject()
            const lastModification = toDateTime(new Date(Date.parse(response.headers.get('date')!)))
            const permissions = calcPermission(json.profile.roles)
            const workStartDate = new Date(json.profile.workStartDate)

            resolve({...json.profile, workStartDate, lastModification, permissions})
          })
          .catch(reject)
      })
    },
    onSuccess: (result) => {
      client.setQueryData(queryKeys.profile, result)
    },
  })
}
