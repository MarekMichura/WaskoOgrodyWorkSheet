import {IRemotePermissions} from './remoteRoles'

export interface IResponseProfile {
  firstName: string
  lastName: string
  userName: string

  image: string
  roles: IRemotePermissions[]
  workStartDate: string
}
