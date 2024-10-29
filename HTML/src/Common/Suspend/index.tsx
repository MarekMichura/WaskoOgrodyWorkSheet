import {useState, Suspense, Fragment} from 'react'

import {Loading} from '/Loading/index'

import {ISuspenseDelayed} from './ITypes'
import {SuspendWrapperController} from './SuspendWrapperController'

export function SuspendWrapper({forceOpen, children, ...props}: ISuspenseDelayed) {
  const [loading, setLoading] = useState(false)

  return (
    <Fragment>
      <Suspense fallback={<SuspendWrapperController set={setLoading} />}>{children}</Suspense>
      <Loading {...props} open={forceOpen || loading} />
    </Fragment>
  )
}
