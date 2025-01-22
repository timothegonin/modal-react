import React, { useState } from 'react'

type ModalProps = {
  buttonTitle: string
  title: string
  description: string
}

export const Modal = ({ buttonTitle, title, description }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="ui ui-relative">
      <button onClick={() => setIsOpen(!isOpen)}>{buttonTitle}</button>
      <div className={`ui-absolute ${isOpen ? 'ui-flex' : 'ui-hidden'}`}>
        <div className="w3-modal-content">
          <div className="w3-container">
            <span
              onClick={() => setIsOpen(!isOpen)}
              className="w3-button w3-display-topright"
            >
              &times;
            </span>
            <p>{title}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
