import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Stocks from './pages/Stocks';
import Stock from './pages/Stock';
import Show from './pages/Show';
import About from './pages/About';
import NoMatch from './pages/NoMatch';

function App() {
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
