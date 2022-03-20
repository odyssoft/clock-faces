import { useTheme } from '@mui/styles'
import React, { useEffect, useRef, useState } from 'react'
import {
  HexColorPicker,
  RgbaColorPicker,
  HslaColorPicker,
} from 'react-colorful'

import { Theme } from 'theme'

import useStyles from './styles'
import { ColorInputProps } from './types'

const ColorInput = ({ className, label, value, ...rest }: ColorInputProps) => {
  const types = ['Hex', 'RGBA', 'HSLA']

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [color, setColor] = useState<string>(value || '')
  const [colorType, setColorType] = useState<number>(0)

  const containerRef = useRef<HTMLDivElement>(null)

  const handleClick = () => setIsVisible(!isVisible)

  const handleChange = (value: any) => setColor(value)

  const toggleColorType = () =>
    setColorType(colorType + 1 >= types.length ? 0 : colorType + 1)

  const theme: Theme = useTheme() || {}
  const classes = useStyles(theme)

  useEffect(() => {
    const closePicker = (e: any) =>
      isVisible &&
      !containerRef.current?.contains(e.target) &&
      setIsVisible(false)

    window.addEventListener('click', closePicker)

    return () => {
      window.removeEventListener('click', closePicker)
    }
  }, [isVisible, setIsVisible])

  return (
    <>
      <div className={classes.colorInput} {...rest}>
        <div className={classes.colorPreview} onClick={handleClick}>
          <div className={classes.preview}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fillOpacity=".1"
            >
              <path d="M8 0h8v8H8zM0 8h8v8H0z" />
            </svg>
            )
          </div>
        </div>
        <input
          className={classes.input}
          onChange={handleChange}
          value={color}
          placeholder="Choose color..."
        />
        {color !== '' && (
          <svg
            viewBox="0 0 1024 1024"
            className={classes.svg}
            onClick={toggleColorType}
          >
            <path
              d="M1010.6 479.7L736.4 205.4a45.7 45.7 0 10-64.7 64.6l242 242L671.7 754a45.7 45.7 0 1064.7 64.6l274.1-274.2a45.6 45.6 0 000-64.6M0 511.9c0-11.7 4.5-23.4 13.4-32.3l274.1-274.2a45.7 45.7 0 1164.7 64.6L110.4 512l241.9 241.9a45.7 45.7 0 01-64.7 64.6L13.4 544.2C4.4 535.3 0 523.6 0 512"
              className={classes.path}
            ></path>
          </svg>
        )}
      </div>
      {isVisible && (
        <div className={classes.selectorWrapper}>
          <div className={classes.indicator}></div>
          <div className={classes.selector} ref={containerRef}>
            {types[colorType] === 'RGBA' ? (
              <RgbaColorPicker defaultValue={color} onChange={handleChange} />
            ) : types[colorType] === 'HSLA' ? (
              <HslaColorPicker defaultValue={color} onChange={handleChange} />
            ) : (
              <HexColorPicker defaultValue={color} onChange={handleChange} />
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ColorInput