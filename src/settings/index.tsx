import { useTheme } from '@mui/styles'
import Icon, { Beehive, Close } from '@odyssoft/odyssoft-icons'
import ColorInput from 'components/colorInput'
import Input from 'components/input'
import React, { useState } from 'react'
import { Theme } from 'theme'

import useStyles from './styles'
import { SettingsTheme } from './types'

const Settings = () => {
  const [isMenuShown, setIsMenuShown] = useState<boolean>(false)

  const handleClick = () => setIsMenuShown(!isMenuShown)

  const handlePrimaryColorChange = (e: any) => {
    console.log(e)
  }
  const theme: Theme = useTheme()
  const settingsTheme: SettingsTheme = {
    ...theme,
    isMenuShown,
  }
  const classes = useStyles(settingsTheme)
  /**
   * primaryColor
   * actionColor
   * primaryBackground
   * secondaryColor
   * secondaryBackground
   */

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
          <div style={{ display: 'block' }}>
            <ColorInput
              label={'Primary Color'}
              onChange={handlePrimaryColorChange}
            />
          </div>
          <div style={{ display: 'block' }}>
            <Input
              label={'Test Color'}
              onChange={({ target: { value } }: any) => console.log({ value })}
              type={'text'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings
