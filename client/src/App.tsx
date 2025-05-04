import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from "aos";
import './App.css';
import 'aos/dist/aos.css'
import Home from './pages/Home.tsx';
function AOSWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true, // Animate only once per element
    });
    AOS.refresh(); // Refresh AOS on route change
  }, [location.pathname]); // Re-run effect when the route changes
  return <>{children}</>;
}

function App() {
  // const [count] = useState(0);
  return (
    <Routes>
      <Route path="/" element={
        <AOSWrapper>
          <Home />
        </AOSWrapper>
      } />
    </Routes>
  )
}

export default App;