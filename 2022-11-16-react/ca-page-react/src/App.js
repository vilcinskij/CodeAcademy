import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/UI/Main/Main';
// import MaxWidth from './components/UI/MaxWidth/MaxWidth';
import ApplyButton from './components/UI/ApplyButton/ApplyButton';
import NewsPage from './pages/News/NewsPage';
import ProgramsPage from './pages/Programs/ProgramsPage';
import HomePage from './pages/Home/HomePage';

function App() {
  return (
    <>
      <Header></Header>
      <Main>
          <Routes>
            <Route path="/naujienos" element={<NewsPage />} />
            <Route path="/programos" element={<ProgramsPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        <ApplyButton />
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
