'use server'
import {cache} from 'react'

import {EApiUrlServer} from '@/utils/type/EApiUrl'
import {ECookies} from '@/utils/type/ECookies'

import {getProfile} from './getProfil'

import type {IActionResult} from '../IActionResult'
import type {IResponseGetProfile} from './_type/IResponseGetProfile'

export const serverGetProfile = cache(async (identity: string | undefined): IActionResult<IResponseGetProfile> => {
  if (identity === undefined) return {response: undefined, body: undefined}
  return await getProfile(EApiUrlServer.GET_PROFILE, {Cookie: `${ECookies.identity}=${identity}`})
})
