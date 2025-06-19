import {type EPermissionValues} from '@/utils/enum/EPermissions'

export interface IResponseGetProfile {
  firstName: string
  lastName: string
  userName: string

  image: string
  roles: EPermissionValues[]
  workStartDate: string
}
