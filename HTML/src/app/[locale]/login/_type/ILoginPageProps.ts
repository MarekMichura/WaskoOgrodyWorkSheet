import {type IPaths} from '@/locale/routing'
import {type IParamsLocale} from '@/utils/enum/IParamsLocale'
import {type ISearchParams} from '@/utils/type/ISearchProps'

export interface ILoginQuery {
  redirect: IPaths
  userName: string
  error: string
}

export type ILoginPageProps = ISearchParams<ILoginQuery> & IParamsLocale
