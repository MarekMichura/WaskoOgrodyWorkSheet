import {ISearchProps} from '@/utils/type/common/ISsearchProps'

export type ILoginPageProps = ISearchProps<{
  redirect: string
  userName: string
  error: string
}>
