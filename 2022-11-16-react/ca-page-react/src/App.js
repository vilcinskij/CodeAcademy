import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/UI/Main/Main';
import MaxWidth from './components/UI/MaxWidth/MaxWidth';
import ApplyButton from './components/UI/ApplyButton/ApplyButton';
import NewsPage from './pages/News/NewsPage';
import ProgramsPage from './pages/Programs/ProgramsPage';

function App() {
  return (
    <>
      <Header></Header>
      <Main>
        <MaxWidth>
          <Routes>
            <Route path="/naujienos" element={<NewsPage />} />
            <Route path="/programos" element={<ProgramsPage />} />
          </Routes>
        </MaxWidth>
        <ApplyButton />
      </Main>
      <Footer></Footer>
    </>
  );
}

export default App;
