import factory from 'wretch'

import {EApiUrl} from '@/utils/enum/EApiUrl'

import {type IResponseGetProfile} from './_type/IResponseGetProfile'
import {type IResponseGetProfilePromise} from './_type/IResponseGetProfilePromise'

export async function getProfil(): IResponseGetProfilePromise {
  const result = await factory(EApiUrl.GET_PROFILE)
    .get()
    .error(401, (response) => ({response}))
    .unauthorized((response) => ({response}))
    .res(async (r) => ({response: r, data: await (r.json() as Promise<IResponseGetProfile>)}))

  return {response: result.response, body: result.data}
}
