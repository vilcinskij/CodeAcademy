import { createElement } from "../functions.js";

export default function () {
    const event = createElement({ tag: 'div', classes: 'event' });
    event.innerHTML = `<div class="event-date">
    <div class="day">5</div>
    <div class="month">rug</div>
</div>
<span>Online</span>
<h3>Intro: Dirbtinis intelektas ir Duomenų mokslas</h3>`
    return event
}