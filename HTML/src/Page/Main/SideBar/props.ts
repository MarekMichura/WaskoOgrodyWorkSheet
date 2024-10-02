import FaceIcon from '/Icon/FaceIcon'

export interface IMenuOption {
  icon: typeof FaceIcon
  show: boolean
  text: string
  to: string
}

export interface ISideBar {
  open: boolean
}
