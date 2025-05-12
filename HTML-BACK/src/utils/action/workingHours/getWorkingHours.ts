import factory from 'wretch'

import {EApiUrl} from '@/utils/type/EApiUrl'

import {type IResponseWorkingHours} from './_type/IResponseWorkingHours'

export async function getWorkingHours(start: string, end: string, url: string = EApiUrl.GET_EMPLOYER_WORKING_DAYS, headers: HeadersInit = {}) {
  const response = await factory(`${url}?Start=${start}&End=${end}`)
    .headers(headers)
    .get()
    .error(401, (res) => res)
    .error(403, (res) => res)
    .res()

  if (!response.ok) return {response, body: undefined}
  return {response, body: (await response.json()) as IResponseWorkingHours}
}
