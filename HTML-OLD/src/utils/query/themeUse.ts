import {DefinedInitialDataOptions, useSuspenseQuery} from '@tanstack/react-query'

import {getThemeClient} from '../theme/client/getThemeClient'
import {EQuery} from '../type/common/EQuery'
import {ITheme} from '../type/common/iTheme'

export function useTheme(options?: DefinedInitialDataOptions<ITheme>) {
  const query = useSuspenseQuery<ITheme>({
    queryKey: EQuery.theme,
    enabled: false,
    gcTime: Infinity,
    staleTime: Infinity,
    notifyOnChangeProps: ['data'],
    queryFn: () => {
      const {theme} = getThemeClient()
      return theme
    },

    ...options,
  })

  return {query, theme: query.data}
}
