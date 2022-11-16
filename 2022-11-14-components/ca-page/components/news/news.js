import { createElement } from "../functions.js";
import allNewsLink from "./allNewsLink.js";
import mainNews from "./mainNews.js";
import secondNews from "./secondNews.js";

export default function () {
    const newsElement = createElement({ tag: 'section', classes: 'news-wrapper' });
    const wrapperTitle = createElement({tag: 'h2', content: 'Naujienos'})
    newsElement.append(wrapperTitle, mainNews(), secondNews(), allNewsLink());
    return newsElement
}