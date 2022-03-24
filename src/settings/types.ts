import { SetStateAction } from 'react'
import { Theme } from 'theme'

export interface SettingsProps {
  background: string
  setBackground: Function
  theme: Theme
  setTheme: Function
}

export interface SettingsTheme extends Theme {
  isMenuShown: boolean
}
