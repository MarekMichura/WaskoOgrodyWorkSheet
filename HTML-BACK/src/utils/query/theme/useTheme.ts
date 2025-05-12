import {useSuspenseQuery, type DefinedInitialDataOptions} from '@tanstack/react-query'

import {clientGetTheme} from '@/utils/action/theme/clientGetTheme'
import {EQueries} from '@/utils/type/EQueries'
import {type EThemeValues} from '@/utils/type/EThemes'

export function useTheme(opt?: DefinedInitialDataOptions<EThemeValues>) {
  const query = useSuspenseQuery<EThemeValues>({
    queryKey: EQueries.theme,
    gcTime: Infinity,
    staleTime: Infinity,
    notifyOnChangeProps: ['data'],
    queryFn: async () => {
      return await clientGetTheme()
    },

    ...opt,
  })

  return {query, theme: query.data}
}
