import {useContext} from 'react'

import CloseIcon from '/Common/Icon/CloseIcon'
import SuccessIcon from '/Common/Icon/SuccessIcon'
import {MainAction} from '/global/MAIN_ACTION'
import Context from '/MContext'

import * as CSS from '../css'
import {INotificationProps} from '../type/INotification'

function SuccessNotification({life, text, uID}: INotificationProps) {
  const {dispatch} = useContext(Context)
  function close() {
    dispatch({action: MainAction.NOTIFICATION_REMOVE, uID})
  }

  return (
    <CSS.NotificationContainer $time={life}>
      <CSS.Success>
        <SuccessIcon cssSVG={CSS.NotificationSVG} />
        <CSS.NotificationLabel>
          <CSS.NotificationTitle>Sukces</CSS.NotificationTitle>
          <span>{text}</span>
        </CSS.NotificationLabel>
        <CloseIcon cssSVG={CSS.NotificationCloseButton} onClick={close} />
      </CSS.Success>
    </CSS.NotificationContainer>
  )
}

export default SuccessNotification
