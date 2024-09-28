import {lazy} from 'react'
import {INotificationType} from '../type/INotification'

export const NotificationComponents = {
  [INotificationType.info]: lazy(() => import('./info')),
  [INotificationType.warning]: lazy(() => import('./warn')),
  [INotificationType.error]: lazy(() => import('./error')),
  [INotificationType.success]: lazy(() => import('./success')),
}
