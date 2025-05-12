'use server'
import {cookies} from 'next/headers'
import {cache} from 'react'

import {EApiUrlServer} from '@/utils/type/EApiUrl'
import {ECookies} from '@/utils/type/ECookies'

import {getProfile} from './getProfil'

export const serverGetProfile = cache(async (_identity?: string) => {
  const identity = _identity ?? (await cookies()).get(ECookies.identity)?.value
  if (identity === undefined) return {response: undefined, body: undefined}

  return getProfile(EApiUrlServer.GET_PROFILE, {Cookie: `${ECookies.identity}=${identity}`})
})
