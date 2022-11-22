import './Footer.css'
import { ReactComponent as IgLogo } from '../../img/svg/igLogo.svg';
import { ReactComponent as FbLogo } from '../../img/svg/fbLogo.svg';
import { ReactComponent as InLogo } from '../../img/svg/inLogo.svg';
import MaxWidth from '../UI/MaxWidth/MaxWidth';


export default function Footer() {
    return (
        <footer className="main-footer" >
            <MaxWidth>
                <div className="footer-logo">
                    <img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-white.svg" alt="CodeAcademy logo white" />
                </div>

                <div className="footer-container">
                    <div className="footer-menu-lists">
                        <ul className="main-menu-list">
                            <li className="footer-menu-item"><a href="./">Studentams</a></li>
                            <li className="footer-menu-item"><a href="./">Jei galiu aš – gali ir tu!</a></li>
                            <li className="footer-menu-item"><a href="./">Verslui</a></li>
                            <li className="footer-menu-item"><a href="./">Programos</a></li>
                            <li className="footer-menu-item"><a href="./">Nemokamos Studijos</a></li>
                            <li className="footer-menu-item"><a href="./">UŽT kursai</a></li>
                            <li className="footer-menu-item"><a href="./">Programavimo kalbos</a></li>
                            <li className="footer-menu-item"><a href="./">Apie mus</a></li>
                            <li className="footer-menu-item"><a href="./">Naujienos</a></li>
                            <li className="footer-menu-item"><a href="./">Karjera – We are hiring!</a></li>
                            <li className="footer-menu-item"><a href="./">ES parama</a></li>
                            <li className="footer-menu-item"><a href="./">Kontaktai</a></li>
                        </ul>
                        <div className="address-box">
                            <h4>Vilnius</h4>
                            <ul className="post-address-list">
                                <li className="vilnius-address-item"><a href="./">Saulėtekio al. 15, Vilnius</a></li>
                                <li className="vilnius-address-item"><a href="./">Antakalnio g. 17, Vilnius</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="social-logo">
                        <ul>
                            <li>
                                <a href="./">
                                    <IgLogo />
                                </a>
                            </li>
                            <li>
                                <a href="./">
                                    <FbLogo />
                                </a>
                            </li>
                            <li>
                                <a href="./">
                                    <InLogo />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>
                        © By UAB Programuok | CodeAcademy šeimos narys – <a href="./">CodeAcademy Kids</a>
                    </p>
                </div>
            </MaxWidth>
        </footer >
    )
}