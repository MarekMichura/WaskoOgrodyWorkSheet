import {type WretchResponse} from 'wretch/types'

export type IActionResult<T> = Promise<{
  response: WretchResponse | undefined
  body: T | undefined
}>
