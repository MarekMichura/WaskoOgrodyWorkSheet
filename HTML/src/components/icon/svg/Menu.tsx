import {useRef, useEffect} from 'react'

import {iconChangeProps} from '../_iconProps'
import {defAnimate} from '../defaultAnimate'
import Icon from '../icon'

const pathOpen = `
  M74-194L74-328L627-328L627-194L74-194Z
  M793-240L560-480L793-720L886-625L749-480L886-334L793-240Z
  M74-413L74-547L512-547L512-413L74-413Z
  M74-632L74-766L627-766L627-632L74-632Z
`
const pathClose = `
  M74-194L74-328L886-328L886-194L74-194Z
  M886-240L886-480L886-720L886-625L886-480L886-334L886-240Z
  M74-413L74-547L886-547L886-413L74-413Z
  M74-632L74-766L886-766L886-632L74-632Z
`

function MenuIcon({status, ...p}: iconChangeProps) {
  const animationOpen = useRef<SVGAnimateElement>(null)
  const animationClose = useRef<SVGAnimateElement>(null)

  useEffect(() => {
    if (status) animationOpen.current?.beginElement()
    else animationClose.current?.beginElement()
  }, [status, animationClose, animationOpen])

  return (
    <Icon {...p}>
      <path d={pathClose}>
        <animate {...defAnimate} ref={animationClose} to={pathClose} />
        <animate {...defAnimate} ref={animationOpen} to={pathOpen} />
      </path>
    </Icon>
  )
}

export default MenuIcon
