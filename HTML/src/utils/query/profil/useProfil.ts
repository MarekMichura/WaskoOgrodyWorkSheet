import {type DefinedInitialDataOptions, useQuery} from '@tanstack/react-query'

import {useRouter} from '@/locale/navigation'
import {EQueries} from '@/utils/enum/EQueries'
import {type IResponseGetProfile} from '@/utils/request/getProfil/_type/IResponseGetProfile'
import {getProfil} from '@/utils/request/getProfil/getProfil'

function useProfil(opt?: Partial<DefinedInitialDataOptions<IResponseGetProfile>>) {
  const router = useRouter()

  const query = useQuery<IResponseGetProfile>({
    queryKey: EQueries.profil,
    notifyOnChangeProps: ['data'],
    refetchInterval: 3000,
    retryDelay: 5000,
    initialData: {firstName: '', lastName: '', roles: [], userName: '', workStartDate: '', image: ''},

    queryFn: async () => {
      const {body} = await getProfil()
      if (!body)
        setTimeout(() => {
          router.refresh()
        }, 1)
      return body ?? {firstName: '', lastName: '', roles: [], userName: '', workStartDate: '', image: ''}
    },
    ...opt,
  })

  return {query, profil: query.data}
}

export default useProfil
