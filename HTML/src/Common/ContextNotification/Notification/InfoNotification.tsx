import { useContext } from "react";
import { contextNotification } from "../Context/context";
import INotificationProps from "./INotificationProps";
import { NotificationContainer, Info, NotificationSVG, NotificationLabel, NotificationCloseButton } from "../style";

export function InfoNotification(props: INotificationProps) {
  const notification = useContext(contextNotification);

  function close() {
    notification.dispatch({ type: "Remove", uID: props.uID });
  }

  return (
    <NotificationContainer time={props.life}>
      <Info>
        <NotificationSVG viewBox="0 0 24 24">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M12 7C12.8284 7 13.5 6.32843 13.5 5.5C13.5 4.67157 12.8284 4 12 4C11.1716 4 10.5 4.67157 10.5 5.5C10.5 6.32843 11.1716 7 12 7ZM11 9C10.4477 9 10 9.44772 10 10C10 10.5523 10.4477 11 11 11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V10C13 9.44772 12.5523 9 12 9H11Z" />
        </NotificationSVG>
        <NotificationLabel>
          <h3>Informacja</h3>
          <span>{props.text}</span>
        </NotificationLabel>
        <NotificationCloseButton viewBox="-3.5 0 19 19" onClick={close}>
          <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
        </NotificationCloseButton>
      </Info>
    </NotificationContainer>
  );
}
