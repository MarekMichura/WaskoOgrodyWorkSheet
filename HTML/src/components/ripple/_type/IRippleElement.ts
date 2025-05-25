import {type IRippleData} from './IRippleData'

export interface IRippleElement extends IRippleData {
  remove: (id: string) => void
}
