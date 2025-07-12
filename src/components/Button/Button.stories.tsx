import type { Meta, StoryObj } from '@storybook/nextjs'
import Button from './'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    background: { control: 'color' },
    color: { control: 'color' },
    fill: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
    disable: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
  },
  args: {
    background: 'var(--primary-500)',
    color: '#ffffff',
    children: 'ثبت نام',
    disable: false,
    fontSize: '14px',
    fontWeight: '500',
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}

// export const Disabled: Story = {
//   args: {
//     disable: true,
//     children: 'Disabled Button',
//   },
// }

export const CustomFont: Story = {
  args: {
    fontSize: '18px',
    fontWeight: '700',
    children: 'بزرگ و گنده',
  },
}

export const CustomColors: Story = {
  args: {
    background: '#1e40af',
    color: '#ffffff',
    fill: '#ffffff',
    children: 'آبیه',
  },
}
