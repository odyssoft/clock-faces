import { makeStyles } from '@mui/styles'
import { BarTheme } from './types'

const useStyles = makeStyles((theme: BarTheme) => ({
  container: {
    position: 'relative',
    display: 'inline-block',
    '&:first-child': {
      marginRight: '-.25rem',
    },
  },
  list: {
    position: 'absolute',
    display: 'block',
    top: ({ activeIndex }: BarTheme) => `${activeIndex * -36}px`,
    left: '50%',
    transform: 'translateX(-50%)',
    background: ({ primaryBackground }: BarTheme) => primaryBackground,
    borderRadius: '.5rem',
    listStyle: 'none',
    boxShadow: '1px 1px 5px 1px rgba(0,0,0,.7)',
  },
  item: {
    position: 'relative',
    display: 'block',
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: '1.25rem',
    padding: '.5rem .75rem',
    color: ({ primaryColor }: BarTheme) => primaryColor,
    '&.active': {
      color: ({ primaryActionColor }: BarTheme) => primaryActionColor,
      // background: ({ secondaryBackground }: BarTheme) => secondaryBackground,
      borderRadius: '50%',
      transform: 'scale(1.2)',
    },
  },
  active: {
    position: 'relative',
    display: 'block',
    width: '1.5rem',
    height: '1.5rem',
    padding: '1rem',
  },
}))

export default useStyles
