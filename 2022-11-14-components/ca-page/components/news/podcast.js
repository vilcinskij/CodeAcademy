import { createElement } from "../functions.js";



export default function () {
    const podcast = createElement({ tag: 'div', classes: 'podcast' });

    const artistImgContainer = createElement({ tag: 'div', classes: 'artist-img' });
    const artistImg = createElement({ tag: 'img', src: './img/podcast-artist.png', alt: 'artist-img' });
    const durationContainer = createElement({ tag: 'div', classes: 'duration' });
    const durationContent = createElement({ tag: 'span', content: 'Trukmė: 7:55' });
    const playButtonContainer = createElement({ tag: 'div', classes: 'play-button' });
    const playButton = createElement({ tag: 'button' });
    const podcastContent = createElement({ tag: 'div', classes: 'podcast-info' });
    const podcastTitle = createElement({ tag: 'h3', content: 'title' });
    const podcastDate = createElement({ tag: 'span', content: '2021-09-02' });

    podcastContent.append(podcastTitle, podcastDate);
    playButtonContainer.append(playButton);
    durationContainer.append(durationContent);
    artistImgContainer.append(artistImg);
    podcast.append(artistImgContainer, durationContainer, playButtonContainer, podcastContent);

    return podcast
}


// async function init2() {
    //     const res = await fetch('./jsons/podcasts.json')
    //     const podcasts = await res.json()

    //          podcasts.map(podcast => {
    //              console.log(podcast);
    //          })

    //  }
    //  init2()