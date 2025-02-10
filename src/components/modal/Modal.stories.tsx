import { useState } from 'react'
import type { Meta } from '@storybook/react'
import { Modal } from './Modal'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Modal> = {
  title: 'Example/Modal',
  component: Modal,
  tags: ['docsPage'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    modalStatus: {
      control: { type: 'boolean' },
    },
  },
}

export default meta

export const Primary = () => {
  const [isOpen, setIsOpen] = useState(true)

  const handleToggle = () => {
    action('Modal toggled')()
    setIsOpen(!isOpen)
  }

  return (
    <Modal
      title="Modal Title"
      description="This is a modal"
      modalStatus={isOpen}
      onToggle={handleToggle}
    />
  )
}
