import {IActionNotificationRemove} from '../type/IAction'
import {INotification} from '../type/INotification'

function removeNotification(state: INotification[], {uID}: IActionNotificationRemove): INotification[] {
  const newStateList = state.filter((a) => a.uID !== uID)
  return newStateList
}

export default removeNotification
