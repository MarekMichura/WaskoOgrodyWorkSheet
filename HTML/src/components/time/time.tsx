import {ErrorMessage, useField} from 'formik'
import {useEffect} from 'react'

import {timeInputProps} from './_timeInputProps'
import styles from './time.module.scss'

const {container, icon, info, error, data} = styles
export function TimeInput({startHour, startMinute, className, label, name, Icon}: timeInputProps) {
  const con = className ? `${className} ${container}` : container
  const [hour, hourMeta, hourHelpers] = useField(`${name}.hour`)
  const [minute, minuteMeta, minuteHelpers] = useField(`${name}.minute`)

  useEffect(() => {
    if (hourMeta.touched === minuteMeta.touched && minuteMeta.touched === false) {
      hourHelpers.setValue(startHour)
      minuteHelpers.setValue(startMinute)

      hourHelpers.setTouched(true)
      minuteHelpers.setTouched(true)
    }
  }, [hourHelpers, hourMeta.touched, minuteHelpers, minuteMeta.touched, startHour, startMinute])

  return (
    <div className={con}>
      {Icon && <div className={icon}>{Icon}</div>}
      <label className={info} htmlFor={name}>
        {label}
      </label>
      <div className={data}>
        <div>{hour.value.toString().padStart(2, '0')}</div>
        <div>:</div>
        <div>{minute.value.toString().padStart(2, '0')}</div>
      </div>
      <ErrorMessage className={error} name={name} component="span" />
    </div>
  )
}
