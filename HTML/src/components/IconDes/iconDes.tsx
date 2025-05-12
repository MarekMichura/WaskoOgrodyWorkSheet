import {type IIconDescriptionProps} from './_type/IIconDescriptionProps'
import s from './css.module.scss'

function IconDescription({icon, description, title, nr}: IIconDescriptionProps) {
  return (
    <>
      <div style={{gridArea: `icon${nr}`}} className={s.icon}>
        {icon}
      </div>
      <h2 style={{gridArea: `title${nr}`}} className={s.iconTitle}>
        {title}
      </h2>
      <p style={{gridArea: `content${nr}`}} className={s.iconDes}>
        {description}
      </p>
    </>
  )
}

export default IconDescription
