import { makeStyles } from '@mui/styles'
import { Theme } from 'theme'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
    maxWidth: '240px',
    boxSizing: 'border-box',
    margin: '0 5px',
    paddingTop: '1rem',
    color: ({ primaryColor }: Theme) => primaryColor,
    '& label': {
      position: 'absolute',
      top: '1.5rem',
      left: '0',
      marginLeft: '5px',
      fontWeight: 'normal',
      zIndex: '1',
      cursor: 'text',
      lineHeight: '1rem',
    },
    '& input': {
      WebkitAppearance: 'none',
      MozAppearance: 'none',
      appearance: 'none',
      border: '0 none',
      margin: 0,
      background: ({ primaryBackground }: Theme) => primaryBackground,
      fontSize: '13px',
      position: 'relative',
      WebkitTransition: 'box-shadow 200ms ease-out,opacity 200ms ease-out',
      MozTransition: 'box-shadow 200ms ease-out,opacity 200ms ease-out',
      transition: 'box-shadow 200ms ease-out,opacity 200ms ease-out',
      boxShadow: ({ isDarkMode }: Theme) =>
        `rgba(${isDarkMode ? '255, 255, 255' : '0, 0, 0'}, .1) 0 0 0 1px inset`,
      borderRadius: '4px',
      lineHeight: '20px',
      display: 'inline',
      textAlign: 'left',
      minHeight: '32px',
      width: '100%',
      paddingLeft: '5px',
      paddingRight: '5px',
      boxSizing: 'border-box',
      color: 'inherit',
      '&:focus ~ label, &:not([value=""]) ~ label': {
        top: '0px',
        marginLeft: '5px',
        fontSize: '13px',
        fontWeight: 700,
      },
    },
  },
}))

export default useStyles
