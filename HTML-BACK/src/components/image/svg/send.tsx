import {type IIconProps} from '../_type/IIconProps'
import Icon from '../icon'

function SendIcon(p: IIconProps) {
  return (
    <Icon {...p}>
      <path d="M81-121v-721l848 361L81-121Zm114-173 441-188-441-187v111l261 76-261 77v111Zm0 0v-375 375Z" />
    </Icon>
  )
}

export default SendIcon
