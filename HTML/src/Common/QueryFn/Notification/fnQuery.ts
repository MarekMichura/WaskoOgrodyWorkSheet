import {generateUID} from '/Function/generateUID'

import {INotificationProps, INotification} from './types/INotification'

export let notifications: INotificationProps[] = []

export const fnQuery = (): Promise<INotificationProps[]> => {
  return new Promise((resolve) => {
    resolve(notifications)
  })
}

export const fnAddMutation = ({id, text, type, life}: INotification): Promise<INotification[]> => {
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

export const fnRemoveMutation = (id: string): Promise<INotification[]> => {
  return new Promise((resolve) => {
    notifications = notifications.filter((notification) => {
      return notification.id !== id
    })
    resolve(notifications)
  })
}
