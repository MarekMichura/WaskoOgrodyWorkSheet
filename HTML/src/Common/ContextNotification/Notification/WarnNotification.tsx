import { useContext } from "react";
import { contextNotification } from "../Context/context";
import INotificationProps from "./INotificationProps";
import { NotificationContainer, Warn, NotificationSVG, NotificationLabel, NotificationCloseButton } from "../style";


export function WarnNotification(props: INotificationProps) {
  const notification = useContext(contextNotification);

  function close() {
    notification.dispatch({ type: "Remove", uID: props.uID });
  }

  return (
    <NotificationContainer time={props.life}>
      <Warn>
        <NotificationSVG viewBox="0 0 24 24">
          <path fill-rule="evenodd" clip-rule="evenodd" strokeWidth="0" d="M13.0618 4.4295C12.6211 3.54786 11.3635 3.54786 10.9228 4.4295L3.88996 18.5006C3.49244 19.2959 4.07057 20.2317 4.95945 20.2317H19.0252C19.914 20.2317 20.4922 19.2959 20.0947 18.5006L13.0618 4.4295ZM9.34184 3.6387C10.4339 1.45376 13.5507 1.45377 14.6428 3.63871L21.6756 17.7098C22.6608 19.6809 21.228 22 19.0252 22H4.95945C2.75657 22 1.32382 19.6809 2.30898 17.7098L9.34184 3.6387Z" />
          <path d="M12 8V13" strokeWidth="2" stroke-linecap="round" />
          <path d="M12 16L12 16.5" strokeWidth="2" stroke-linecap="round" />
        </NotificationSVG>
        <NotificationLabel>
          <h3>Ostrzezenie</h3>
          <span>{props.text}</span>
        </NotificationLabel>
        <NotificationCloseButton viewBox="-3.5 0 19 19" onClick={close}>
          <path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z" />
        </NotificationCloseButton>
      </Warn>
    </NotificationContainer>
  );
}
