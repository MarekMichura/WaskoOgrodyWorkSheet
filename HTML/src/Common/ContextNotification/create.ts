import { INotificationAction, INotificationType } from "./types";

function generateUID() {
  let firstPart = (Math.random() * 46656) | 0;
  let secondPart = (Math.random() * 46656) | 0;

  return ("000" + firstPart.toString(36)).slice(-3) +
    ("000" + secondPart.toString(36)).slice(-3);
}

interface ICreateNotification {
  text: string;
  dispatch: React.Dispatch<INotificationAction>;
  type?: INotificationType;
  life?: number;
}

export default function CreateNotification({ text, dispatch, type = "info", life = 8000 }: ICreateNotification) {
  const uID = generateUID()

  dispatch({ type: "Add", notification: { uID, text, type, life } });
  setTimeout(() => {
    dispatch({ type: "Remove", uID })
  }, life + 2000)
}