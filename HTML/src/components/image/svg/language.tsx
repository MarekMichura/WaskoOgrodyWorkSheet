import {type IIconProps} from '../_type/IIconProps'
import Icon from '../icon'

function LanguageIcon(p: IIconProps) {
  return (
    <Icon {...p} viewBox="0 0 24 24" role="img" fill="transparent" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter">
      <title id="languageIconTitle">Language</title>
      <circle cx="12" cy="12" r="10" />
      <path
        strokeLinecap="round"
        d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"
      />
      <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15" />
    </Icon>
  )
}



export default LanguageIcon

