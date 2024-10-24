export enum INotificationType {
  info = 'info',
  warning = 'warning',
  error = 'error',
  success = 'success',
}

export interface INotification {
  type: INotificationType
  text: string
  life?: number
  id?: string
}

export interface INotificationProps {
  type: INotificationType
  text: string
  life?: number
  id: string
}
