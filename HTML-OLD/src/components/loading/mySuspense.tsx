import {cookies} from 'next/dist/server/request/cookies'
import {Suspense, SuspenseProps} from 'react'

import {ECookieNames} from '@/utils/type/common/ECookiesNames'

async function MySuspense(props: SuspenseProps) {
  const js = (await cookies()).get(ECookieNames.js)?.value === 'true'

  if (js) return <Suspense {...props} />
  return props.children
}

export default MySuspense
