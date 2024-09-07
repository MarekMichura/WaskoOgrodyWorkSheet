import { ReactNode, useReducer } from "react";
import { reducerNotification } from "./Context/reducer";
import { contextNotification } from "./Context/context";
import { Container } from "./style";
import { ErrorNotification } from "./Notification/ErrorNotification";
import { InfoNotification } from "./Notification/InfoNotification";
import { WarnNotification } from "./Notification/WarnNotification";
import { SuccessNotification } from "./Notification/SuccessNotification";

export default function ContextNotification(props: { children?: ReactNode }) {
  const [notifications, dispatch] = useReducer(reducerNotification, { List: [] });

  return (
    <contextNotification.Provider value={{ dispatch }}>
      {props.children}
      <Container>
        {notifications.List.map((p) => {
          switch (p.type) {
            case "error": return <ErrorNotification key={p.uID} text={p.text} uID={p.uID} life={p.life} />
            case "success": return <SuccessNotification key={p.uID} text={p.text} uID={p.uID} life={p.life} />
            case "warning": return <WarnNotification key={p.uID} text={p.text} uID={p.uID} life={p.life} />
            case "info": return <InfoNotification key={p.uID} text={p.text} uID={p.uID} life={p.life} />
          }
        })}
      </Container>
    </contextNotification.Provider>
  )
}