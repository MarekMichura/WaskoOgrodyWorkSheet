import s from '../css.module.scss'

function LoadMenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 430 430" className={s.svgColors}>
      <g strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="18">
        <path stroke="rgb(255,255,255)" d="M197.658 72h-130v130h130z" />
        <path stroke="rgb(0,0,0)" d="M362.658 72h-130v130h130zm0 165h-130v130h130zm-165 0h-130v130h130z" />
      </g>
    </svg>
  )
}

export default LoadMenuIcon
