import { useTheme } from '@mui/styles'
import React, { useEffect, createRef, useState } from 'react'

import { Theme } from 'theme'

import useStyles from './styles'
import { InputProps } from './types'

const ColorInput = ({
  className,
  label,
  max,
  min,
  onChange,
  type,
  value,
  ...rest
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value ?? '')
  const inputRef = createRef<HTMLInputElement>()

  const handleChange = (e: any) => {
    setInputValue(e.target.value)
    console.log(e.target.value)
    onChange && onChange(e)
  }

  const handleLabelClick = () => inputRef?.current?.focus()

  const theme: Theme = useTheme()
  const classes = useStyles(theme)

  useEffect(() => {
    typeof min !== 'undefined' &&
      inputRef.current?.setAttribute('min', `${min}`)
    typeof max !== 'undefined' &&
      inputRef.current?.setAttribute('max', `${max}`)
  }, [inputRef])

  return (
    <div className={`${classes.container} ${className ?? ''}`}>
      <input
        ref={inputRef}
        onChange={handleChange}
        value={inputValue}
        type={type ?? 'text'}
        {...rest}
      />
      <label onClick={handleLabelClick}>{label}</label>
    </div>
  )
}

export default ColorInput
