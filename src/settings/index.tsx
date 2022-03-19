import { useTheme } from '@mui/styles'
import Icon, { Beehive, Close } from '@odyssoft/odyssoft-icons'
import ColorInput from 'components/colorPicker'
import Input from 'components/input'
import React, { useState } from 'react'

import useStyles from './styles'
import { SettingsTheme } from './types'

const Settings = () => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false)

  const handleClick = () => setIsMenuShown(!isMenuShown)

  const handlePrimaryColorChange = (e: any) => {
    console.log(e)
  }

  const theme: SettingsTheme = {
    ...useTheme(),
    isMenuShown,
  }
  const classes = useStyles(theme)
  /**
   * primaryColor
   * actionColor
   * primaryBackground
   * secondaryColor
   * secondaryBackground
   */

  return (
    <div className={classes.settings}>
      <div className={classes.button} onClick={handleClick}>
        <Icon
          icon={Beehive()}
          condition={isMenuShown}
          conditionIcon={Close()}
        />
      </div>
      <div className={classes.content}>
        <ColorInput
          label={'Primary Color'}
          onChange={handlePrimaryColorChange}
        />
      </div>
    </div>
  )
}

export default Settings
