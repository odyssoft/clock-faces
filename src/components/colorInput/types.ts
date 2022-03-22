import React from 'react'
import { Theme } from 'theme'

export interface ColorInputTheme extends Theme {
  picker: string
}

export interface ColorInputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  label: string
  value?: string
}
