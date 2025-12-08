import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import { TodoApp } from './components/TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <TodoApp/>
    <ToastContainer
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      draggable
      pauseOnFocusLoss={false}
      pauseOnHover={false}
      theme="light"
      // transition={Bounce}
    />
  </StrictMode>,
)
