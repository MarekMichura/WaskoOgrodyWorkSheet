import {configureStore} from '@reduxjs/toolkit'
import {enableMapSet} from 'immer'

import {backBlurSlice} from './sliceBackBlur'
import {sectionSlice} from './sliceSection'
import {themeSlice} from './sliceTheme'

enableMapSet()
export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    section: sectionSlice.reducer,
    blur: backBlurSlice.reducer,
  },
  middleware: (middleware) =>
    middleware({
      serializableCheck: {
        ignoredActions: ['blur/addBlurAction', 'blur/removeBlurAction'],
        ignoredPaths: ['blur'],
      },
    }),
})

export type storeState = ReturnType<typeof store.getState>
export type storeDispatch = typeof store.dispatch
