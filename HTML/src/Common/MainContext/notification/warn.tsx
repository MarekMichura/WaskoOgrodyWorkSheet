import {useContext} from 'react'
import CloseIcon from '/Common/Icon/CloseIcon'
import WarnIcon from '/Common/Icon/WarnIcon'
import * as CSS from '../css'
import {INotificationProps} from '../type/INotification'
import {MainAction} from '../global/ACTION'
import Context from '../type/Context'

function WarnNotification({life, text, uID}: INotificationProps) {
  const {dispatch} = useContext(Context)
  function close() {
    dispatch({action: MainAction.NOTIFICATION_REMOVE, uID})
  }

  return (
    <CSS.NotificationContainer $time={life}>
      <CSS.Warn>
        <WarnIcon SVG={CSS.NotificationSVG} />
        <CSS.NotificationLabel>
          <CSS.NotificationTitle>Ostrzerzenie</CSS.NotificationTitle>
          <span>{text}</span>
        </CSS.NotificationLabel>
        <CloseIcon SVG={CSS.NotificationCloseButton} onClick={close} />
      </CSS.Warn>
    </CSS.NotificationContainer>
  )
}

export default WarnNotification
