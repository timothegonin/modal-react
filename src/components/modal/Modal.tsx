type ModalProps = {
  title: string
  description: string
}

export const Modal = ({ title, description }: ModalProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
