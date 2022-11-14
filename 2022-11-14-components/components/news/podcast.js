import { createElement } from "../functions.js";

export default function () {
    const podcast = createElement({ tag: 'div', classes: 'podcast' });
    podcast.innerHTML= ` <dvi class="artist-img">
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
                        </div>`
    return podcast
}