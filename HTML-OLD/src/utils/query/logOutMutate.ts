import {useMutation, useQueryClient} from '@tanstack/react-query'
import {usePathname, useRouter} from 'next/navigation'
import toast from 'react-hot-toast'
import factory from 'wretch'

import {EQuery} from '@/utils/type/common/EQuery'

import {setCookieClient} from '../clientCookie/setCookie'
import {URL_MAP} from '../type/api/apiUrl.client'
import {ECookieNames} from '../type/common/ECookiesNames'

export function useMutationLogOut() {
  const client = useQueryClient()
  const pathname = usePathname()
  const router = useRouter()

  return useMutation({
    mutationKey: EQuery.theme,
    networkMode: 'always',

    onMutate: () => {
      const loadingID = toast.loading('Rozpoczęto logowanie', {duration: Infinity})
      return {loadingID}
    },
    mutationFn: () => {
      return factory(URL_MAP.LOG_OUT) //
        .post()
        .res()
    },
    onError: (_data, _variables, context) => {
      toast.error('Coś poszło nie tak', {id: context?.loadingID, duration: undefined})
    },
    onSuccess(_data, _variables, context) {
      toast.success('Wylogowano poprawnie', {id: context.loadingID, duration: undefined})
    },
    onSettled() {
      setCookieClient(ECookieNames.identity, '', new Date())
      router.replace(`/login?redirect=${pathname}&my=true`)
      client.clear()
    },
  })
}
