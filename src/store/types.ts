import { Theme } from 'theme'
import { Face } from 'types'

export const APP_SET_BACKGROUND = 'APP_SET_BACKGROUND'
export const APP_SET_THEME = 'APP_SET_THEME'

export interface AppState {
  activeFace: Face
  background: string
  faces: Array<Face>
  theme: Theme
}

interface SetBackground {
  type: typeof APP_SET_BACKGROUND
  payload: string
}

interface SetTheme {
  type: typeof APP_SET_THEME
  payload: Theme
}

export type AppActionTypes = SetBackground | SetTheme
