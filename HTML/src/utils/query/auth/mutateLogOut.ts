'use client'

import {useMutation, useQueryClient} from '@tanstack/react-query'
import {usePathname, useRouter} from 'next/navigation'

import {customToast} from '@/components/toast/toast'
import {EToast} from '@/components/toast/type/EToast'
import {logOut} from '@/utils/action/user/logOut'
import clientSetCookie from '@/utils/cookie/clientSetCookie'
import {useTranslations} from '@/utils/locale/_help/useTranslations'
import {ECookies} from '@/utils/type/ECookies'
import {EQueries} from '@/utils/type/EQueries'

const TOAST_ID = 'MUTATE_LOGOUT_ID' as const
export function useMutateLogOut() {
  const client = useQueryClient()
  const t = useTranslations('logout')
  const route = useTranslations('route')
  const pathname = usePathname()
  const router = useRouter()

  return useMutation({
    mutationKey: EQueries.profil,
    networkMode: 'always',
    onMutate: () => {
      customToast(t('loading'), EToast.loading, {id: TOAST_ID})
    },
    mutationFn: async () => {
      clientSetCookie(ECookies.identity, 'Jedynki')
      await logOut()
    },
    onSuccess: () => {
      router.push(`${route('login')}?redirect=${pathname}&my=true`)
      client.removeQueries({queryKey: EQueries.profil})
      customToast(t('success'), EToast.success, {id: TOAST_ID})
    },
    onError: () => {
      customToast(t('logout'), EToast.success, {id: TOAST_ID})
    },
  })
}
