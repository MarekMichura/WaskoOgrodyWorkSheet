import {type Metadata} from 'next'

import {type ILocale} from '@/locale/routing'

import {metadataEN} from './metadataEN'
import {metadataPL} from './metadataPL'

export const switchMetadata: Record<ILocale, Metadata> = {
  'en-US': metadataEN,
  'pl-PL': metadataPL,
} as const
