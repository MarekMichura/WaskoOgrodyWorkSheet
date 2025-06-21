import {forwardRef, useCallback, useState} from 'react'

import {clsx} from '@/utils/func/clsx'

import s from './css.module.scss'
import {type ISectionElementProps} from './_type/ISectionElementProps'

const SectionElement = forwardRef<HTMLElement, ISectionElementProps>(({Icon, text, title, className}, ref) => {
  const [state, setState] = useState(false)

  const enter = useCallback(() => {
    setState(true)
  }, [])
  const leave = useCallback(() => {
    setState(false)
  }, [])

  return (
    <section className={clsx(s.element, className)} ref={ref}>
      <div className={s.content} onMouseEnter={enter} onMouseLeave={leave}>
        <div className={s.elementIcon}>{<Icon status={state} />}</div>
        <h1 className={s.elementTitle}>{title}</h1>
        <p className={s.elementText}>{text}</p>
      </div>
    </section>
  )
})

SectionElement.displayName = 'SectionElement'
export default SectionElement
