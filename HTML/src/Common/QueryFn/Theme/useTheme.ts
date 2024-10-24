import {useQuery, useMutation} from '@tanstack/react-query'

import {fnMutation} from './fnMutation'
import {fnQuery} from './fnQuery'
import {ITheme} from './types/ITheme'

export const LS_THEME_NAME = 'theme'

export const useTheme = () => {
  const theme = useQuery<ITheme>({
    queryKey: ['Theme'],
    queryFn: fnQuery,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  })

  const mutation = useMutation<ITheme, Error, ITheme>({
    mutationFn: fnMutation,
    onSuccess: () => {
      theme.refetch()
    },
  })

  const setTheme = (newTheme: ITheme) => {
    mutation.mutate(newTheme)
  }

  const changeTheme = () => {
    mutation.mutate(theme.data == ITheme.THEME_DARK ? ITheme.THEME_LIGHT : ITheme.THEME_DARK)
  }

  return {...theme, setTheme, changeTheme}
}
