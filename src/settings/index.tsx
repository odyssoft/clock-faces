import Icon, { Beehive, Close } from '@odyssoft/odyssoft-icons'
import ColorInput from 'components/colorInput'
import React, { useState } from 'react'

import useStyles from './styles'
import { SettingsProps, SettingsTheme } from './types'

const Settings = ({ setTheme, theme }: SettingsProps) => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false)

  const handleClick = () => setIsMenuShown(!isMenuShown)

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
          {Object.keys(theme).map((key: string) => (
            <ColorInput
              key={key}
              label={key}
              value={String(theme[key])}
              inputChange={(value: string) =>
                setTheme({ ...theme, [key]: value })
              }
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Settings
