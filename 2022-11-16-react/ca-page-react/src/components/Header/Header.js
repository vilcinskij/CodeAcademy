export default function Header() {
    return (
        <header className="main-header">
            <div className="max-width">
                <div className="header-logo">
                    <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg"
                        alt="CodeAcademy logo black" />
                </div>
                <nav className="main-nav">
                    <ul className="main-menu">
                        <li className="menu-item"><a href="./">Studentams</a></li>
                        <li className="menu-item"><a href="./">Verslui</a></li>
                        <li className="menu-item"><a href="./">Programos</a></li>
                        <li className="menu-item"><a href="./">Apie mus</a></li>
                        <li className="menu-item"><a href="./">Naujienos</a></li>
                        <li className="menu-item"><a href="./">IT Testas</a></li>
                        <li className="menu-item"><a href="./">Kontaktai</a></li>
                        <li className="menu-item"><a href="./">EN</a></li>
                    </ul>
                    <a className="link-button" href="tel:+37066366555">SKAMBINTI</a>
                </nav>
            </div>
        </header>
    )
}
