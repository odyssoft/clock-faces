import { ThemeProvider, useTheme } from '@mui/styles'
import React, { useEffect } from 'react'

import useQueryString from 'hooks/useQueryString'
import Settings from 'settings'
import createTheme, { Theme } from 'theme'

import useStyles from './styles'
import { useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState<Theme>(createTheme())
  const [clock, setClock] = useState<React.ReactNode>()

  const query: any = useQueryString()

  const classes = useStyles({
    ...theme,
    customBackground: query.background ?? null,
  })

  useEffect(() => {
    //  set active clock to default for now
    const Clock = require('clock/bar').default
    setClock(<Clock />)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Settings theme={theme} setTheme={setTheme} />
        <div className={classes.centered}>{clock}</div>
      </div>
    </ThemeProvider>
  )
}

export default App
