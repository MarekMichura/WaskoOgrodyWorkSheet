import factory from 'wretch'

import {EApiUrl} from '@/utils/type/EApiUrl'

import {type IResponseAuth} from './_type/IResponseAuth'

export async function auth(userName: string, password: string) {
  const response = await factory(EApiUrl.AUTHENTICATE)
    .post({UserName: userName, Password: password})
    .res((a) => a.json() as Promise<IResponseAuth>)

  return response
}
