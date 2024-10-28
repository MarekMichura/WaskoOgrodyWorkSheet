import {IUserRole} from './IUserRole'

export interface IProfilResult {
  workStartDate: string
  roles: IUserRole[]
  firstName: string
  lastName: string
  userName: string
  image?: string
  time: string
}

export interface IProfil {
  wait?: boolean

  firstName: string
  lastName: string
  userName: string
  workStartDate: Date
  roles: IUserRole[]
  image?: string
  time: string
}
