import { createElement } from "../functions.js";
import secondNewsItem from "./newsItem.js";

export default function () {
    const secondNews = createElement({ tag: 'div', classes: 'second-news' });
    secondNews.append(secondNewsItem('second-news-item'), secondNewsItem('second-news-item'), secondNewsItem('second-news-item'), secondNewsItem('second-news-item')) 
    return secondNews
}