import {IUserRole} from '../../global/ROLE'

export interface IProfil {
  firstName: string
  lastName: string
  userName: string
  workStartDate: string
  roles: IUserRole[]
  image?: string
}
