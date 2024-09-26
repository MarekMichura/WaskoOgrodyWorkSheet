import {FastOmit} from 'styled-components'
import {IStyledComponentBase} from 'styled-components/dist/types'

export default interface IIcon extends React.SVGProps<SVGSVGElement> {
  svg?: IStyledComponentBase<
    'web',
    FastOmit<React.SVGProps<SVGSVGElement>, never>
  >
}
