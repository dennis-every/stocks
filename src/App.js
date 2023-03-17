import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import Layout from './components/Layout';
import Stocks from './pages/Stocks';
import Stock from './pages/Stock';
import Show from './pages/Show';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Stocks />} />
        <Route path="stocks" element={<Stocks />} />
        <Route path="stock" element={<Stock />}>
          <Route path=":slug" element={<Show />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
