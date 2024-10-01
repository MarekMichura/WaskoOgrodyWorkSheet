import {useContext} from 'react'

import {MainAction} from '/global/MAIN_ACTION'
import CloseIcon from '/Icon/CloseIcon'
import ErrorIcon from '/Icon/ErrorIcon'
import Context from '/MContext'

import * as CSS from '../css'
import {INotificationProps} from '../type/INotification'

function ErrorNotification({life, text, uID}: INotificationProps) {
  const {dispatch} = useContext(Context)
  function close() {
    dispatch({action: MainAction.NOTIFICATION_REMOVE, uID})
  }

  return (
    <CSS.NotificationContainer $time={life}>
      <CSS.Error>
        <ErrorIcon cssSVG={CSS.NotificationSVG} />
        <CSS.NotificationLabel>
          <CSS.NotificationTitle>Błąd</CSS.NotificationTitle>
          <span>{text}</span>
        </CSS.NotificationLabel>
        <CloseIcon cssSVG={CSS.NotificationCloseButton} onClick={close} />
      </CSS.Error>
    </CSS.NotificationContainer>
  )
}

export default ErrorNotification
