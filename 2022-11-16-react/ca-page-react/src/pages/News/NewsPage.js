import './NewsPage.css'
import Event from '../../components/Event/Event';
import Podcast from '../../components/Podcast/Podcast';
import NewsItem from '../../components/NewsItem/NewsItem';
import SectionTitle from '../../components/UI/SectionTitle/SectionTitle';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ReactComponent as ArrowIcon } from '../../img/svg/arrowIcon.svg';
import MaxWidth from '../../components/UI/MaxWidth/MaxWidth';

export default function NewsPage(props) {
    return (
        <MaxWidth>
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
                        <ArrowIcon />
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
        </MaxWidth>
    )
}