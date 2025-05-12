'use client'

import {EThemes} from '@/utils/enums/EThemes'
import {useTheme} from '@/utils/query/theme/useTheme'

import IconMorphBackToBack from '../IconMorphBackToBack'

import morph from './_data/morph.json'

function ThemeIcon() {
  const {theme} = useTheme()

  return <IconMorphBackToBack status={theme === EThemes.dark} morph={morph} />
}

export default ThemeIcon
