import { createElement } from "./functions.js";
import shopsList from "./shopsList.js";

export default function contactAddress() {
    const contactAddress = createElement({tag: 'div', classes: 'contact-address'});
    const title = createElement({tag: 'h2', content: 'Find Us'});

    contactAddress.append(title, shopsList())
    return contactAddress
}