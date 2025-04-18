import {cache} from 'react'
import factory from 'wretch'

import {IResponseProfile} from '@/utils/type/api/profil/responseProfil'
import {ECookieNames} from '@/utils/type/common/ECookiesNames'

import {URL_MAP} from '../type/api/apiUrl'

export const profilServerGET = cache(async (identity?: string) => {
  if (identity == undefined) return {response: undefined, body: undefined}
  return profilGET({Cookie: `${ECookieNames.identity}=${identity}`})
})

export async function profilGET(headers?: [string, string][] | Record<string, string> | Headers) {
  const response = await factory(URL_MAP.GET_PROFILE)
    .headers(headers ?? {})
    .get()
    .error(401, (res) => res.response)
    .res()

  const body = response.ok ? ((await response.json()) as IResponseProfile) : undefined
  return {response, body}
}
