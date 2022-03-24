import { DefaultTheme } from '@mui/styles'
import useIsDarkMode from 'hooks/useDarkMode'

export interface Theme extends DefaultTheme {
  [key: string]: any
  isDarkMode: boolean
  primaryColor: string
  primaryActionColor: string
  secondaryColor: string
  primaryBackground: string
  secondaryBackground: string
}

const createTheme = (): Theme => {
  const darkMode = useIsDarkMode()
  return {
    isDarkMode: darkMode,
    primaryColor: darkMode ? '#EEF0F2' : '#29292E',
    primaryActionColor: '#006DFF',
    secondaryColor: darkMode ? '#EEF0F2' : '#29292E',
    primaryBackground: darkMode ? '#19191E' : '#DEE0E2',
    secondaryBackground: darkMode ? '#29292E' : '#EEF0F2',
  }
}

export default createTheme

export const theme: Theme = {
  isDarkMode: true,
  primaryColor: '#EEF0F2',
  primaryActionColor: '#006DFF',
  secondaryColor: '#EEF0F2',
  primaryBackground: '#19191E',
  secondaryBackground: '#29292E',
}
