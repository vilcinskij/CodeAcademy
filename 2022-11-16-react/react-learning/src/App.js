// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import TodoPage from './pages/TodoPage/TodoPage';
import Home from './pages/Home/Home';
import ShoppingPage from './pages/ShoppingPage/ShoppingPage';
import CitiesPage from './pages/CitiesPage/CitiesPage';
import CarsPage from './pages/CarsPage/CarsPage';
import CounterPage from './pages/CounterPage/CounterPage';

function App() {
  return (
    <>
    <Navigation/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopping-list' element={<ShoppingPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/cars' element={<CarsPage />} />
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='/counter' element={<CounterPage />} />
        <Route path='*' element={<h1>404 ERROR</h1>} />
      </Routes>
    </>
  );
}

export default App;
