import {QueryClient} from '@tanstack/react-query'

import {needLoginKey} from '/query/keys'

export function removeNeedLoginQuery(client: QueryClient) {
  client.removeQueries({
    predicate: (query) => {
      return query.queryKey.some((key) => key === needLoginKey)
    },
  })
}
