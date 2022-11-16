import { createElement } from "./functions.js";

export default function shop(props) {
    let {title, phone, email, address} = props
    const shop = createElement({tag: 'li', classes: 'shop'});
    shop.innerHTML = `
                    <li class="shop-item">
                        <div class="shop-item-description">
                            <h3>${title}</h3>
                            <p>
                            <ul>
                                <li>Phone: ${phone}</li>
                                <li>Email: ${email}</li>
                                <li>Address: ${address}</li>
                            </ul>
                            </p>
                        </div>
                    </li>        
    `
    return shop
}