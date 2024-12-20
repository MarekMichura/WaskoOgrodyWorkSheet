import {iconChangeProps} from '../_iconProps'
import Icon from '../icon'

const dark =
  'M479.82-100q-158.17 0-269-110.82Q100-321.65 100-479.82 100-638 210.88-749.5 321.75-861 480-861q10 0 20 .5t22 2.5q-29 36-43 77.5T465-701q0 96.08 68.54 166.54T705-464q44 0 82.5-15t71.5-42q1 10 1.5 21.71.5 11.7.5 18.29 0 158-111.5 269.5T479.82-100Z'

const light =
  'M480-275q-85 0-145-60t-60-145q0-85 60-145t145-60q85 0 145 60t60 145q0 85-60 145t-145 60ZM228-412H12v-136h216v136Zm720 0H732v-136h216v136ZM412-732v-216h136v216H412Zm0 720v-216h136v216H412ZM255-609 116-745l95-100 137 137-93 99Zm494 494L612-252l92-97 140 134-95 100ZM611-704l134-140 100 95-137 137-97-92ZM115-211l137-137 97 92-134 140-100-95Z'

function ThemeModeIcon({status, ...props}: iconChangeProps) {
  const p = {...props}

  return (
    <Icon {...p}>
      <path d={status ? dark : light} />
    </Icon>
  )
}

export default ThemeModeIcon
