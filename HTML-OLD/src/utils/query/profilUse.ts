import {DefinedInitialDataOptions, useSuspenseQuery} from '@tanstack/react-query'
import {useRouter} from 'next/navigation'

import {profilGET} from '../actions/getProfil'
import {IResponseProfile} from '../type/api/profil/responseProfil'
import {EQuery} from '../type/common/EQuery'

export const defProfilData = {firstName: '', lastName: '', userName: '', workStartDate: '', roles: [], image: ''}
export function useProfil(options?: DefinedInitialDataOptions<IResponseProfile>) {
  const router = useRouter()
  const query = useSuspenseQuery<IResponseProfile>({
    queryKey: EQuery.profil,
    notifyOnChangeProps: ['data'],
    refetchInterval: 3000,
    retryDelay: 5000,
    placeholderData: defProfilData,

    queryFn: async () => {
      const {body, response} = await profilGET()
      if (!response.ok) setTimeout(() => router.refresh(), 1)
      return body ?? defProfilData
    },
    ...options,
  })

  return {query, profil: query.data}
}
