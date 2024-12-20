import {iconChangeProps} from '../_iconProps'
import Icon from '../icon'

function HourGlassIcon(props: iconChangeProps) {
  const p = {...props, style: {...props.style, Transform: 'rotateX(180%)'}}
  return (
    <Icon {...p}>
      <path d="M328-170h304v-108.06q0-62.94-44.74-105.44Q542.53-426 480-426q-62.52 0-107.26 42.5T328-278.06V-170Zm152-364q62.53 0 107.26-42.5Q632-619 632-681.94V-790H328v108.06q0 62.94 44.74 105.44T480-534ZM114-34v-136h78v-108q0-57 21-108.5t60-93.5q-39-42-60-93.5T192-682v-108h-78v-136h732v136h-78v108q0 57-20.5 108.5T687-480q40 42 60.5 93.5T768-278v108h78v136H114Zm366-136Zm0-620Z" />
    </Icon>
  )
}

export default HourGlassIcon
