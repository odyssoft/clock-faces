import React from 'react'
import { Face } from 'types'

export const getFace = (name: string): Face => {
  const ClockFace = require(`faces/${name}`).default
  const face: Face = {
    name,
    component: <ClockFace />,
  }

  const getIfExists = (key: string) => {
    try {
      return require(`faces/${name}`)[key]
    } catch (e) {
      try {
        return require(`faces/${name}/${key}`).default
      } catch (er) {
        try {
          return require(`faces/${name}/${key}`)[key]
        } catch (err) {
          return null
        }
      }
    }
  }

  const settings = getIfExists('settings')
  const config = getIfExists('config')

  settings && (face.settings = settings)
  config && (face.config = config)

  return face
}
