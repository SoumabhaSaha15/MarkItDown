// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import ToastProvider from './context/Toast/ToastProvider.tsx';
import AuthProvider from './context/Auth/AuthProvider.tsx';
import ThemeProvider from './context/Theme/ThemeProvider.tsx';
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <ToastProvider>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </ToastProvider>
  //</StrictMode>
)
