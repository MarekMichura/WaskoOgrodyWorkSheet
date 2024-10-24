import {ErrorIcon} from '/Icon/ErrorIcon'
import {IIcon} from '/Icon/index'
import {InfoIcon} from '/Icon/InfoIcon'
import {SuccessIcon} from '/Icon/SuccessIcon'
import {WarnIcon} from '/Icon/WarnIcon'

import {INotificationType} from './INotification'

export const NotificationTitle: Record<INotificationType, string> = {
  [INotificationType.error]: 'Błąd',
  [INotificationType.info]: 'Informacja',
  [INotificationType.success]: 'Sukces',
  [INotificationType.warning]: 'Ostrzeżenie',
}

export const NotificationIcon: Record<INotificationType, (p: IIcon) => JSX.Element> = {
  [INotificationType.error]: ErrorIcon,
  [INotificationType.info]: InfoIcon,
  [INotificationType.success]: SuccessIcon,
  [INotificationType.warning]: WarnIcon,
}
