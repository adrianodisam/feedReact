import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MaisVistos from './pages/MaisVistos';
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Mais-vistos" element={<MaisVistos />} />
    </Routes>
  );
}
