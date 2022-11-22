import SectionTitle from '../../../components/UI/SectionTitle/SectionTitle'
import './YourWay.css'

const YourWay = () => {
    return (
        <section class="your-way">
            <div class="max-width">
                <SectionTitle />
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
    )
}

export default YourWay