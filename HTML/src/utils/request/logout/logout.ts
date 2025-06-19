import factory from 'wretch'

import {EApiUrl} from '@/utils/enum/EApiUrl'

export async function logout() {
  const result = await factory(EApiUrl.LOG_OUT).post({}).res()

  return result.status === 200
}
