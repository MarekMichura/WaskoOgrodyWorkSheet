import {cookies} from 'next/headers'
import factory from 'wretch'
import {queryStringAddon} from 'wretch/addons'

import {EApiUrlServer} from '@/utils/enum/EApiUrl'
import {ECookie} from '@/utils/enum/ECookies'

import {type IResponseWorkHoursPromise} from './_type/IResponseGetProfilePromise'
import {type IResponseWorkHours} from './_type/IResponseWorkHours'

export async function getWorkHoursServer(start: string, end: string): IResponseWorkHoursPromise {
  const identity = (await cookies()).get(ECookie.identity)?.value
  if (!identity) return {}

  const result = await factory(EApiUrlServer.GET_EMPLOYER_WORKING_DAYS)
    .addon(queryStringAddon)
    .headers({Cookie: `${ECookie.identity}=${identity}`})
    .query({Start: start, End: end})
    .get()
    .error(401, (response) => ({response}))
    .error(403, (response) => ({response}))
    .res(async (r) => ({response: r, data: await (r.json() as Promise<IResponseWorkHours>)}))

  return {response: result.response, body: result.data}
}
