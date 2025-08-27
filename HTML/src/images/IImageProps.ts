import type Image from 'next/image'

export interface IImageProps extends Omit<React.ComponentPropsWithRef<typeof Image>, 'src' | 'alt'> {
  alt?: string
}

export interface ISvgProps extends Omit<React.ComponentPropsWithRef<'svg'>, 'viewBox' | 'alt' | 'xmlns'> {
  alt?: string
}
