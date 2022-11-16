import './ShopItem.css'

export default function ShopItem(props) {
    let { title, phone, email, address } = props
    return (
        <li className="shop-item">
            <div className="shop-item-description">
                <h3>{title}</h3>
                <p>
                    <ul>
                        <li>Phone: {phone}</li>
                        <li>Email: {email}</li>
                        <li>Address: {address}</li>
                    </ul>
                </p>
            </div>
        </li>
    )
}