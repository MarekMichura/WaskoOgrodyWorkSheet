import factory from 'wretch'

import {EApiUrl} from '@/utils/type/EApiUrl'

import {type IActionResult} from '../IActionResult'

import {type IResponseGetProfile} from './_type/IResponseGetProfile'

export async function getProfile(url: string = EApiUrl.GET_PROFILE, header: HeadersInit = {}): IActionResult<IResponseGetProfile> {
  const response = await factory(url)
    .headers(header)
    .get()
    .error(401, (res) => res)
    .res()

  if (!response.ok) return {response, body: undefined}
  return {response, body: (await response.json()) as IResponseGetProfile}
}
