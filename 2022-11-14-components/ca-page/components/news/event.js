import { createElement } from "../functions.js";

export default function eventItem(props) {
    let { title, day, month, location, img, url } = props
    const event = createElement({ tag: 'div', classes: 'event' });
    event.innerHTML = ` <a href="${url}">
                            <div class="event-date">
                                <div class="day">${day}</div>
                                <div class="month">${month}</div>
                            </div>
                            <span>${location}</span>
                            <h3 class = "event-title">${title}</h3>
                        </a>    
`
    return event
}