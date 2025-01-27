import { useState } from 'react'

type ModalProps = {
  buttonTitle: string
  title: string
  description: string
}

export const Modal = ({ buttonTitle, title, description }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toogleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="ui ui-relative">
      <button
        className="ui ui-bg-blue-500 ui-text-white ui-py-2 ui-px-4 ui-rounded-md hover:ui-bg-blue-300"
        onClick={toogleModal}
      >
        {buttonTitle}
      </button>
      {isOpen && (
        <div
          onClick={toogleModal}
          className="ui-absolute ui-flex ui-justify-center ui-items-center ui-bg-slate-500 ui-bg-opacity-70 ui-w-screen ui-h-screen ui-left-0 ui-top-0"
        >
          <div className="ui-flex ui-flex-col ui-bg-white  ui-rounded-md ui-w-1/3 ui-border ui-border-slate-300">
            {/* modal header */}
            <div className="ui-flex ui-justify-between ui-p-4 ui-items-center ui-border-b-2">
              <h5 className="ui-font-semibold ui-text-xl">{title}</h5>
              <button onClick={toogleModal} aria-label="Close">
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
            <div className="ui-px-4 ui-py-6">
              <p>{description}</p>
            </div>
            {/* modal footer */}
            <div className="ui-flex ui-justify-end ui-p-4 ui-border-t-2">
              <button
                className="ui-bg-red-500 ui-text-white ui-py-2 ui-px-4 ui-rounded-md hover:ui-bg-red-300"
                onClick={toogleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
