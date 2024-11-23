import {iconChangeProps} from '../_iconProps'
import Icon from '../icon'

function CommentIcon(props: iconChangeProps) {
  const p = {...props, style: {...props.style, Transform: 'rotateX(180%)'}}
  return (
    <Icon {...p}>
      <path d="M480-34 354-219H170q-57 0-96.5-39.5T34-355v-435q0-57 39.5-96.5T170-926h620q57 0 96.5 39.5T926-790v435q0 57-39.5 96.5T790-219H606L480-34Z" />
    </Icon>
  )
}

export default CommentIcon
