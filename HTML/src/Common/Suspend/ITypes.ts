import {ILoadingProps} from '/Loading/ILoadingProps'

export interface ISuspenseDelayed extends ILoadingProps {
  open: boolean
  children: React.ReactNode
}

export interface ISuspendWrapperController {
  set: (open: boolean) => void
}
