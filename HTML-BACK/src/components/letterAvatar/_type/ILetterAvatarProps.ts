import {type ImageProps} from 'next/image'

export type ILetterAvatarProps = Omit<ImageProps, 'src' | 'alt'>
