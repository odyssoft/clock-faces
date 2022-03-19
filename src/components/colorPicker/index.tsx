import { useTheme } from '@mui/styles'
import React, { createRef } from 'react'

import { Theme } from 'theme'

import useStyles from './styles'
import { ColorInputProps } from './types'

const ColorInput = ({ className, label, ...rest }: ColorInputProps) => {
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
      <div className={classes.inputWrapper}>
        <input
          ref={inputRef}
          className={classes.input}
          type={'color'}
          {...rest}
        />
      </div>
    </div>
  )
}

export default ColorInput
