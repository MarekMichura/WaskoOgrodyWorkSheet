import {cache} from 'react'
import factory from 'wretch'

import {ECookieNames} from '@/utils/type/common/ECookiesNames'

import {URL_MAP} from '../type/api/apiUrl'

export const loginOutServerPOST = cache(async (identity?: string) => {
  if (identity == undefined) return {}
  return loginOutPOST({Cookie: `${ECookieNames.identity}=${identity}`})
})

export async function loginOutPOST(headers?: [string, string][] | Record<string, string> | Headers) {
  const response = await factory(URL_MAP.LOG_OUT)
    .headers(headers ?? {})
    .post()
    .res()

  return {response}
}
