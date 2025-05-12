import {type ILocalizationSecondKeys} from '@/locale/translations/en_US'

export interface IHomeLayoutStateSection {
  name: ILocalizationSecondKeys<'sections'>
  check: boolean
  scroll: number
}

export default interface IHomeLayoutState {
  sections: IHomeLayoutStateSection[]
}
