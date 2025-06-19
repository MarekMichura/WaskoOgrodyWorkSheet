import {cookies} from 'next/headers'
import factory from 'wretch'

import {EApiUrlServer} from '@/utils/enum/EApiUrl'
import {ECookie} from '@/utils/enum/ECookies'

import {type IResponseGetProfile} from './_type/IResponseGetProfile'
import {type IResponseGetProfilePromise} from './_type/IResponseGetProfilePromise'

export async function getProfilServer(): IResponseGetProfilePromise {
  const identity = (await cookies()).get(ECookie.identity)?.value
  if (!identity) return {}
  const result = await factory(EApiUrlServer.GET_PROFILE)
    .headers({Cookie: `${ECookie.identity}=${identity}`})
    .get()
    .error(401, (response) => ({response}))
    .res(async (r) => ({response: r, data: await (r.json() as Promise<IResponseGetProfile>)}))

  return {response: result.response, body: result.data}
}
