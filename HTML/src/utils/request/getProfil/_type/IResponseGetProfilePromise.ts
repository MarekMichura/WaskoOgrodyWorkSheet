import {type WretchResponse, type WretchError} from 'wretch'

import {type IResponseGetProfile} from './IResponseGetProfile'

export type IResponseGetProfilePromise = Promise<{
  response?: WretchResponse | WretchError
  body?: IResponseGetProfile
}>
