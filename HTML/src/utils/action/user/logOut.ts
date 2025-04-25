import factory from 'wretch'

import {EApiUrl} from '@/utils/type/EApiUrl'

export async function logOut() {
  const response = await factory(EApiUrl.LOG_OUT).post({}).res()

  return response
}
