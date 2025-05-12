import {useQueryClient, useSuspenseQuery, type DefinedInitialDataOptions} from '@tanstack/react-query'
import {useLocale} from 'next-intl'
import {useLayoutEffect} from 'react'

import {ECookies} from '@/utils/enums/ECookies'
import {EHtmlAttribute} from '@/utils/enums/EHtmlAttribute'
import {EQueries} from '@/utils/enums/EQueries'
import {EThemes, type EThemeValues} from '@/utils/enums/EThemes'
import {getCookieClient} from '@/utils/oneLine/cookie/clientGetCookie'
import {isInPrimitiveArray} from '@/utils/oneLine/isInPrimitiveArray'

export function useTheme(opt?: DefinedInitialDataOptions<EThemeValues>) {
  const locale = useLocale()
  const client = useQueryClient()

  useLayoutEffect(() => {
    const theme = client.getQueryData<EThemeValues>(EQueries.theme)!
    document.documentElement.setAttribute(EHtmlAttribute.theme, theme)
  }, [client, locale])

  const query = useSuspenseQuery<EThemeValues>({
    queryKey: EQueries.theme,
    gcTime: Infinity,
    staleTime: Infinity,
    notifyOnChangeProps: ['data'],

    queryFn: function () {
      if (typeof window === 'undefined') return EThemes.dark
      const currentTheme = getCookieClient(ECookies.theme)
      const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? EThemes.dark : EThemes.light

      if (isInPrimitiveArray(currentTheme, Object.values(EThemes))) return currentTheme
      return defaultTheme
    },
    ...opt,
  })

  return {query, theme: query.data}
}
