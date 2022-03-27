import { useTheme } from '@mui/styles'
import { useDay, useHour, useMinute, useSecond } from 'hooks/useMoment'
import React from 'react'

import { Theme } from 'theme'
import Hand from './hand'

import useStyles from './styles'

const BarClock = () => {
  const theme: Theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={classes.clock}>
      {/* <Hand className={classes.hand} hook={useDay} unit={'date'} /> */}
      <Hand className={classes.hand} hook={useHour} unit={'hours'} />
      <Hand className={classes.hand} hook={useMinute} unit={'minutes'} />
      <Hand className={classes.hand} hook={useSecond} unit={'seconds'} />
    </div>
  )
}

export default BarClock
