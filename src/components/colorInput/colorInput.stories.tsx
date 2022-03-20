import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ColorPicker from '.'

export default {
  title: 'Color Picker',
  component: ColorPicker,
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'color',
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof ColorPicker>

const Template: ComponentStory<typeof ColorPicker> = (args) => (
  <ColorPicker {...args} />
)

export const _ColorPicker = Template.bind({})
_ColorPicker.args = {
  label: 'Color Picker',
  value: '',
}
