import { createElement } from "../functions.js";
import news from "./news.js";
import sidebar from "./sidebar.js";

export default function () {
    const mainGrid = createElement({ tag: 'div', classes: 'main-grid' });
    mainGrid.append(news(), sidebar());
    return mainGrid
}