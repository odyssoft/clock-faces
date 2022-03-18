import { useTheme } from '@mui/styles'
import React from 'react'

import { Theme } from 'theme'
import useStyles from './styles'
import useQueryString from 'hooks/useQueryString'

interface AppTheme extends Theme {
  customBackground?: string
}

const App = () => {
  const query: any = useQueryString()
  const theme: AppTheme = useTheme()
  const classes = useStyles({
    ...theme,
    customBackground: query.background ?? null,
  })

  return (
    <div className={classes.container}>
      <div className={classes.centered}></div>
    </div>
  )
}

export default App
