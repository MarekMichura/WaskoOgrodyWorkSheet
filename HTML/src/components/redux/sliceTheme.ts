import {createSlice} from '@reduxjs/toolkit'

import {ETheme} from '@/utils/enum/ETheme'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: ETheme.loading,
  reducers: {
    // initTheme: () => {
    //   let theme = getCookieClient(ECookie.theme) as ETheme
    //   if (!theme && !Object.values(ETheme).includes(theme)) {
    //     theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? ETheme.dark : ETheme.light
    //   }
    //   document.documentElement.setAttribute('data-theme', theme)
    //   return theme
    // },
    // changeTheme: (state, {payload}: PayloadAction<ETheme | undefined>) => {
    //   const theme = payload ?? getNextTheme(state)
    //   clientSetCookie(ECookie.theme, theme)
    //   document.documentElement.setAttribute('data-theme', theme)
    //   return theme
    // },
  },
})

// export const {changeTheme, initTheme} = themeSlice.actions
