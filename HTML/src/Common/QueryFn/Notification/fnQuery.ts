import {generateUID} from '/Function/generateUID'

import {INotificationProps, INotification} from './types/INotification'

export let notifications: INotificationProps[] = []

export function fnQuery(): Promise<INotificationProps[]> {
  return new Promise((resolve) => {
    resolve(notifications)
  })
}

export function fnAddMutation({id, text, type, life}: INotification): Promise<INotification[]> {
  return new Promise((resolve) => {
    const newNotification: INotificationProps = {
      id: id ?? generateUID(),
      text,
      type,
      life,
    }
    notifications.push(newNotification)
    resolve(notifications)
  })
}

export function fnRemoveMutation(id: string): Promise<INotification[]> {
  return new Promise((resolve) => {
    notifications = notifications.filter((notification) => {
      return notification.id !== id
    })
    resolve(notifications)
  })
}
