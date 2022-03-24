import { ThemeProvider, useTheme } from '@mui/styles'
import React from 'react'

import useQueryString from 'hooks/useQueryString'
import Settings from 'settings'
import createTheme, { Theme } from 'theme'

import useStyles from './styles'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState<Theme>(createTheme())

  const query: any = useQueryString()

  const classes = useStyles({
    ...theme,
    customBackground: query.background ?? null,
  })

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Settings theme={theme} setTheme={setTheme} />
        <div className={classes.centered}></div>
      </div>
    </ThemeProvider>
  )
}

export default App
