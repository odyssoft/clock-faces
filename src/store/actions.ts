import { Theme } from 'theme'

import { AppActionTypes, APP_SET_BACKGROUND, APP_SET_THEME } from './types'

export const setBackground = (background: string): AppActionTypes => ({
  type: APP_SET_BACKGROUND,
  payload: background,
})

export const setTheme = (theme: Theme): AppActionTypes => ({
  type: APP_SET_THEME,
  payload: theme,
})
