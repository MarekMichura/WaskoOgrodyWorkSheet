export type INotificationType = "info" | "warning" | "error" | "success"

export interface INotification {
  uID: string;
  text: string;
  type: INotificationType;
  life: number;
}

export interface INotifications {
  List: INotification[],
}

interface INotificationActionAdd {
  type: "Add",
  notification: INotification,
}

interface INotificationActionRemove {
  type: "Remove"
  uID: string
}

export type INotificationAction = INotificationActionAdd | INotificationActionRemove

export type INotificationReducerData = INotifications

export interface INotificationContextState {
  dispatch: React.Dispatch<INotificationAction>
}