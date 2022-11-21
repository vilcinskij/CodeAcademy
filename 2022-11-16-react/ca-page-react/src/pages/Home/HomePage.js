import './HomePage.css'

export default function HomePage() {
    return (
        <main>
            <section class="hero-box">
                <div class="max-width">
                    <div class="section-1">
                        <h1>Programuok savo ateitį!®</h1>
                        <p>CodeAcademy programavimo kursai - tiesiausias kelias technologinės karjeros link</p>
                    </div>
                    <div class="for-users">
                        <div class="students">
                            <h2>Studentams</h2>
                            <p>
                                Ar žengi pirmą ar kažkelintą žingsnį link tech išsilavinimo - mes tau padėsim!
                            </p>
                            <p>
                                Tiesiausias kelias link karjeros - per mus. 🏁 CodeAcademy programavimo kursai
                            </p>
                            <a class="link-button" href="./">SUŽINOK DAUGIAU</a>
                        </div>
                        <div class="bussines">
                            <h2>Verslui</h2>
                            <p>
                                Esame geriausias kompanijų draugas Edutech erdvėje.
                            </p>
                            <p>
                                Kelsime Jūsų darbuotojų kompetenciją bei atrasime talentus. 📈CodeAcademy programavimo
                                kursai
                            </p>
                            <a class="link-button" href="./">SUŽINOK DAUGIAU</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="puls max-width">
                <div class="">
                    <h2>CodeAcademy pulsas</h2>
                    <p>
                        Manome, jog technologinis išsilavinimas privalo sekti šiandienos ir rytojaus darbo rinkos
                        tendencijas bei būti prieinamas kiekvienam. 🙌
                        Šiuo principu vadovaudamiesi, kas dieną savo studentams atveriame naujas galimybes. 🔝
                    </p>
                </div>
                <div>
                    <ul class="stat-data">
                        <li>
                            <div class="stat-data-value">398</div>
                            <div class="stat-data-desc">Šiuo metu mokosi studentų</div>
                        </li>
                        <li>
                            <div class="stat-data-value">1359</div>
                            <div class="stat-data-desc">2021 m. baigė studentų</div>
                        </li>
                        <li>
                            <div class="stat-data-value">80%</div>
                            <div class="stat-data-desc">Baigę Pažengusių studijas įsidarbino</div>
                        </li>
                        <li>
                            <div class="stat-data-text">Front-End</div>
                            <div class="stat-data-desc">Populiariausia programa</div>
                        </li>
                    </ul>
                </div>
            </section>
            <section class="i-can">
                <div class="i-can-flex max-width">
                    <div class="i-can-text">
                        <h2>Jei galiu aš - gali ir tu!</h2>
                        <p>Kas sieja buvusį pareigūną, o dabar pensininką Kęstutį, operos solistą Algirdą ir buvusią statybų
                            inžinierę Rugilę? 🤔 </p>
                        <a class="link-button" href="./">IŠGIRSK ISTORIJAS</a>
                    </div>
                    <div class="i-can-img">
                        <img src="pcan.jpg" alt=""/>
                    </div>
                </div>
            </section>
            <section class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </section>
            <section class="differences">
                <div class="max-width">
                    <div>
                        <h2 class="section-title">Atrask skirtumus</h2>
                        <p>Klaidingų pasirinkimų čia nėra – jei mąstai apie programuotojo karjerą, esi teisingame kelyje 💪
                        </p>
                    </div>
                    <table>
                        <tr>
                            <td></td>
                            <td>CodeAcademy</td>
                            <td>Universitetai</td>
                            <td>Kitos programavimo akademijos</td>
                            <td>Online kursai</td>
                        </tr>
                        <tr>
                            <td>Trukmė</td>
                            <td>nuo 2 iki 9 mėn.</td>
                            <td>3-4 metai</td>
                            <td>nuo 1 iki 3 mėn.</td>
                            <td>3-18 mėn.</td>
                        </tr>
                        <tr>
                            <td>Mokymosi valandos</td>
                            <td>nuo 160 iki 1060 val.</td>
                            <td>1600 val.</td>
                            <td>nuo 90 iki 450 val.</td>
                            <td>nuo 20 iki 80 val.</td>
                        </tr>
                        <tr>
                            <td>Darbovietės paieška</td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/decline.svg"
                                loading="lazy" width="16" height="16" alt="✕" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/decline.svg"
                                loading="lazy" width="16" height="16" alt="✕" /></td>
                        </tr>
                        <tr>
                            <td>Karjeros planavimas</td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/decline.svg"
                                loading="lazy" width="16" height="16" alt="✕" /></td>
                        </tr>
                        <tr>
                            <td>Motyvacijos išlaikymo skatinimas</td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/decline.svg"
                                loading="lazy" width="16" height="16" alt="✕" /></td>
                        </tr>
                        <tr>
                            <td>Bendruomenė ir renginiai</td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/decline.svg"
                                loading="lazy" width="16" height="16" alt="✕" /></td>
                        </tr>
                        <tr>
                            <td>Mokymasis nuotoliniu būdu</td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                        </tr>
                        <tr>
                            <td>Lankstus išsimokėjimas</td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/decline.svg"
                                loading="lazy" width="16" height="16" alt="✕" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/decline.svg"
                                loading="lazy" width="16" height="16" alt="✕" /></td>
                        </tr>
                        <tr>
                            <td>Mokėjimas tik po studijų baigimo</td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/decline.svg"
                                loading="lazy" width="16" height="16" alt="✕" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/decline.svg"
                                loading="lazy" width="16" height="16" alt="✕" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/decline.svg"
                                loading="lazy" width="16" height="16" alt="✕" /></td>
                        </tr>
                        <tr>
                            <td>Dėstytojai iš top IT kompanijų</td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/checkmark.svg"
                                loading="lazy" width="18" height="13" alt="✓" /></td>
                            <td><img src="https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/decline.svg"
                                loading="lazy" width="16" height="16" alt="✕" /></td>
                        </tr>
                    </table>

                </div>
            </section>
            <section class="your-way">
                <div class="max-width">
                    <h2>Rinkis savo kelią</h2>
                    <div class="levels">
                        <div class="level-1">
                            <h3>Pradedančių programavimo kursai</h3>
                            <p>Šio tipo programos yra skirtos su programavimu ar kitomis technologijomis nesusipažinusiems
                                žmonėms. 2-3 mėn. kursus galima lengvai derinti su turimu darbu. Norintiems pakeisti savo
                                karjerą šie kursai yra puiki pradžia.</p>
                            <a href="./">Išsirink</a>
                        </div>
                        <div class="level-2">
                            <h3>Pažengusių programavimo studijos</h3>
                            <p>Šio tipo programos yra skirtos žmonėms jau turintiems pradinį žinių bagažą bei norintiems
                                žengti žingsnį link specialybės įgyjimo ir naujos karjeros. Norintiems mokytis
                                rekomenduojame paskirti 100% laiko mokslams.</p>
                            <a href="./">Išsirink</a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="partners">
                <div class="max-width">
                    <h2>Partneriai</h2>
                </div>


            </section>
            <section class="events">
                <div class="max-width">
                    <h2>Renginai</h2>
                </div>

            </section>

        </main >
    )
}