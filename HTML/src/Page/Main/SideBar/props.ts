import {route} from '/global/ROUTE'
import FaceIcon from '/Icon/FaceIcon'

export interface IMenuOption {
  icon: typeof FaceIcon
  show: Record<route, boolean>
  text: string
  route: route
}

export interface ISideBar {
  open: boolean
}
