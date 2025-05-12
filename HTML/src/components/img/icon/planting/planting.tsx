'use client'

import IconRevealLoop from '../IconRevealLoop'

import loop from './_data/loop.json'
import reveal from './_data/reveal.json'

function PlantingIcon() {
  return <IconRevealLoop loop={loop} reveal={reveal} />
}

export default PlantingIcon
