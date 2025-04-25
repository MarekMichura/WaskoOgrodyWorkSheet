import {type ISearchProps} from '@/utils/type/props/ISearchProps'

export interface ILoginQuery {
  redirect: string
  userName: string
  error: string
}

export type ILoginPageProps = ISearchProps<ILoginQuery>
