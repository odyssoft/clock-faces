import React from 'react'
import { Theme } from 'theme'

export interface ColorInputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  label: string
  value?: string
}
