import React from 'react'

type InputType =
  | 'email'
  | 'number'
  | 'password'
  | 'tel'
  | 'text'
  | 'url'
  | (string & {})

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  type?: InputType
  label: string
  min?: number
  max?: number
  value?: string
}
