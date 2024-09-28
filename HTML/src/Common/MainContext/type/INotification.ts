export enum INotificationType {
  info = 'info',
  warning = 'warning',
  error = 'error',
  success = 'success',
}

export interface INotificationProps {
  text: string
  uID: string
  life: number
}

export interface INotification {
  uID: string
  text: string
  type: INotificationType
  life: number
}
