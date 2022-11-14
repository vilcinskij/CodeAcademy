import { createElement } from "../functions.js";
import event from "./event.js";

export default function () {
    const events = createElement({ tag: 'section', classes: 'events' });
    const wrapperTitle = createElement({tag: 'h2', content: 'Renginiai'})
    const eventsWrapper = createElement({tag: 'div', classes: 'events-wrapper'})
    eventsWrapper.append(event(), event(), event(), event(), event())
    events.append(wrapperTitle, eventsWrapper);
    return events
}