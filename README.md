# modal-react-vite

A React component provides a reusable modal dialog with customizable content and interaction controls. It allows users to display important messages, forms, or any other content inside a modal overlay.

![TypeScript](https://img.shields.io/badge/Language-TypeScript-2f74c0)
![React](https://img.shields.io/badge/Framework-React-5ed3f3)
![TailwindCSS](https://img.shields.io/badge/Framework-TailwindCSS-36B6F2)

### Features description :

- **Dynamic Title & Description**: The title and description props define the content displayed inside the modal.
- **Controlled Visibility**: The modalStatus prop determines whether the modal is open or closed.
- **Toggle Function**: The onToggle prop is a function that handles opening and closing the modal.

---

---

## Prerequisites

**NodeJS :** (v16.15.0 or later)
**Npm :** (v7.24.0 or later) / **Yarn :** (v1.22.18 or later)

---

---

## Installation

Install with NPM

```bash
npm install modal-react-vite
```

Install with YARN

```bash
yarn add modal-react-vite
```

---

---

## Usage/Examples

```javascript
import { useState } from 'react'
import { Modal } from 'modal-react-vite'

const App = () => {
  const [modalStatus, setModalStatus] = useState(false)
  const modalToggler = () => {
    setModalStatus(!modalStatus)
  }

  return (
    <Modal
      title="Title of the Modal"
      description="Description inside the modal"
      modalStatus={modalStatus}
      onToggle={modalToggler}
    />
  )
}

export default App
```

#### - Props

| Name        | Type                    | Description                              |
| ----------- | ----------------------- | ---------------------------------------- |
| title       | **Required** - string   | Title displayed inside the modal         |
| description | **Required** - string   | Description displayed inside the modal   |
| modalStatus | **Required** - boolean  | Current state of the modal (open/closed) |
| onToggle    | **Required** - function | Function to toggle the modal             |

---

---

## License

[MIT](https://choosealicense.com/licenses/mit/)
