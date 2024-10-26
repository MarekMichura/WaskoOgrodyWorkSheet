import {useState, Suspense} from 'react'

import {Loading} from '/Loading'

import {ISuspenseDelayed} from './ITypes'
import {SuspendWrapperController} from './SuspendWrapperController'

export const SuspendWrapper = ({forceOpen, waitLoad, children, ...props}: ISuspenseDelayed) => {
  const [state, setState] = useState(false)

  return (
    <>
      {!waitLoad && <Suspense fallback={<SuspendWrapperController set={setState} />}>{children}</Suspense>}
      <Loading {...props} open={forceOpen || state} />
    </>
  )
}
