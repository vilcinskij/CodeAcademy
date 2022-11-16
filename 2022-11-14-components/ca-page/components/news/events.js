import { createElement } from "../functions.js";
import event from "./event.js";

export default function () {
    const events = createElement({ tag: 'section', classes: 'events' });
    const wrapperTitle = createElement({ tag: 'h2', content: 'Renginiai' })
    const eventsWrapper = createElement({ tag: 'div', classes: 'events-wrapper' })
    const moreEvents = createElement({ tag: 'a', classes: 'all-news-link', content: 'Daugiau' });

    const eventsData = [
        {
            title: "TestCon Europe 2022",
            day: 27,
            month: 'spa',
            location: "Online",
            img: ".../img/test-con-event.png",
            url: "#"
        },
        {
            title: "Intro: Dirbtinis intelektas ir Duomenų mokslas",
            day: 5,
            month: 'rug',
            location: "Online",
            url: "#"
        },
        {
            title: "Studijos 101: po mokslų – karjeros pradžia „Hostinger“",
            day: 21,
            month: 'lie',
            location: "Online",
            url: "#"
        }
    ];

    eventsData.map(eventData => eventsWrapper.append(event(eventData)))
    events.append(wrapperTitle, eventsWrapper);
    return events
}