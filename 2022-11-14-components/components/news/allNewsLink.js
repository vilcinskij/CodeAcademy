import { createElement } from "../functions.js";

export default function () {
    const allNewsLink = createElement({ tag: 'a', classes: 'all-news-link', content: 'Visos naujienos' })
    return allNewsLink
}