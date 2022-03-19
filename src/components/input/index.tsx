import { useTheme } from '@mui/styles'
import React, { createRef } from 'react'

import { Theme } from 'theme'

import useStyles from './styles'
import { InputProps } from './types'

const Input = ({ className, label, type, ...rest }: InputProps) => {
  const inputRef = createRef<HTMLInputElement>()

  const handleClick = () =>
    inputRef && inputRef.current && inputRef.current.focus()

  const theme: Theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={classes.wrapper}>
      <label className={classes.label} onClick={handleClick}>
        {label}
      </label>
      <input ref={inputRef} className={classes.input} type={type} {...rest} />
    </div>
  )
}

export default Input
