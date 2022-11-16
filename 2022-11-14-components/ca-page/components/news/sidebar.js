import { createElement } from "../functions.js";
import events from "./events.js";
import podcasts from "./podcasts.js";

export default function () {
    const sidebar = createElement({ tag: 'div', classes: 'sidebar' });
    sidebar.append(podcasts(), events())
        
        return sidebar
    }


    // <a href="#" class="all-news-link">Daugiau</a>    </a>