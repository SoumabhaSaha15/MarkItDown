import './App.css'
import 'aos/dist/aos.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { NavBarOutlet } from './layouts/NavBarLayout';
import EditorToolbar from './pages/Editor';
import type { ReactNode } from 'react';
import { Profile } from './pages/Profile';
function App(): ReactNode {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<NavBarOutlet />}>
          <Route index element={<Profile />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<div>Settings Page</div>} />
          <Route path="create" element={<EditorToolbar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
