import {type ILocale} from '@/locale/routing'

export const ELang = {
  'en-US': 'en',
  'pl-PL': 'pl',
} as const satisfies Record<ILocale, string>
