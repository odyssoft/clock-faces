import { getFace } from 'functions/faces'
import { theme } from 'theme'
import { Face } from 'types'

import {
  AppActionTypes,
  AppState,
  APP_SET_BACKGROUND,
  APP_SET_THEME,
} from './types'

const faces: Array<Face> = [getFace('bar')]

export const initialState: AppState = {
  activeFace: faces[0],
  background: 'rgba(25, 25, 30, .75)',
  faces,
  theme,
}

export const rootReducer = (
  state = initialState,
  { payload, type }: AppActionTypes
) => {
  switch (type) {
    case APP_SET_BACKGROUND: {
      return {
        ...state,
        background: payload,
      }
    }

    case APP_SET_THEME: {
      return {
        ...state,
        theme: payload,
      }
    }

    default: {
      return state
    }
  }
}

export type RootState = ReturnType<typeof rootReducer>
