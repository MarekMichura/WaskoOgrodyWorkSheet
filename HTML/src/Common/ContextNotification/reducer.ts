import { INotifications, INotificationAction, INotification } from "./types";

export function reducerNotification(state: INotifications, action: INotificationAction): INotifications {
  if (action.type === "Add") {
    const newNotification: INotification = action.notification
    const newList: INotification[] = [...state.List, newNotification]
    return { ...state, List: newList };
  }
  else if (action.type === "Remove") {
    const uid = action.uID
    const newStateList = state.List.filter(a => a.uID !== uid)
    return { ...state, List: newStateList };
  }
  return state;
}