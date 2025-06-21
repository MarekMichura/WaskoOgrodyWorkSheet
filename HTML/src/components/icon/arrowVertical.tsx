import s from '../lottie/css.module.scss'

function ArrowVerticalIcon() {
  return (
    <svg className={s.svg} viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" style={{rotate: '180deg'}}>
      <path d="M480-305 200-586l95-94 185 185 186-185 95 94-281 281Z" />
    </svg>
  )
}

export default ArrowVerticalIcon
