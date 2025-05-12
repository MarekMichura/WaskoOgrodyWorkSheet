import {type Ref, useCallback} from 'react'

export default function useCombinedRefs<T>(...refs: Ref<T>[]) {
  // prettier-ignore
  return useCallback((node: T) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node)
      } else if (ref && typeof ref === 'object') {
        ref.current = node
      }
    })
  },[refs])
}
