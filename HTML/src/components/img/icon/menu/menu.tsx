'use client'

import {type IIconStatus} from '../_type/IIconStatus'
import IconRevealMorphBackToBack from '../IconRevealMorphBackToBack'

import morph from './_data/morph.json'
import reveal from './_data/reveal.json'

function MenuIcon({status}: IIconStatus) {
  return <IconRevealMorphBackToBack status={status} reveal={reveal} morph={morph} />
}

export default MenuIcon
