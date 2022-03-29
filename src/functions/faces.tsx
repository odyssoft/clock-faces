import React from 'react'
import { Face } from 'types'

export const getFace = (name: string): Face => {
  const ClockFace = require(`faces/${name}`).default
  const face: Face = {
    name,
    component: <ClockFace />,
  }

  const Settings = require(`faces/${name}/settings`).default
  const config = require(`faces/${name}/config`).default

  Settings && (face.settings = <Settings />)
  config && (face.config = config)

  return face
}
