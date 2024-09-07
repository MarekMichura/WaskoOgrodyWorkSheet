import { useContext } from "react";
import { Error, NotificationSVG, NotificationLabel, NotificationCloseButton, NotificationContainer } from "../style";
import { contextNotification } from "../Context/context";
import INotificationProps from "./INotificationProps";

export function ErrorNotification(props: INotificationProps) {
  const notification = useContext(contextNotification);

  function close() {
    notification.dispatch({ type: "Remove", uID: props.uID })
  }

  return (
    <NotificationContainer time={props.life} >
      <Error>
        <NotificationSVG viewBox="-3.5 0 19 19">
          <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
        </NotificationSVG>
        <NotificationLabel>
          <h3>Błąd</h3>
          <span>{props.text}</span>
        </NotificationLabel>
        <NotificationCloseButton viewBox="-3.5 0 19 19" onClick={close}>
          <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
        </NotificationCloseButton>
      </Error>
    </NotificationContainer>
  );
}