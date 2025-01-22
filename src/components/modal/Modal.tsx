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
      <button
        className="ui-bg-blue-400 ui-text-white ui-p-2 ui-rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonTitle}
      </button>
      <div
        className={`ui-absolute ${
          isOpen ? 'ui-flex' : 'ui-hidden'
        } ui-justify-center ui-items-center ui-bg-slate-500 ui-opacity-50 ui-w-full ui-h-full ui-left-0 ui-top-0`}
      >
        <div className="ui-flex ui-flex-col ui-bg-white ui-p-4 ui-gap-3 ui-rounded-md">
          {/* modal header */}
          <div className="ui-flex ui-justify-between ui-items-center">
            <p>{title}</p>
            <button onClick={() => setIsOpen(!isOpen)}>&times;</button>
          </div>
          {/* modal body */}
          <div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
