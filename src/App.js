import './styles/App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './Routes';

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav>
          <Link to="/">Feed</Link>
          <Link to="/Mais-vistos">Mais vistos</Link>
        </nav>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
