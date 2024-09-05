import { ReactNode, useReducer } from "react";
import { reducerNotification } from "./reducer";
import { contextNotification } from "./context";
import { Container, Error } from "./style";
import { ErrorNotification, InfoNotification, SuccessNotification, WarnNotification } from "./ErrorNotification";

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