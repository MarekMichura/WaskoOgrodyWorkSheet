import {useState} from 'react'

import {generateUID} from '../../utils/common/generateUID'
import {removeKey} from '../../utils/common/removeID'

import styles from './button.module.scss'
import {buttonProps} from './type/_buttonProps'
import {rippleProps} from './type/_rippleProps'

const ripple_life_time = 1_000
const {container, ripple} = styles
function Button({onClick, children, text, className, ...props}: buttonProps) {
  const [tab, setTab] = useState<rippleProps[]>([])
  const button = `${container} ${className}`

  function click(e: React.MouseEvent<HTMLButtonElement>) {
    if (onClick) onClick(e)
    const key = generateUID()
    const rect = (e.target as HTMLElement).getBoundingClientRect()
    const ripple: rippleProps = {left: `${e.clientX - rect.left}px`, top: `${e.clientY - rect.top}px`, key}

    setTab((tab) => [...tab, ripple])
    setTimeout(() => setTab((state) => removeKey(state, key)), ripple_life_time)
  }

  return (
    <button onClick={click} className={button} {...props}>
      {children ?? text}
      {tab.map(({key, top, left}) => (
        <span key={key} className={ripple} style={{'--top': top, '--left': left}} />
      ))}
    </button>
  )
}

export default Button
