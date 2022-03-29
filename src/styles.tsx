import { makeStyles } from '@mui/styles'
import { Theme } from 'theme'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
    display: 'flex',
    width: '100vw',
    height: '100vh',
    background: ({ background }: any = theme) => background,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  centered: {
    textAlign: 'center',
  },
}))

export default useStyles
