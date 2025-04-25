import {useMutation, useQueryClient} from '@tanstack/react-query'
import {useRouter} from 'next/navigation'

import {customToast} from '@/components/toast/toast'
import {EToast} from '@/components/toast/type/EToast'
import {auth} from '@/utils/action/user/auth'
import {useTranslations} from '@/utils/locale/_help/useTranslations'
import {EQueries} from '@/utils/type/EQueries'

import {type IMutateAuthDataInput} from './_type/IMutateAuthInput'

const TOAST_ID = 'MUTATE_AUTH_ID' as const
export function useMutateAuth() {
  const client = useQueryClient()
  const router = useRouter()
  const t = useTranslations('login')

  return useMutation({
    mutationKey: EQueries.profil,
    networkMode: 'always',
    mutationFn: async ({userName, password}: IMutateAuthDataInput) => await auth(userName, password),
    onMutate: () => {
      customToast(t('loading'), EToast.loading, {id: TOAST_ID, duration: undefined})
    },
    onError: () => {
      customToast(t('errorServer'), EToast.error, {id: TOAST_ID, duration: undefined})
    },
    onSuccess: ({authenticated, profile}, {redirect}) => {
      if (authenticated) {
        customToast(t('success'), EToast.success, {id: TOAST_ID, duration: undefined})

        client.setQueryData(EQueries.profil, profile)
        router.replace(redirect)
      } else {
        customToast(t('errorAuth'), EToast.error, {id: TOAST_ID, duration: undefined})
      }
    },
  })
}
