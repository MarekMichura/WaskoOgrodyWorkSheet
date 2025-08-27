import s from './css.module.scss'
import {type IHomeTitleHeaderProps} from './IHomeTitleHeaderProps'

function HomeTitlesHeader({desc, title}: IHomeTitleHeaderProps) {
  return (
    <>
      <div className={s.title}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </>
  )
}

export default HomeTitlesHeader
