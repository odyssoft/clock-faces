import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Theme } from '../theme'
import Settings from './'
import { useTheme } from '@mui/styles'

export default {
  title: 'Settings',
  component: Settings,
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'color',
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof Settings>

export const _Settings = () => {
  const [theme, setTheme] = useState<Theme>(useTheme())
  return <Settings theme={theme} setTheme={setTheme} />
}
