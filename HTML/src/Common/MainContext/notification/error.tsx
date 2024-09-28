import {useContext} from 'react'
import ErrorIcon from '/Common/Icon/ErrorIcon'
import CloseIcon from '/Common/Icon/CloseIcon'
import * as CSS from '../css'
import {INotificationProps} from '../type/INotification'
import {MainAction} from '../global/ACTION'
import Context from '../type/Context'

function ErrorNotification({life, text, uID}: INotificationProps) {
  const {dispatch} = useContext(Context)
  function close() {
    dispatch({action: MainAction.NOTIFICATION_REMOVE, uID})
  }

  return (
    <CSS.NotificationContainer $time={life}>
      <CSS.Error>
        <ErrorIcon SVG={CSS.NotificationSVG} />
        <CSS.NotificationLabel>
          <CSS.NotificationTitle>Błąd</CSS.NotificationTitle>
          <span>{text}</span>
        </CSS.NotificationLabel>
        <CloseIcon SVG={CSS.NotificationCloseButton} onClick={close} />
      </CSS.Error>
    </CSS.NotificationContainer>
  )
}

export default ErrorNotification
