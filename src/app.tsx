import { ThemeProvider, useTheme } from '@mui/styles'
import React, { useEffect } from 'react'

import Settings from './settings'
import createTheme, { Theme } from 'theme'

import useStyles from './styles'
import { useState } from 'react'

const App = () => {
  const [customBackground, setCustomBackground] = useState<string>(
    'rgba(25, 25, 30, .75)'
  )
  const [theme, setTheme] = useState<Theme>(createTheme())
  const [clock, setClock] = useState<React.ReactNode>()

  const classes = useStyles({
    ...theme,
    customBackground,
  })

  useEffect(() => {
    //  set active clock to default for now
    const Clock = require('clock/bar').default
    setClock(<Clock />)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Settings
          background={customBackground}
          theme={theme}
          setBackground={setCustomBackground}
          setTheme={setTheme}
        />
        <div className={classes.centered}>{clock}</div>
      </div>
    </ThemeProvider>
  )
}

export default App
