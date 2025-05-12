import './App.css'
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import type { ReactNode } from 'react';
function App(): ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
