import {iconChangeProps} from '../_iconProps'
import Icon from '../icon'

function UmbrellaIcon(props: iconChangeProps) {
  const p = {...props, style: {...props.style, Transform: 'rotateX(180%)'}}
  return (
    <Icon {...p}>
      <path d="M805-67 534-337l95-97 271 271-95 96Zm-587-39Q84-237 64-408.5T141-717q-10 46 10 105t56 120.5Q243-430 288.5-371T376-265L218-106Zm220-220q-58-59-104-122t-73.5-119q-27.5-56-35-99.5T237-729q19-19 60.5-12.5t96 34Q448-680 512-634t128 106L438-326Zm264-264q-48-41-107-86.5t-121-82Q412-795 353-815t-105-10q137-97 309-76t301 154L702-590Z" />
    </Icon>
  )
}

export default UmbrellaIcon
