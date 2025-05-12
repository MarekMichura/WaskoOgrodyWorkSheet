import {type EPermissionValues} from '@/utils/type/EPermissions'

export interface IResponseGetProfile {
  firstName: string
  lastName: string
  userName: string

  image: string
  roles: EPermissionValues[]
  workStartDate: string
}
