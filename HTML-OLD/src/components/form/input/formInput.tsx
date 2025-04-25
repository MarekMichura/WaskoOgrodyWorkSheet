import s from './cssFormInput.module.scss'
import {IFormInputProps} from './IFormInputProps'

function FormInput({Icon, label, error, className, ...props}: IFormInputProps) {
  const container = s.container + (className ? ' ' + className : '')

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
