import { createElement } from "../functions.js";
import podcast from "./podcast.js";

export default function () {
    const podcasts = createElement({ tag: 'section', classes: 'podcasts' });
    const wrapperTitle = createElement({tag: 'h2', content: 'Podcastai ir radijo laidos'})
    const podcastsWrapper = createElement({tag: 'div', classes: 'podcasts-wrapper'})
    podcastsWrapper.append(podcast())
    podcasts.append(wrapperTitle, podcastsWrapper);
    return podcasts
}