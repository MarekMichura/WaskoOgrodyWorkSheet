import {useEffect} from 'react'

import {CloseIcon} from '/Icon/CloseIcon'

import {INotificationProps} from '../types/INotification'
import {NotificationIcon, NotificationTitle} from '../types/NotificationType'
import {useNotification} from '../useNotification'

import * as CSS from './css'

export const Notifications = () => {
  const {data} = useNotification()

  return (
    <CSS.Container>
      {data!.map((a) => {
        return <Notification key={a.id} id={a.id} text={a.text} type={a.type} life={a.life} />
      })}
    </CSS.Container>
  )
}

const Notification = ({id, text, type, life}: INotificationProps) => {
  const {mutationNotificationRemove} = useNotification()

  useEffect(() => {
    const time = setTimeout(() => mutationNotificationRemove.mutate(id), (life ?? 2000) + 1000)
    return () => clearTimeout(time)
  }, [])

  const Icon = NotificationIcon[type]
  const title = NotificationTitle[type]
  return (
    <CSS.Notification style={{animationDelay: `${life ?? 2000}ms`}}>
      <CSS.Content data-type={type}>
        <Icon cssSVG={CSS.SVG} />
        <CSS.Label>
          <CSS.Title>{title}</CSS.Title>
          <span>{text}</span>
        </CSS.Label>
        <CloseIcon onClick={() => mutationNotificationRemove.mutate(id)} cssSVG={CSS.CloseSVG} />
      </CSS.Content>
    </CSS.Notification>
  )
}
