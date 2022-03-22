import { ThemeProvider, useTheme } from '@mui/styles'
import React from 'react'

import createTheme, { Theme } from 'theme'
import useQueryString from 'hooks/useQueryString'
import Settings from 'settings'

import useStyles from './styles'

const App = () => {
  const query: any = useQueryString()

  const theme: Theme = createTheme()

  const classes = useStyles({
    ...theme,
    customBackground: query.background ?? null,
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Settings />
        <div className={classes.centered}></div>
      </div>
    </ThemeProvider>
  )
}

export default App
