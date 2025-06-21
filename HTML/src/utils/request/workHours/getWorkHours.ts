import factory from 'wretch'
import {queryStringAddon} from 'wretch/addons'

import {EApiUrl} from '@/utils/enum/EApiUrl'

import {type IResponseWorkHoursPromise} from './_type/IResponseGetProfilePromise'
import {type IResponseWorkHours} from './_type/IResponseWorkHours'

export async function getWorkHours(start: string, end: string): IResponseWorkHoursPromise {
  const result = await factory(EApiUrl.GET_EMPLOYER_WORKING_DAYS)
    .addon(queryStringAddon)
    .query({Start: start, End: end})
    .get()
    .error(401, (response) => ({response}))
    .error(403, (response) => ({response}))
    .res(async (r) => ({response: r, data: await (r.json() as Promise<IResponseWorkHours>)}))

  return {response: result.response, body: result.data}
}
