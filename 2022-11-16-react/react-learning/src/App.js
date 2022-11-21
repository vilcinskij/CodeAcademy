// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home';
import ShoppingList from './pages/ShoppingList/ShoppingList';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shopping-list' element={<ShoppingList />} />
        <Route path='*' element={<h1>404 ERROR</h1>} />
      </Routes>
    </>
  );
}

export default App;
