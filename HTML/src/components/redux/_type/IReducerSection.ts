import {type EHeaderPosition} from '@/app/[locale]/_(home)_prev/_com/header/_enum/EHeaderPosition'
import {type ILocalization} from '@/locale/translations/en_US'

export type IReducerSectionName = keyof ILocalization['sections']
export interface IReducerSection {
  name: IReducerSectionName
  y: number

  navbar?: {
    bg?: string
    color?: string
    status?: EHeaderPosition
    opacity?: number
  }
}
export type IReducerSectionUpdata = Partial<IReducerSection> & {name: IReducerSectionName}
