import { Meta, StoryFn } from '@storybook/react'
import Loader from './'

type LoaderProps = React.ComponentProps<typeof Loader>

export default {
  title: 'Components/Loader',
  component: Loader,
  argTypes: {
    color: { control: 'color' },
    border: { control: 'color' },
  },
} as Meta<LoaderProps>

const Template: StoryFn<LoaderProps> = (args) => <Loader {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'var(--primary-500)',
  border: 'var(--primary-600)',
}
export const Outline = Template.bind({})
Outline.args = {
  color: 'transparent',
  border: 'var(--primary-500)',
}
export const Success = Template.bind({})
Success.args = {
  color: 'var(--success-500)',
  border: 'var(--success-600)',
}
export const Info = Template.bind({})
Info.args = {
  color: 'var(--info-500)',
  border: 'var(--info-600)',
}
export const Error = Template.bind({})
Error.args = {
  color: 'var(--error-500)',
  border: 'var(--error-600)',
}
