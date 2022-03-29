import { useTheme } from '@mui/styles'
import React from 'react'

import { Theme } from 'theme'

import useStyles from './styles'
import { BarProps } from './types'

const Bar = ({ activeIndex, options }: BarProps) => {
  const theme: Theme = useTheme()
  const classes = useStyles({
    ...theme,
    activeIndex: activeIndex || 0,
  })

  return (
    <div className={classes.container}>
      <div className={classes.active}></div>
      <ul className={classes.list}>
        {options.map((option: number, index: number) => (
          <div
            key={option}
            className={`${classes.item}${
              index === activeIndex ? ' active' : ''
            }`}
          >
            {option}
          </div>
        ))}
      </ul>
    </div>
  )
}

export default Bar
