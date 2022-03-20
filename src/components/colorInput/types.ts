import React from 'react'

export interface ColorInputProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string
  value?: string
}
