import contactAddress from "./contactAddress.js";
import contactMap from "./contactMap.js";
import { createElement } from "./functions.js";

export default function contacts() {
    const contacts = createElement({ tag: 'section', classes: 'contacts' });
    contacts.append(contactAddress(), contactMap())
    return contacts
}