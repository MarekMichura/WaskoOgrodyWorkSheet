import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
type IAction = () => void

export const backBlurSlice = createSlice({
  name: 'blur',
  initialState: [] as Array<IAction>,
  reducers: {
    addBlurAction: (state, {payload}: PayloadAction<IAction>) => {
      state.push(payload)
    },
    removeBlurAction: (state, {payload}) => {
      const index = state.findIndex((fn) => fn === payload)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
  },
})

export const {addBlurAction, removeBlurAction} = backBlurSlice.actions
