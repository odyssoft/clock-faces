import { DefaultTheme } from '@mui/styles'
import useIsDarkMode from 'hooks/useDarkMode'

export interface Theme extends DefaultTheme {
  isDarkMode: boolean
  primaryColor: string
  primaryActionColor: string
  secondaryColor: string
  gradientBackground: string
  primaryBackground: string
  secondaryBackground: string
  smallInsetShadow: string
  shadow: string
  largeShadow: string
}

const createTheme = (): Theme => {
  const darkMode = useIsDarkMode()
  return {
    isDarkMode: darkMode,
    primaryColor: darkMode ? '#EEF0F2' : '#29292E',
    primaryActionColor: '#006DFF',
    secondaryColor: darkMode ? '#EEF0F2' : '#29292E',
    gradientBackground:
      'linear-gradient(-45deg, #f10a75, #fac702, #67f807, #61f7ed, #6ad6e7, #6171ab, #5e21a1)',
    primaryBackground: darkMode ? '#19191E' : '#DEE0E2',
    secondaryBackground: darkMode ? '#29292E' : '#EEF0F2',
    smallInsetShadow: `rgba(${
      darkMode ? '255, 255, 255' : '0, 0, 0'
    }, .1) 0 0 0 1px inset`,
    shadow: '1px 1px 5px 1px rgba(0,0,0,.7)',
    largeShadow: '0 0 6px 3px black',
  }
}

export default createTheme

export const theme: Theme = {
  isDarkMode: true,
  primaryColor: '#EEF0F2',
  primaryActionColor: '#006DFF',
  secondaryColor: '#EEF0F2',
  gradientBackground:
    'linear-gradient(-45deg, #f10a75, #fac702, #67f807, #61f7ed, #6ad6e7, #6171ab, #5e21a1)',
  primaryBackground: '#19191E',
  secondaryBackground: '#29292E',
  smallInsetShadow: 'rgba(255, 255, 255, .1) 0 0 0 1px inset',
  shadow: '1px 1px 5px 1px rgba(0,0,0,.7)',
  largeShadow: '0 0 6px 3px black',
}
