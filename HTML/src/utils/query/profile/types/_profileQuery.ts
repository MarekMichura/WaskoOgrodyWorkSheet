import {IDateTime} from '/common/types/_date'
import {ERoutes} from '/route/eRoutes'

import {EProfileRoles} from './eProfileRoles'

export interface profileQueryData {
  firstName: string
  lastName: string
  userName: string

  image: string
  workStartDate: Date
  roles: EProfileRoles[]

  permissions: Record<ERoutes, boolean>
  lastModification: IDateTime
  logout?: boolean
}

export type profileQueryDataU = profileQueryData | undefined
