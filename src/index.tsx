import { ThemeProvider } from '@mui/private-theming'
import React from 'react'
import ReactDOM from 'react-dom'

import App from 'app'
import { theme } from 'theme'

import 'index.css'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
