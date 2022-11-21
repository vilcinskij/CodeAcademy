import MaxWidth from '../../components/UI/MaxWidth/MaxWidth'
import './ProgramsPage.css'

export default function ProgramsPage() {
    return (
        <MaxWidth>
            <div>
                <h1>Programos</h1>
            </div>
            <div className="main-grid">
                <section className="programs-section">
                    <div className="programs-filter">
                        <h2>Rastos 31 programos</h2>
                        <div className="filter-item">
                            <label for="">Tema</label>
                            <select name="" id="">
                                <option value="">Visos</option>
                                <option value="">Testavimas</option>
                                <option value="">Programavimas</option>
                                <option value="">Dizainas</option>
                                <option value="">Duomenys</option>
                                <option value="">Rinkodara</option>
                            </select>
                        </div>
                        <div className="filter-item">
                            <label for="">Vieta</label>
                            <select name="" id="">
                                <option value="">Visos</option>
                                <option value="">Online</option>
                                <option value="">Vilnius</option>
                                <option value="">Kaunas</option>
                                <option value="">Klaipeda</option>
                            </select>
                        </div>
                        <div className="filter-item">
                            <label for="">Tipas</label>
                            <select name="" id="">
                                <option value="">Visos</option>
                                <option value="">Testavimas</option>
                                <option value="">Programavimas</option>
                                <option value="">Dizainas</option>
                                <option value="">Duomenys</option>
                                <option value="">Rinkodara</option>
                            </select>
                        </div>
                        <div className="filter-item">
                            <label for="">Laikas</label>
                            <div>
                                <input type="checkbox" />
                                <span>Dienomis</span>
                            </div>
                            <div className="">
                                <input type="checkbox" />
                                <span>Vakarais</span>
                            </div>
                        </div>
                        <div className="reset-filter">Išvalyti</div>
                    </div>
                </section>


                <section className="programs-list">
                    <a href="./">
                        <div className="programs-items">
                            <span className="programs-item-label">Naujas</span>
                            <div>
                                <img src="./img/salesforce.svg" alt="" />
                            </div>
                            <h2>„Salesforce“ CRM – pradedančių</h2>
                            <p> „Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai
                                dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o
                                svarbiausia – efektyviau išnaudoti sukauptus duomenis.</p>
                            <ul>
                                <li className="level">1 LYGIS</li>
                                <li className="type">VAKARAIS</li>
                            </ul>
                        </div>
                    </a>
                    <a href="./">
                        <div className="programs-items">
                            <span className="programs-item-label">Finansuojama UŽT</span>
                            <img src="./img/frontend.svg" alt="" />
                            <div>
                                <h2>Front-end Serverless (223002583)</h2>
                            </div>
                            <p> Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą
                                sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio.</p>
                            <ul>
                                <li className="level">1 LYGIS</li>
                                <li className="type">VAKARAIS</li>
                            </ul>
                        </div>
                    </a>
                    <a href="./">
                        <div className="programs-items">
                            <span className="programs-item-label">Finansuojama UŽT</span>
                            <div>
                                <img src="./img/salesforce.svg" alt="" />
                            </div>
                            <h2>„Salesforce“ CRM – pradedančių</h2>
                            <p> „Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai
                                dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o
                                svarbiausia – efektyviau išnaudoti sukauptus duomenis.</p>
                            <ul>
                                <li className="level">1 LYGIS</li>
                                <li className="type">VAKARAIS</li>
                            </ul>
                        </div>
                    </a>
                    <a href="./">
                        <div className="programs-items">
                            <span className="programs-item-label">Finansuojama UŽT</span>
                            <div>
                                <img src="./img/salesforce.svg" alt="" />
                            </div>
                            <h2>„Salesforce“ CRM – pradedančių</h2>
                            <p> „Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai
                                dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o
                                svarbiausia – efektyviau išnaudoti sukauptus duomenis.</p>
                            <ul>
                                <li className="level">1 LYGIS</li>
                                <li className="type">VAKARAIS</li>
                            </ul>
                        </div>
                    </a>
                </section>
            </div>
        </MaxWidth>
    )
}