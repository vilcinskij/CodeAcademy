import { createElement } from "./functions.js"
import shop from "./shop.js";

export default function shopsList() {
    const shopsList = createElement({ tag: 'ul', classes: 'shops-list' });

    const shopsArr = [
        {
            title: 'Parduotuvė 1',
            phone: '+37045648879',
            email: 'shop1@parduotuve.lt',
            address: 'Arsenalo g. 5, Vilnius 01143'
        },
        {
            title: 'Parduotuvė 2',
            phone: '+37045648879',
            email: 'shop2@parduotuve.lt',
            address: ' Arsenalo g. 5, Vilnius 01143'
        },
        {
            title: 'Parduotuvė 3',
            phone: '+37045648879',
            email: 'shop3@parduotuve.lt',
            address: ' Arsenalo g. 5, Vilnius 01143'
        },
        {
            title: 'Parduotuvė 4',
            phone: '+37045648879',
            email: 'shop4@parduotuve.lt',
            address: ' Arsenalo g. 5, Vilnius 01143'
        }

    ];

    shopsArr.map(shopsItem => {
        shopsList.append(shop(shopsItem))
    })
    return shopsList
}


// email:,
// address: