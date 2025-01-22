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
        className="ui-bg-blue-500 ui-text-white ui-py-2 ui-px-4 ui-rounded-md hover:ui-bg-blue-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {buttonTitle}
      </button>
      <div
        className={`ui-absolute ${
          isOpen ? 'ui-flex' : 'ui-hidden'
        } ui-justify-center ui-items-center ui-bg-slate-500 ui-bg-opacity-70 ui-w-full ui-h-full ui-left-0 ui-top-0`}
      >
        <div className="ui-flex ui-flex-col ui-bg-white ui-p-4 ui-gap-3 ui-rounded-md ui-w-1/3">
          {/* modal header */}
          <div className="ui-flex ui-justify-between ui-items-center">
            <p>{title}</p>
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="ui-stroke-slate-500 hover:ui-stroke-slate-300"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>
          {/* modal body */}
          <div>
            <p>{description}</p>
          </div>
          {/* modal footer */}
          <div className="ui-flex ui-justify-end">
            <button
              className="ui-bg-red-500 ui-text-white ui-py-2 ui-px-4 ui-rounded-md hover:ui-bg-red-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
