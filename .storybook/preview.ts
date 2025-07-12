import type { Preview } from '@storybook/nextjs'
import '../src/assets/styles/global.scss'
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
