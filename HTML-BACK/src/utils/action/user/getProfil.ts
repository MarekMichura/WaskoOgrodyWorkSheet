import factory from 'wretch'

import {EApiUrl} from '@/utils/type/EApiUrl'

import {type IResponseGetProfile} from './_type/IResponseGetProfile'

export async function getProfile(url: string = EApiUrl.GET_PROFILE, headers: HeadersInit = {}) {
  const response = await factory(url)
    .headers(headers)
    .get()
    .error(401, (res) => res)
    .res()

  if (!response.ok) return {response, body: undefined}
  return {response, body: (await response.json()) as IResponseGetProfile}
}
