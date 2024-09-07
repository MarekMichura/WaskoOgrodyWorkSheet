import { useContext } from "react";
import { contextNotification } from "../Context/context";
import INotificationProps from "./INotificationProps";
import { NotificationContainer, Success, NotificationSVG, NotificationLabel, NotificationCloseButton } from "../style";


export function SuccessNotification(props: INotificationProps) {
  const notification = useContext(contextNotification);

  function close() {
    notification.dispatch({ type: "Remove", uID: props.uID });
  }

  return (
    <NotificationContainer time={props.life}>
      <Success>
        <NotificationSVG viewBox="-3.5 0 19 19">
          <path d="M4.63 15.638a1.028 1.028 0 0 1-.79-.37L.36 11.09a1.03 1.03 0 1 1 1.58-1.316l2.535 3.043L9.958 3.32a1.029 1.029 0 0 1 1.783 1.03L5.52 15.122a1.03 1.03 0 0 1-.803.511.89.89 0 0 1-.088.004z" />
        </NotificationSVG>
        <NotificationLabel>
          <h3>Sukces</h3>
          <span>{props.text}</span>
        </NotificationLabel>
        <NotificationCloseButton viewBox="-3.5 0 19 19" onClick={close}>
          <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
        </NotificationCloseButton>
      </Success>
    </NotificationContainer>
  );
}
