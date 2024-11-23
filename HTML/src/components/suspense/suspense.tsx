import {Suspense, useState} from 'react'
import {Fragment} from 'react/jsx-runtime'

import {Caller} from './caller'
import {Loading} from './loading'
import {loadingSuspenseProps} from './types/_suspenseProps'

function LoadingSuspense({children, firstRender, forceOpen}: loadingSuspenseProps) {
  const [loading, setLoading] = useState(false)

  return (
    <Fragment>
      <Suspense fallback={<Caller setLoading={setLoading} />}>{children}</Suspense>
      <Loading first={firstRender ?? false} state={forceOpen || loading} />
    </Fragment>
  )
}

export default LoadingSuspense
