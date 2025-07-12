import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import Input from './'
import { EyeIcon } from '../icons'
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Input>

const Template: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || '')

    return <Input {...args} value={value} handleChange={(e) => setValue(e.target.value)} />
  },
}

export const Default: Story = {
  ...Template,
  args: {
    type: 'text',
    name: 'username',
    labelText: 'نام کاربری',
    placeholder: 'لطفا نام کاربری وارد کنید',
    informationText: 'متن راهنما',
  },
}

export const WithError: Story = {
  ...Template,
  args: {
    type: 'text',
    name: 'email',
    labelText: 'ایمیل',
    placeholder: 'ایمیل خود را وارد کنید',
    errorText: 'ایمیل معتبر نمی باشد.',
    required: true,
  },
}

export const WithIcon: Story = {
  ...Template,
  args: {
    type: 'password',
    name: 'password',
    labelText: 'رمز عبور',
    placeholder: 'رمز عبور خود را وارد کنید',
    icon: <EyeIcon />,
    required: true,
    informationText: 'حداقل ۸ کاراکتر',
  },
}
