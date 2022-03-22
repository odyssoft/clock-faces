import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Settings from './'

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

export const _Settings = () => <Settings />
