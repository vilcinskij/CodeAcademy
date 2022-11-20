import './App.css';
import Event from './components/Event/Event';
import Podcast from './components/Podcast/Podcast';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NewsItem from './components/NewsItem/NewsItem';
import SectionTitle from './components/SectionTitle/SectionTitle';
import Sidebar from './components/Sidebar/Sidebar';
import { ReactComponent as ArrowIcon } from './img/svg/arrowIcon.svg';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <div className="max-width">
          <div className="main-grid">
            <section className="news-wrapper">
              <SectionTitle content="Naujienos"></SectionTitle>
              <div className="main-news">
                <NewsItem type="main-news-item"></NewsItem>
                <NewsItem type="main-news-item"></NewsItem>
              </div>
              <div className="second-news">
                <NewsItem type="second-news-item"></NewsItem>
                <NewsItem type="second-news-item"></NewsItem>
                <NewsItem type="second-news-item"></NewsItem>
                <NewsItem type="second-news-item"></NewsItem>
              </div>
              <div className='all-ewents button-wrapper'>
              <a href="./" className="all-news-link">Visos naujienos</a>
              <img src={ArrowIcon} alt="arrow icon"/>
              </div>
            </section>
            <Sidebar>
              <section className="podcasts">
                <SectionTitle content="Podcastai ir radijo laidos"></SectionTitle>
                <div className="podcasts-wrapper">
                  <Podcast></Podcast>
                  <Podcast></Podcast>
                  <Podcast></Podcast>
                  <Podcast></Podcast>
                </div>
              </section>
              <section className="events">
                <SectionTitle content="Renginiai"></SectionTitle>
                <div className="events-wrapper">
                  <Event></Event>
                  <Event></Event>
                  <Event></Event>
                </div>
              </section>
            </Sidebar>
          </div>
        </div>
        <a href="./" className="aplikuok">
          <img src="./img/aplikuok.png" alt="" />
        </a>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
