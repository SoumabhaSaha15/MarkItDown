// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ToastProvider from './context/Toast/ToastProvider.tsx';
import AuthProvider from './context/Auth/AuthProvider.tsx';
import ThemeProvider from './context/Theme/ThemeProvider.tsx';
import ModalProvider from './context/Dialog/DialogProvider.tsx';
// import ModalProvider from './context/Dialog/DialogProvider';
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <ToastProvider>
    <AuthProvider>
      <ThemeProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </ThemeProvider>
    </AuthProvider>
  </ToastProvider>
  //</StrictMode>
)
