import type { Meta, StoryObj } from '@storybook/nextjs'
import CheckBox from './'
import React, { useState } from 'react'

const meta: Meta<typeof CheckBox> = {
  title: 'Components/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CheckBox>

const Template: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.value ?? false)

    return (
      <CheckBox
        {...args}
        value={checked}
        handleChange={(e) => {
          setChecked(e.target.checked)
          args.handleChange?.(e)
        }}
      />
    )
  },
}

export const Default: Story = {
  ...Template,
  args: {
    name: 'exampleCheck',
    value: false,
    handleChange: () => {}, 
  },
}
