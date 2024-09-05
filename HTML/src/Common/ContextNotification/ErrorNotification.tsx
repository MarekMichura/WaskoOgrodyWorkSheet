import { useContext } from "react";
import { Error, NotificationSVG, NotificationLabel, NotificationCloseButton, Info, Warn, Success, NotificationContainer } from "./style";
import { contextNotification } from "./context";

interface INotificationProps {
  text: string;
  uID: string;
  life: number;
}

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

export function InfoNotification(props: INotificationProps) {
  const notification = useContext(contextNotification);

  function close() {
    notification.dispatch({ type: "Remove", uID: props.uID })
  }

  return (
    <NotificationContainer time={props.life} >
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

export function WarnNotification(props: INotificationProps) {
  const notification = useContext(contextNotification);

  function close() {
    notification.dispatch({ type: "Remove", uID: props.uID })
  }

  return (
    <NotificationContainer time={props.life} >
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

export function SuccessNotification(props: INotificationProps) {
  const notification = useContext(contextNotification);

  function close() {
    notification.dispatch({ type: "Remove", uID: props.uID })
  }

  return (
    <NotificationContainer time={props.life} >
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