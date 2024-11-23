import {useMutation, useQueryClient} from '@tanstack/react-query'

import {queryKeys} from '/query/keys'

import {themeQueryData} from './_themeQuery'
import {getDefaultTheme} from './fun/getDefault'

export function useMutationChangeTheme() {
  const client = useQueryClient()
  return useMutation<themeQueryData>({
    mutationKey: queryKeys.theme,
    networkMode: 'always',
    mutationFn: () => {
      return new Promise<themeQueryData>((resolve) => {
        const oldTheme = client.getQueryData<themeQueryData>(queryKeys.theme)
        switch (oldTheme) {
          case 'dark':
            return resolve('light')
          case 'light':
            return resolve('dark')
          default:
            return resolve(getDefaultTheme())
        }
      })
    },
    onSuccess: (theme) => {
      client.setQueryData(queryKeys.theme, theme)
    },
  })
}
