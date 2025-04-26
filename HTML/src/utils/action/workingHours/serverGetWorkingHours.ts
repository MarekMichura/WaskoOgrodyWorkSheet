'use server'
import {cookies} from 'next/headers'
import {cache} from 'react'

import {EApiUrlServer} from '@/utils/type/EApiUrl'
import {ECookies} from '@/utils/type/ECookies'

import {getWorkingHours} from './getWorkingHours'

export const serverGetWorkingHours = cache(async (start: string, end: string, _identity?: string) => {
  const identity = _identity ?? (await cookies()).get(ECookies.identity)?.value
  if (identity === undefined) return {response: undefined, body: undefined}

  return getWorkingHours(start, end, EApiUrlServer.GET_EMPLOYER_WORKING_DAYS, {Cookie: `${ECookies.identity}=${identity}`})
})
