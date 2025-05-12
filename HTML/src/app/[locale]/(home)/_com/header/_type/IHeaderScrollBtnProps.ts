import type {ILocalizationSecondKeys} from '@/locale/translations/en_US'

export interface IHeaderScrollBtnProps {
  click?: () => void
  hover?: (i: number) => void
  leave?: () => void
  text: ILocalizationSecondKeys<'sections'>
  id: number
}
