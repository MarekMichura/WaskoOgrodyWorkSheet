import Icon from '../icon'
import {IIconProps} from '../IIconProps'

function ArrowIcon(props: IIconProps) {
  const p = {...props, style: {...props.style, Transform: 'rotateX(180%)'}}

  return (
    <Icon {...p}>
      <path d="M287-55 180-161l319-319-319-319 107-107 425 426L287-55Z" />
    </Icon>
  )
}

export default ArrowIcon
