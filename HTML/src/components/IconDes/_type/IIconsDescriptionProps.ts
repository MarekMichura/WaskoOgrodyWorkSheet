import {type IIconDescriptionProps} from './IIconDescriptionProps'

export interface IIconsDescriptionProps extends React.HTMLProps<HTMLElement> {
  title: string

  icon1: Omit<IIconDescriptionProps, 'nr'>
  icon2: Omit<IIconDescriptionProps, 'nr'>
  icon3: Omit<IIconDescriptionProps, 'nr'>
}
