import s from '../lottie/css.module.scss'

function ArrowIcon() {
  return (
    <svg className={s.svg} viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg" style={{rotate: '180deg'}}>
      <path d="M287-55 180-161l319-319-319-319 107-107 425 426L287-55Z" />
    </svg>
  )
}

export default ArrowIcon
