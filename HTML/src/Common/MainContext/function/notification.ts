import {MainAction} from '/global/MAIN_ACTION'

import {IActionNotificationAdd, IActionNotificationRemove} from '../type/IAction'
import {INotification} from '../type/INotification'

import generateUID from './generateUID'

export function addNotification(state: INotification[], action: IActionNotificationAdd): INotification[] {
  const {dispatch, ...notification} = action
  const uID = generateUID()

  setTimeout(() => {
    dispatch({action: MainAction.NOTIFICATION_REMOVE, uID})
  }, action.life + 2000)
  return [...state, {...notification, uID}]
}

export function removeNotification(state: INotification[], {uID}: IActionNotificationRemove): INotification[] {
  const newStateList = state.filter((a) => a.uID !== uID)
  return newStateList
}
