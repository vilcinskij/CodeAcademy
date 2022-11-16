import { createElement } from "../functions.js";
import newsItem from "./newsItem.js";

export default function () {
    const mainNewsWrapper = createElement({ tag: 'div', classes: 'main-news' });
    mainNewsWrapper.append(newsItem('main-news-item'), newsItem('main-news-item'));
    return mainNewsWrapper
}