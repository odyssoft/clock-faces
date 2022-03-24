import React from 'react'
import { ThemeProvider } from '@mui/styles'

import createTheme from '../src/theme'

import '../src/index.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
}

const Wrapper = ({ children }) => {
  const theme = createTheme()
  
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export const decorators = [
  (Story) => (
    <Wrapper>
      <Story />
    </Wrapper>
  )
]