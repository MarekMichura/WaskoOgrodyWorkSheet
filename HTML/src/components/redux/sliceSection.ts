import {createSlice, type PayloadAction} from '@reduxjs/toolkit'

import {type IReducerSectionName, type IReducerSection, type IReducerSectionUpdata} from './_type/IReducerSection'

export const sectionSlice = createSlice({
  name: 'section',
  initialState: {current: undefined as number | undefined, sections: [] as IReducerSection[]},
  reducers: {
    addSection: (state, {payload}: PayloadAction<IReducerSection>) => {
      state.sections.push(payload)
      state.sections.sort((a, b) => a.y - b.y)
    },

    removeSection: (state, {payload}: PayloadAction<IReducerSectionName>) => {
      state.sections = state.sections.filter((section) => section.name !== payload)
    },

    updateSection: (state, {payload}: PayloadAction<IReducerSectionUpdata>) => {
      const section = state.sections.find((s) => s.name === payload.name)
      if (section) {
        Object.assign(section, payload)
      }
      state.sections.sort((a, b) => a.y - b.y)
    },

    ChangeCurrentSection: (state) => {
      const current = state.sections.findLastIndex((a) => a.y < window.scrollY)
      state.current = current
    },
  },
})

export const {addSection, removeSection, updateSection, ChangeCurrentSection} = sectionSlice.actions
