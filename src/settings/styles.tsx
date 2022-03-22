import { makeStyles } from '@mui/styles'
import { SettingsTheme } from './types'

const useStyles = makeStyles((theme: SettingsTheme) => ({
  settings: {
    position: 'absolute',
    display: 'block',
    top: '5px',
    right: ({ isMenuShown }: SettingsTheme) => (isMenuShown ? '0px' : '-100%'),
    background: ({ secondaryBackground }: SettingsTheme) => secondaryBackground,
  },
  button: {
    position: 'absolute',
    display: 'block',
    top: 0,
    right: 0,
    width: '50px',
    height: '50px',
    cursor: 'pointer',
    boxSizing: 'border-box',
    padding: '13px',
    fontSize: '1.5rem',
    opacity: 0.25,
    zIndex: 1,
    '&:hover': {
      opacity: 1,
    },
  },
  content: {
    position: 'relative',
    display: 'flex',
    marginTop: '40px',
    flexDirection: 'column',
  },
}))

export default useStyles
