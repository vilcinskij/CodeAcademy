import { createElement } from "../functions.js";

export default function () {
    const sidebar = createElement({ tag: 'div', classes: 'sidebar' });
    sidebar.innerHTML = `<section class="podcasts">
    <h2>Podcastai ir radijo laidos</h2>
    <div class="podcasts-list">
        <div class="podcast-item">
            <dvi class="artist-img">
                <img src="img/podcast-artist.png" alt="">
            </dvi>
            <dvi class="duration">
                <span>Trukmė: 7:55</span>
            </dvi>
            <dvi class="play-button">
                <button></button>
            </dvi>
            <div class="podcast-info">
                <h3>Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                <span>2021-09-02</span>
            </div>
        </div>
        <div class="podcast-item">
            <dvi class="artist-img">
                <img src="img/podcast-artist.png" alt="">
            </dvi>
            <dvi class="duration">
                <span>Trukmė: 7:54</span>
            </dvi>
            <dvi class="play-button">
                <button></button>
            </dvi>
            <div class="podcast-info">
                <h3>Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“
                </h3>
                <span>2021-08-25</span>
            </div>
        </div>
        <div class="podcast-item">
            <dvi class="artist-img">
                <img src="img/podcast-artist.png" alt="">
            </dvi>
            <dvi class="duration">
                <span>Trukmė: 9:22</span>
            </dvi>
            <dvi class="play-button">
                <button></button>
            </dvi>
            <div class="podcast-info">
                <h3>Kaip gyvensime 2031-aisiais? 10 esminių prognozių</h3>
                <span>2021-08-18</span>
            </div>
        </div>
        <div class="podcast-item">
            <dvi class="artist-img">
                <img src="img/podcast-artist.png" alt="">
            </dvi>
            <dvi class="duration">
                <span>Trukmė: 8:32</span>
            </dvi>
            <dvi class="play-button">
                <button></button>
            </dvi>
            <div class="podcast-info">
                <h3>Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“</h3>
                <span>2021-08-11</span>
            </div>
        </div>
    </div>
</section>
<section class="events">
    <h2>Renginiai</h2>
    <a href="#">
        <div class="events-card testcon">
            <div>
                <img src="img/test-con-event.png" alt="">
            </div>
            <div class="events-item">
                <div class="event-date">
                    <div class="day">26</div>
                    <div class="month">spa</div>
                </div>
                <span>Online</span>
                <h3>TestCon Europe 2022</h3>
            </div>
        </div>
        <div class="events-card">
            <div class="events-item">
                <div class="event-date">
                    <div class="day">5</div>
                    <div class="month">rug</div>
                </div>
                <span>Online</span>
                <h3>Intro: Dirbtinis intelektas ir Duomenų mokslas</h3>
            </div>
        </div>
        <div class="events-card">
            <div class="events-item">
                <div class="event-date">
                    <div class="day">21</div>
                    <div class="month">lie</div>
                </div>
                <span>Online</span>
                <h3>Studijos 101: po mokslų – karjeros pradžia „Hostinger“</h3>
            </div>
        </div>
        <a href="#" class="all-news-link">Daugiau</a>
    </a>
</section>`

    return sidebar
}