import type {ILocale} from '@/locale/routing'
import type {ILocalization} from '@/locale/translations/en_US'
import type {IChildren} from '@/utils/types/IChildren'

export interface IRootLayoutContentProps extends IChildren {
  lang: ILocale
  messages: ILocalization
}
