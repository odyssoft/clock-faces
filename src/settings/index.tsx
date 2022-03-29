import Icon, { Beehive, Close } from '@odyssoft/odyssoft-icons'
import ColorInput from 'components/colorInput'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBackground, setTheme } from 'store/actions'
import { RootState } from 'store/reducer'
import { Theme } from 'theme'

import useStyles from './styles'
import { SettingsTheme } from './types'

const Settings = () => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false)

  const background = useSelector(({ background }: RootState) => background)
  const settings = useSelector(
    ({ activeFace: { settings } }: RootState) => settings
  )
  const theme = useSelector(({ theme }: RootState) => theme)

  const dispatch = useDispatch()

  const handleBackground = (value: string) => dispatch(setBackground(value))
  const handleClick = () => setIsMenuShown(!isMenuShown)
  const handleTheme = (value: Theme) => dispatch(setTheme(value))

  const settingsTheme: SettingsTheme = {
    ...theme,
    isMenuShown,
  }
  const classes = useStyles(settingsTheme)

  return (
    <>
      <div className={classes.button} onClick={handleClick}>
        <Icon
          icon={Beehive()}
          condition={isMenuShown}
          conditionIcon={Close()}
        />
      </div>
      <div className={classes.settings}>
        <div className={classes.content}>
          {settings ?? null}
          <ColorInput
            label={'Background Color'}
            value={background}
            inputChange={handleBackground}
          />
          {Object.keys(theme).map((key: string) => (
            <ColorInput
              key={key}
              label={key}
              value={String(theme[key])}
              inputChange={(value: string) =>
                handleTheme({ ...theme, [key]: value })
              }
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Settings
