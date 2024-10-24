import {createElement} from 'react'
import {FastOmit} from 'styled-components'
import {IStyledComponentBase} from 'styled-components/dist/types'

const xmlns = 'http://www.w3.org/2000/svg'
export interface IIcon extends React.SVGProps<SVGSVGElement> {
  cssSVG?: IStyledComponentBase<'web', FastOmit<React.SVGProps<SVGSVGElement>, never>>
}

export const defAnimate = {
  begin: 'indefinite',
  fill: 'freeze',
  attributeName: 'd',
  dur: '500ms',
}

export interface IChangeMenu extends IIcon {
  status?: boolean
}

export const Icon = ({cssSVG: CssSVG, children: path, ...svgProps}: IIcon) => {
  const viewBox = svgProps.viewBox ?? '0 -960 960 960'
  const props = {...svgProps, viewBox, xmlns}

  if (CssSVG === undefined) return createElement('svg', props, path)
  return <CssSVG {...props}>{path}</CssSVG>
}
