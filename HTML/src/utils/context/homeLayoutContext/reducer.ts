import {EHomeLayoutAction} from './_type/IAction'
import {type IHomeLayoutStateSection} from './_type/IState'

import type IHomeLayoutAction from './_type/IAction'
import type IHomeLayoutState from './_type/IState'

const homeLayoutReducer = (state: IHomeLayoutState, action: IHomeLayoutAction): IHomeLayoutState => {
  switch (action.type) {
    case EHomeLayoutAction.AddSection: {
      const newSection: IHomeLayoutStateSection = {check: false, name: action.name, scroll: action.scroll}
      const sections = [...state.sections, newSection].sort((a) => a.scroll)

      return {...state, sections}
    }
    case EHomeLayoutAction.UpdateScrollPos: {
      const sections = state.sections
        .map((section) => {
          if (section.name !== action.name) return section
          return {...section, scroll: action.scroll}
        })
        .sort((a) => a.scroll)

      return {...state, sections}
    }
    case EHomeLayoutAction.RemoveSection: {
      const sections = state.sections.filter((section) => section.name !== action.name)
      return {...state, sections}
    }
    case EHomeLayoutAction.Check: {
      const sections = state.sections.map((section) => {
        if (section.name !== action.name) return section
        return {...section, check: true}
      })
      return {...state, sections}
    }
    case EHomeLayoutAction.UnCheck: {
      const sections = state.sections.map((section) => {
        if (section.name !== action.name) return section
        return {...section, check: false}
      })
      return {...state, sections}
    }
    default:
      return {...state}
  }
}

export default homeLayoutReducer
