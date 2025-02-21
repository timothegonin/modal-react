// import { useEffect, useState } from 'react'

type ModalProps = {
  title: string
  description: string
  modalStatus: boolean
  onToggle: () => void
}

export const Modal = ({
  title,
  description,
  modalStatus,
  onToggle,
}: ModalProps) => {
  if (!modalStatus) return null

  return (
    <div className="ui">
      <div
        onClick={onToggle}
        className="ui-fixed ui-flex ui-justify-center ui-items-center ui-bg-slate-500 ui-bg-opacity-70 ui-h-full ui-left-0 ui-top-0 ui-right-0 ui-bottom-0"
      >
        <div className="ui-flex ui-flex-col ui-bg-white ui-w-full ui-m-4 ui-rounded-md ui-border ui-border-slate-300 min-[500px]:ui-w-3/4 md:ui-w-1/2">
          {/* modal header */}
          <div className="ui-flex ui-justify-between ui-p-4 ui-items-center ui-border-b-2 ui-gap-4">
            <h5 className="ui-font-semibold ui-text-xl">{title}</h5>
            <button onClick={onToggle} aria-label="Close">
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
              onClick={onToggle}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
