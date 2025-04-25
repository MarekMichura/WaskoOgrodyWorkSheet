'use client'

import {useMemo} from 'react'

import {type IFormInputProps} from './_type/IFormInputProps'
import s from './css.module.scss'

function FormInput({className, Icon, label, error, ...props}: IFormInputProps) {
  const container = useMemo(() => s.container + (className ? ` ${className}` : ''), [className])

  return (
    <div className={container}>
      {Icon && <div className={s.icon}>{Icon}</div>}
      <input id={props.name} className={s.input} placeholder="" {...props} />
      <label className={s.info} htmlFor={props.name}>
        {label}
      </label>
      <span className={s.error}>{error}</span>
    </div>
  )
}

export default FormInput
