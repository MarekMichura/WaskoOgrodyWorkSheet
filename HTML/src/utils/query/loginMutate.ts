import {useMutation, useQueryClient} from '@tanstack/react-query'
import {useRouter} from 'next/navigation'
import toast from 'react-hot-toast'
import factory from 'wretch'

import {EQuery} from '@/utils/type/common/EQuery'

import {URL_MAP} from '../type/api/apiUrl.client'
import {IResponseAuthenticate} from '../type/api/auth/IResponseAuthenticate'

import {IMutateLoginInput} from './IMutateLoginInput'

export function useMutationLogin() {
  const client = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationKey: EQuery.theme,
    networkMode: 'always',

    onMutate: () => {
      const loadingID = toast.loading('Rozpoczęto logowanie', {duration: Infinity})
      return {loadingID}
    },
    mutationFn: ({userName, password}: IMutateLoginInput) => {
      return factory(URL_MAP.AUTHENTICATE) //
        .post({UserName: userName, Password: password})
        .res((a) => a.json() as unknown as IResponseAuthenticate)
    },
    onError: (_data, _variables, context) => {
      toast.error('Błąd z serwerem', {id: context?.loadingID, duration: undefined})
    },
    onSuccess(data, variables, context) {
      if (data?.authenticated) {
        toast.success('Zalogowano poprawnie', {id: context.loadingID, duration: undefined})
        client.setQueryData(EQuery.profil, data.profile)
        router.replace(variables.redirect)
      } else {
        toast.error('Błędny login lub hasło', {id: context.loadingID, duration: undefined})
      }
    },
  })
}
