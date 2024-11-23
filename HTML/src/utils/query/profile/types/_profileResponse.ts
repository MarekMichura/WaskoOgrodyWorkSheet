import {EProfileRoles} from './eProfileRoles'

export interface profileResponse {
  firstName: string
  lastName: string
  userName: string

  image: string
  roles: EProfileRoles[]
  workStartDate: string
}
