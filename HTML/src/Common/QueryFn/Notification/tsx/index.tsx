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
      {data!.map((notification) => {
        return (
          <Notification
            key={notification.id}
            id={notification.id}
            text={notification.text}
            type={notification.type}
            life={notification.life}
          />
        )
      })}
    </CSS.Container>
  )
}

const DEFAULT_LIFE = 10000

const Notification = ({id, text, type, life}: INotificationProps) => {
  const {mutationNotificationRemove} = useNotification()

  useEffect(() => {
    const time = setTimeout(() => mutationNotificationRemove.mutate(id), (life ?? DEFAULT_LIFE) + 1000)
    return () => clearTimeout(time)
  }, [id, life, mutationNotificationRemove])

  const Icon = NotificationIcon[type]
  const title = NotificationTitle[type]
  return (
    <CSS.Notification style={{animationDelay: `${life ?? DEFAULT_LIFE}ms`}}>
      <CSS.Content data-type={type}>
        <Icon cssSVG={CSS.SVG} />
        <CSS.Label>
          <CSS.Title>{title}</CSS.Title>
          <span>
            {text.split('\n').map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </span>
        </CSS.Label>
        <CloseIcon onClick={() => mutationNotificationRemove.mutate(id)} cssSVG={CSS.CloseSVG} />
      </CSS.Content>
    </CSS.Notification>
  )
}
