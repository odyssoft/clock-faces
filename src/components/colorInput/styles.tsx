import { makeStyles } from '@mui/styles'

import { Theme } from 'theme'

const useStyles = makeStyles((theme: Theme) => ({
  colorInput: {
    position: 'relative',
    maxWidth: '210px',
    boxShadow: 'border-box',
    margin: '5px',
    // borderCollapse: 'collapse',
    // borderSpacing: '0',
    // color: '#333333',
    // fontSize: '13px',
    // lineHeight: '20px',
    // textAlign: 'left',
  },
  colorPreview: {
    position: 'absolute',
    display: 'inline-block',
    top: '4px',
    left: '4px',
    cursor: 'pointer',
    zIndex: 1,
  },
  preview: {
    width: '16px',
    height: '16px',
    boxShadow: 'rgba(0,0,0,.1) 0 0 0 1px inset',
    borderRadius: '4px',
    margin: '4px',
    background: 'white',
    overflow: 'hidden',
  },
  color: {
    position: 'relative',
    display: 'block',
    width: '100%',
    height: '100%',
  },
  selectorWrapper: {
    position: 'absolute',
    inset: 'auto auto 0px 0px',
    display: 'inline-block',
    zIndex: 999,
    // top: '100%',
    background: 'rgba(255, 255, 255, .95)',
    filter:
      'drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))',
    WebkitFilter:
      'drop-shadow(0px 5px 5px rgba(0,0,0,0.05)) drop-shadow(0 1px 3px rgba(0,0,0,0.1))',
    borderRadius: '8px',
    fontSize: '12px',
    margin: '5px',
  },
  indicator: {
    position: 'absolute',
    top: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    borderStyle: 'solid',
    borderBottomWidth: '8px',
    borderTopWidth: '0px',
    borderRightWidth: '8px',
    borderLeftWidth: '8px',
    borderBottomColor: 'rgba(255,255,255,0.95)',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  selector: {
    width: '200px',
    margin: '5px',
    boxSizing: 'border-box',
  },
  input: {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    border: '0 none',
    margin: 0,
    background: '#FFFFFF',
    fontSize: '13px',
    position: 'relative',
    WebkitTransition: 'box-shadow 200ms ease-out,opacity 200ms ease-out',
    MozTransition: 'box-shadow 200ms ease-out,opacity 200ms ease-out',
    transition: 'box-shadow 200ms ease-out,opacity 200ms ease-out',
    color: '#333333',
    boxShadow: 'rgba(0,0,0,.1) 0 0 0 1px inset',
    borderRadius: '4px',
    lineHeight: '20px',
    display: 'inline',
    textAlign: 'left',
    minHeight: '32px',
    width: '100%',
    paddingLeft: '30px',
    paddingRight: '30px',
    boxSizing: 'border-box',
  },
  svg: {
    shapeRendering: 'inherit',
    webkitTransform: 'translate3d(0,0,0)',
    msTransform: 'translate3d(0,0,0)',
    transform: 'translate3d(0,0,0)',
    display: 'block',
    position: 'absolute',
    zIndex: 1,
    top: '6px',
    right: '7px',
    width: '20px',
    height: '20px',
    padding: '4px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: '#333',
  },
  path: {
    fill: 'currentcolor',
  },
}))

const useStylesOld = makeStyles((theme: Theme) => ({
  wrapper: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    margin: '.25em .5em',
    cursor: 'pointer',
    color: ({ primaryColor }: Theme) => primaryColor || 'white',
  },
  label: {
    flex: 1,
    fontWeight: '600',
  },
  inputWrapper: {
    overflow: 'hidden',
    width: '2em',
    height: '2em',
    borderRadius: '.8rem',
    border: '2px solid currentColor',
    boxShadow: '1px 1px 3px 0px black',
    marginLeft: '.5em',
  },
  input: {
    padding: '0',
    width: '150%',
    height: '150%',
    margin: '-25%',
  },
}))

export default useStyles
