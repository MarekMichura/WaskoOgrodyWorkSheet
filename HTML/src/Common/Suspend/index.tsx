import {useState, Suspense, Fragment} from 'react'

import {Loading} from '/Loading'

import {ISuspenseDelayed} from './ITypes'
import {SuspendWrapperController} from './SuspendWrapperController'

export const SuspendWrapper = ({forceOpen, children, ...props}: ISuspenseDelayed) => {
  const [loading, setLoading] = useState(false)

  return (
    <Fragment>
      <Suspense fallback={<SuspendWrapperController set={setLoading} />}>{children}</Suspense>
      <Loading {...props} open={forceOpen || loading} />
    </Fragment>
  )
}
