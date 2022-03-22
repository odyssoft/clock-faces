import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ColorInput from '../colorInput'

export default {
  title: 'Color Input',
  component: ColorInput,
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'color',
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof ColorInput>

const Template: ComponentStory<typeof ColorInput> = (args) => (
  <ColorInput {...args} />
)

export const _ColorInput = Template.bind({})
_ColorInput.args = {
  label: 'Color Input',
  value: '',
}
