import {useState, Suspense} from 'react'

import {Loading} from '/Loading'

import {ISuspenseDelayed} from './ITypes'
import {SuspendWrapperController} from './SuspendWrapperController'

export const SuspendWrapper = ({open, children, ...props}: ISuspenseDelayed) => {
  const [state, setState] = useState(false)
  return (
    <>
      <Suspense fallback={<SuspendWrapperController set={setState} />}>{children}</Suspense>
      <Loading open={state || open} {...props} />
    </>
  )
}
