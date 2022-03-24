import React from 'react'
import { Theme } from 'theme'

export interface ColorInputProps
  extends React.HTMLAttributes<HTMLInputElement> {
  inputChange: (value: string) => void
  label: string
  value?: string
}
