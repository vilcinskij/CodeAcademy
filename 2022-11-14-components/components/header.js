import { createElement } from "./functions.js";

export default function () {
    const header = createElement({ tag: 'header', classes: 'main-header' });
    const maxWidth = createElement({ tag: 'div', classes: 'max-width' });

    const logoBox = createElement({ tag: 'div', classes: 'logo-box' });
    const logo = createElement({ tag: 'img', classes: 'logo-img', src: 'https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg', alt: 'CodeAcademy logo black' });

    const navigation = createElement({ tag: 'nav', classes: 'main-nav' });
    const mainMenu = createElement({ tag: 'ul', classes: 'main-menu' });
    const menuItemsArr = [
        'Studentams',
        'Verslui',
        'Programos',
        'Apie mus',
        'Naujienos',
        'IT Testas',
        'Kontaktai',
        'EN'
    ];
    menuItemsArr.map(item => {
        const menuItemLink = createElement({ tag: 'a', content: item, classes: 'menuItemLink', href: '#' });
        const menuItem = createElement({ tag: 'li', classes: 'menu-item' });
        menuItem.append(menuItemLink);
        mainMenu.append(menuItem)
    });

    const callButton = createElement({ tag: 'a', href: 'tel:+37066366555', content: 'SKAMBINTI', classes: 'link-button' })

    logoBox.append(logo)

    navigation.append(mainMenu, callButton)

    maxWidth.append(logoBox, navigation);
    header.append(maxWidth);

    return header
}