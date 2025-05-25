/* eslint-disable no-restricted-imports */
'use client'

import {useDispatch as _useDispatch, useSelector as _useSelector, useStore as _useStore} from 'react-redux'
import {Provider, type TypedUseSelectorHook} from 'react-redux'

import {type IChildren} from '@/utils/type/IChildren'

import {store, type storeDispatch, type storeState} from './store'

function ClientProvider({children}: IChildren) {
  return <Provider store={store}>{children}</Provider>
}

export const useDispatch = () => _useDispatch<storeDispatch>()
export const useSelector: TypedUseSelectorHook<storeState> = _useSelector
export const useStore = () => _useStore<storeState>()

export default ClientProvider
