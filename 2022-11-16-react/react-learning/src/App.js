// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Navigation from './components/Navigation/Navigation';
import TodoPage from './pages/TodoPage/TodoPage';
import Home from './pages/Home/Home';
import ShoppingPage from './pages/ShoppingPage/ShoppingPage';
import CitiesPage from './pages/CitiesPage/CitiesPage';

function App() {
  return (
    <>
    <Navigation/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopping-list' element={<ShoppingPage />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/cities' element={<CitiesPage />} />
        <Route path='*' element={<h1>404 ERROR</h1>} />
      </Routes>
    </>
  );
}

export default App;
