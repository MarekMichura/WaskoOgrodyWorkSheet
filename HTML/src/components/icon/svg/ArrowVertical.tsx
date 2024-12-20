import {iconChangeProps} from '../_iconProps'
import Icon from '../icon'

function ArrowVerticalIcon(props: iconChangeProps) {
  const p = {...props, style: {...props.style, Transform: 'rotateX(180%)'}}

  return (
    <Icon {...p}>
      <path d="M480-305 200-586l95-94 185 185 186-185 95 94-281 281Z" />
    </Icon>
  )
}

export default ArrowVerticalIcon
