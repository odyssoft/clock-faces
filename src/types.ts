import React from 'react'

export type Face = {
  component: React.ReactNode
  config?: any
  name: string
  settings?: React.ReactNode
}

export type FaceProps = {
  config?: any
}
