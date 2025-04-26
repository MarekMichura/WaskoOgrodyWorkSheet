'use client'

import {useSuspenseQuery, type DefinedInitialDataOptions} from '@tanstack/react-query'
import {useRouter} from 'next/navigation'

import {type IResponseGetProfile} from '@/utils/action/user/_type/IResponseGetProfile'
import {getProfile} from '@/utils/action/user/getProfil'
import {EQueries} from '@/utils/type/EQueries'

export const defProfilData: IResponseGetProfile = {
  firstName: '',
  lastName: '',
  userName: '',
  workStartDate: '',
  image: '',
  roles: ['Gardener'],
}
export function useProfil(opt?: Partial<DefinedInitialDataOptions<IResponseGetProfile>>) {
  const router = useRouter()

  const query = useSuspenseQuery<IResponseGetProfile>({
    queryKey: EQueries.profil,
    notifyOnChangeProps: ['data'],
    refetchInterval: 30000,
    retryDelay: 50000,
    placeholderData: defProfilData,

    queryFn: async () => {
      const {body, response} = await getProfile()
      if (!response?.ok)
        setTimeout(() => {
          router.refresh()
        }, 1)
      return body ?? defProfilData
    },
    ...opt,
  })

  return {query, profil: query.data}
}
