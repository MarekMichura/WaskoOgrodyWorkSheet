import {useMutation, useQueryClient} from '@tanstack/react-query'

import {ECookies} from '@/utils/enums/ECookies'
import {EHtmlAttribute} from '@/utils/enums/EHtmlAttribute'
import {EQueries} from '@/utils/enums/EQueries'
import {EThemes, type EThemeValues} from '@/utils/enums/EThemes'
import {clientSetCookie} from '@/utils/oneLine/cookie/clientSetCookie'

export function useMutateChangeTheme() {
  const client = useQueryClient()

  return useMutation<EThemeValues>({
    mutationKey: EQueries.theme,
    networkMode: 'always',

    mutationFn: async function () {
      const theme = client.getQueryData<EThemeValues>(EQueries.theme)!

      if (theme === EThemes.dark) return EThemes.light
      return EThemes.dark
    },
    onSuccess: (theme) => {
      client.setQueryData(EQueries.theme, theme)
    },
    onSettled: (theme) => {
      if (!theme) return

      clientSetCookie(ECookies.theme, theme)
      document.documentElement.setAttribute(EHtmlAttribute.theme, theme)
    },
  })
}
