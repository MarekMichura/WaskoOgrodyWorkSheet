import {useContext} from 'react'
import CloseIcon from '/Common/Icon/CloseIcon'
import InfoIcon from '/Common/Icon/InfoIcon'
import * as CSS from '../css'
import {INotificationProps} from '../type/INotification'
import Context from '../type/Context'
import {MainAction} from '../global/ACTION'

function InfoNotification({life, text, uID}: INotificationProps) {
  const {dispatch} = useContext(Context)
  function close() {
    dispatch({action: MainAction.NOTIFICATION_REMOVE, uID})
  }

  return (
    <CSS.NotificationContainer $time={life}>
      <CSS.Info>
        <InfoIcon SVG={CSS.NotificationSVG} />
        <CSS.NotificationLabel>
          <CSS.NotificationTitle>Informacja</CSS.NotificationTitle>
          <span>{text}</span>
        </CSS.NotificationLabel>
        <CloseIcon SVG={CSS.NotificationCloseButton} onClick={close} />
      </CSS.Info>
    </CSS.NotificationContainer>
  )
}

export default InfoNotification
