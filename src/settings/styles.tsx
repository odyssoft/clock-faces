import { makeStyles } from '@mui/styles'
import { SettingsTheme } from './types'

const useStyles = makeStyles((theme: SettingsTheme) => ({
  settings: {
    position: 'absolute',
    display: 'block',
    top: 0,
    left: ({ isMenuShown }: SettingsTheme) =>
      `calc(100vw - ${isMenuShown ? 50 : 250}px)`,
  },
  button: {
    position: 'absolute',
    display: 'block',
    top: 0,
    left: '-50px',
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    padding: '13px',
    fontSize: '1.5rem',
    opacity: 0.25,
    '&:hover': {
      opacity: 1,
    },
  },
  content: {
    position: 'relative',
    display: 'flex',
    marginTop: '50px',
  },
}))

export default useStyles
