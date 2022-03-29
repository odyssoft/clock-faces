import { makeStyles } from '@mui/styles'
import { Theme } from 'theme'

const useStyles = makeStyles(({}: Theme) => ({
  clock: {
    position: 'relative',
    display: 'inline-flex',
    borderRadius: '.5rem',
  },
  hand: {
    position: 'relative',
    display: 'inline-block',
    maxHeight: '56px',
    margin: '0 .125rem',
  },
}))

export default useStyles
