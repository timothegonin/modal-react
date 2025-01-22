import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'

const meta = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['docsPage'],
  argTypes: {
    buttonTitle: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    buttonTitle: 'Open Modal',
    title: 'Modal Title',
    description: 'This is a modal',
  },
}
