import type IHomeLayoutAction from './IAction'
import type IHomeLayoutState from './IState'

type IHomeLayoutContext = [
  IHomeLayoutState, //
  React.Dispatch<IHomeLayoutAction>
]

export default IHomeLayoutContext
