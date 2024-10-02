import {useContext} from 'react'

import {MainAction} from '/global/MAIN_ACTION'
import CloseIcon from '/Icon/CloseIcon'
import WarnIcon from '/Icon/WarnIcon'
import Context from '/MContext'

import * as CSS from '../css'
import {INotificationProps} from '../type/INotification'

function WarnNotification({life, text, uID}: INotificationProps) {
  const {dispatch} = useContext(Context)
  function close() {
    dispatch({action: MainAction.NOTIFICATION_REMOVE, uID})
  }

  return (
    <CSS.NotificationContainer $time={life}>
      <CSS.Warn>
        <WarnIcon cssSVG={CSS.NotificationSVG} />
        <CSS.NotificationLabel>
          <CSS.NotificationTitle>Ostrzeżenie</CSS.NotificationTitle>
          <span>{text}</span>
        </CSS.NotificationLabel>
        <CloseIcon cssSVG={CSS.NotificationCloseButton} onClick={close} />
      </CSS.Warn>
    </CSS.NotificationContainer>
  )
}

export default WarnNotification
