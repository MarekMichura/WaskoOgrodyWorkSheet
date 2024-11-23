import {NotifyOnChangeProps, useQuery} from '@tanstack/react-query'

import {queryKeys} from '../keys'

import {themeQueryData} from './_themeQuery'
import {getDefaultTheme} from './fun/getDefault'

export function useTheme(changeProps?: NotifyOnChangeProps) {
  return useQuery<themeQueryData>({
    queryKey: queryKeys.theme,
    enabled: false,
    initialData: getDefaultTheme(),
    notifyOnChangeProps: changeProps,
  })
}
