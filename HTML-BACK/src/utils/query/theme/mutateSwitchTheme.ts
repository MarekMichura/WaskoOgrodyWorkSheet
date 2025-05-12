import {useMutation, useQueryClient} from '@tanstack/react-query'

import {clientChangeTheme} from '@/utils/action/theme/clientChangeTheme'
import {EQueries} from '@/utils/type/EQueries'
import {type EThemeValues} from '@/utils/type/EThemes'

export function useMutateChangeTheme() {
  const client = useQueryClient()

  return useMutation<EThemeValues>({
    mutationKey: EQueries.theme,
    networkMode: 'always',
    mutationFn: async () => {
      return await clientChangeTheme()
    },
    onSuccess: (theme) => {
      client.setQueryData(EQueries.theme, theme)
    },
  })
}
