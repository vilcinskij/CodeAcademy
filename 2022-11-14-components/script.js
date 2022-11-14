import { createElement } from "./components/functions.js";
import header from "./components/header.js";
import news from "./components/news/news.js";

const root = document.querySelector('#root');

const main = createElement({tag: 'main'});
const maxWidth = createElement({tag: 'div', classes: 'max-width'});

maxWidth.append(news());
main.append(maxWidth);
root.append(header(), main);