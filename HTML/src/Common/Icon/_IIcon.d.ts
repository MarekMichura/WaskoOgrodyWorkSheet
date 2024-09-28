import {FastOmit} from 'styled-components'
import {IStyledComponentBase} from 'styled-components/dist/types'

export interface IIcon extends React.SVGProps<SVGSVGElement> {
  SVG?: IStyledComponentBase<'web', FastOmit<React.SVGProps<SVGSVGElement>, never>>
}
