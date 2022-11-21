// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import ShoppingPage from './pages/ShoppingPage/ShoppingPage';

function App() {
  return (
    <>
    <Navigation/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopping-list' element={<ShoppingPage />} />
        <Route path='*' element={<h1>404 ERROR</h1>} />
      </Routes>
    </>
  );
}

export default App;
