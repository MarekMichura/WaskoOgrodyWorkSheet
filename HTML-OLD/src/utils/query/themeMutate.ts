import {useMutation, useQueryClient} from '@tanstack/react-query'

import {EQuery} from '@/utils/type/common/EQuery'
import {ITheme} from '@/utils/type/common/iTheme'

import {updateThemeClient} from '../theme/client/updateThemeClient'

export function useMutationTheme() {
  const client = useQueryClient()

  return useMutation<ITheme>({
    mutationKey: EQuery.theme,
    networkMode: 'always',
    mutationFn: () => {
      return new Promise<ITheme>((res) => {
        const theme = updateThemeClient()
        res(theme)
      })
    },
    onSuccess: (theme) => {
      client.setQueryData(EQuery.theme, theme)
    },
  })
}
