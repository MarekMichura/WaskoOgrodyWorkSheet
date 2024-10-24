import {IUserRole} from './IUserRole'

export interface IProfilResult {
  firstName: string
  lastName: string
  userName: string
  workStartDate: string
  roles: IUserRole[]
  image?: string
  time: string
}

export interface IProfil {
  firstName: string
  lastName: string
  userName: string
  workStartDate: Date
  roles: IUserRole[]
  image?: string
  time: string
}
