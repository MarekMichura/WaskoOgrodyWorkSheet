import {FaceIcon} from '/Icon/FaceIcon'
import {IRoute} from '/Router/IRoute'

export interface ISideBarOption {
  icon: typeof FaceIcon
  show: Record<IRoute, boolean>
  text: string
  route: IRoute
}
