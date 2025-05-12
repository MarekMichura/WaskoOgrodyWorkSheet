import {EThemes} from '@/utils/enums/EThemes'
import {useTheme} from '@/utils/query/theme/useTheme'

import s from '../css.module.scss'

function LoadThemeIcon() {
  const {theme} = useTheme()

  return theme === EThemes.dark ? (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 430 430" className={s.svgColors}>
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="18"
        clipPath="url(#04a15d39-dd3f-47ca-adc1-6ee88f5ac750)">
        <path
          stroke="rgb(255,255,255)"
          d="m277.733 180.212 31.866 14.384-31.866 14.485-15.484 31.866-15.383-31.866L215 194.596l31.866-14.384 15.383-31.866zm46.692 124.345 22.824 10.402-22.824 10.402-11.109 22.925-11.108-22.925-22.925-10.402 22.925-10.402 11.108-22.924zm41.03-226.803 22.563 10.238-22.563 10.237-10.934 22.564-10.933-22.564-22.464-10.237 22.464-10.238 10.933-22.564z"
        />
        <path
          stroke="rgb(0,0,0)"
          d="M255.399 365.843c-16.389 6.296-34.079 9.694-52.667 9.694-81.35 0-147.409-65.96-147.409-147.409 0-81.45 65.959-147.409 147.409-147.409 18.588 0 36.278 3.398 52.667 9.694-55.365 21.187-94.741 74.854-94.741 137.715s39.376 116.428 94.741 137.715"
        />
      </g>
      <defs>
        <clipPath id="04a15d39-dd3f-47ca-adc1-6ee88f5ac750">
          <path fill="rgb(255,255,255)" d="M0 0h430v430H0z" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 430 430" className={s.svgColors}>
      <path
        stroke="rgb(255,255,255)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="18"
        d="M215.1 301.1c47.496 0 86-38.504 86-86s-38.504-86-86-86-86 38.504-86 86 38.503 86 86 86m0-207.6V55m-86 74.1L83 83m10.5 132.1H55m74.1 86L83 347.2m132.1-10.4v38.4m86-74.1 46.1 46.1m-10.4-132.1h38.4m-74.1-86L347.2 83"
      />
    </svg>
  )
}

export default LoadThemeIcon
