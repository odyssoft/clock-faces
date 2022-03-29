import { ThemeProvider } from '@mui/styles'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import createTheme from 'theme'
import { RootState } from 'store/reducer'

import Settings from './settings'
import useStyles from './styles'
import { setTheme } from 'store/actions'

const App = () => {
  const { component: clockFace } = useSelector(
    ({ activeFace }: RootState) => activeFace
  )
  const background = useSelector(({ background }: RootState) => background)
  const theme = useSelector(({ theme }: RootState) => theme)

  const dispatch = useDispatch()
  const defaultTheme = createTheme()

  const classes = useStyles({
    ...theme,
    background,
  })

  useEffect(() => {
    dispatch(setTheme(defaultTheme))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Settings />
        <div className={classes.centered}>{clockFace}</div>
      </div>
    </ThemeProvider>
  )
}

export default App
