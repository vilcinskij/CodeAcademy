import './Header.css'
import MaxWidth from "../UI/MaxWidth/MaxWidth";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <header className="main-header">
            <MaxWidth>
                <div className="header-logo">
                    <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg"
                        alt="CodeAcademy logo black" />
                </div>
                <nav className="main-nav">
                    <ul className="main-menu">
                        <li className="menu-item"><Link to="./">Studentams</Link></li>
                        <li className="menu-item"><Link to="./">Verslui</Link></li>
                        <li className="menu-item"><Link to="/programos">Programos</Link></li>
                        <li className="menu-item"><Link to="./">Apie mus</Link></li>
                        <li className="menu-item"><Link to="/naujienos">Naujienos</Link></li>
                        <li className="menu-item"><Link to="./">IT Testas</Link></li>
                        <li className="menu-item"><Link to="./">Kontaktai</Link></li>
                        <li className="menu-item"><Link to="./">EN</Link></li>
                    </ul>
                    <a className="link-button" href="tel:+37066366555">SKAMBINTI</a>
                </nav>
            </MaxWidth>
        </header>
    )
}
