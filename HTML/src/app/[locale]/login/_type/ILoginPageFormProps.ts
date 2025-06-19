import {type IPaths} from '@/locale/routing'

export interface ILoginPageClientFormProps {
  redirect?: IPaths
  error: string | undefined
  userName: string | undefined
}
