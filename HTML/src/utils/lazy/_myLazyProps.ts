import {ComponentType, LazyExoticComponent} from 'react'

export interface myLazyProps<T extends ComponentType<unknown>> {
  preload: () => Promise<{default: T}>
  lazy: LazyExoticComponent<T>
}
