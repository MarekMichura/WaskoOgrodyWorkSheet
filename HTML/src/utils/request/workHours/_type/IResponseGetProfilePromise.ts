import {type WretchResponse, type WretchError} from 'wretch'

import {type IResponseWorkHours} from './IResponseWorkHours'

export type IResponseWorkHoursPromise = Promise<{
  response?: WretchResponse | WretchError
  body?: IResponseWorkHours
}>
