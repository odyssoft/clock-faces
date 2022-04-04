import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from './'
import { InputProps } from './types'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    label: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <Input {...args} />
)

export const Email = Template.bind({})
Email.args = {
  label: 'Email Input',
  type: 'email',
  value: 'Hello@world.com',
}

export const Number = Template.bind({})
Number.args = {
  label: 'Number Input',
  max: '15',
  min: '0',
  type: 'number',
  value: '0',
}

export const Password = Template.bind({})
Password.args = {
  label: 'Password Input',
  type: 'password',
  value: 'test_password',
}

export const Tel = Template.bind({})
Tel.args = {
  label: 'Tel Input',
  type: 'tel',
  value: 'test_password',
}

export const Text = Template.bind({})
Text.args = {
  label: 'Text Input',
  value: 'Hello World',
}

export const URL = Template.bind({})
URL.args = {
  label: 'URL Input',
  type: 'url',
  value: 'https://google.com',
}
