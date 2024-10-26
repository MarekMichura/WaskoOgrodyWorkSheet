import {useState, useEffect} from 'react'

import {ILoadingProps} from './ILoadingProps'

import * as CSS from './css'

export const Loading = ({openDefault, open, text}: ILoadingProps) => {
  const [state, setState] = useState(openDefault ?? false)
  useEffect(() => {
    if (open == state) return
    const time = setTimeout(() => setState(open ?? false), open ? 100 : 2000)
    return () => clearTimeout(time)
  }, [open, state])

  if (!state) return <></>
  return (
    <CSS.LoadingContainer data-start={open ?? true}>
      <CSS.LoadingContent>
        <CSS.LoadingMelon />
        <CSS.LoadingText>{text}</CSS.LoadingText>
      </CSS.LoadingContent>
    </CSS.LoadingContainer>
  )
}
