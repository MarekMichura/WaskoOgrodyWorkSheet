import {Field, ErrorMessage} from 'formik'

import {inputProps} from './_inputProps'
import styles from './input.module.scss'

const {container, icon, info, error, input} = styles
function Input({Icon, label, className, ...props}: inputProps) {
  const name = props.name
  const field = className ? `${className} ${input}` : input

  return (
    <div className={container}>
      {Icon && <div className={icon}>{Icon}</div>}
      <Field placeholder="" id={name} className={field} {...props} />
      <label className={info} htmlFor={name}>
        {label}
      </label>
      <ErrorMessage className={error} name={name} component="span" />
    </div>
  )
}

export default Input
