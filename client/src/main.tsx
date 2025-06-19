// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ToastProvider from './context/Toast/ToastProvider.tsx'
import AuthProvider from './context/Auth/AuthProvider.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <ToastProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ToastProvider>
  // </StrictMode>,
)
