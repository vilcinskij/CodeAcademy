import { Link } from "react-router-dom"

export default function Navigation() {
    return (
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/shopping-list'>Shopping List</Link></li>
            <li><Link to='/ffef'>404-test</Link></li>
        </ul>
    )
}