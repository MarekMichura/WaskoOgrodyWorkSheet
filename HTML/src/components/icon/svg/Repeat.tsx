import {iconChangeProps} from '../_iconProps'
import Icon from '../icon'

function RepeatIcon(props: iconChangeProps) {
  const p = {...props, style: {...props.style, Transform: 'rotateX(180%)'}}
  return (
    <Icon {...p}>
      <path d="M480.21-25Q396-25 321.53-57.1q-74.48-32.1-129.57-87.05-55.09-54.94-87.03-128.9Q73-347 73-431h136q0 112.99 78.8 191.49Q366.6-161 480-161q112.99 0 191.49-78.8Q750-318.6 750-432q0-112.99-78.8-191.49Q592.4-702 479-702h-5l54 53-74 77-198-198 198-197 74 77-53 52h4q84.11 0 158.31 32.02 74.2 32.01 129.93 87.24 55.73 55.23 87.74 129.13Q887-515.71 887-431.94q0 83.77-32.02 158.11-32.01 74.34-87.24 129.57-55.23 55.23-129.36 87.24Q564.25-25 480.21-25Z" />
    </Icon>
  )
}

export default RepeatIcon
