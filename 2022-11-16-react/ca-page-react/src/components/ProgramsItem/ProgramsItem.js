import { ReactComponent as SalesforceLogo } from '../../img/programs/salesforce.svg'

export default function ProgramsItem() {
    return (
        <a href="./">
            <div className="programs-items">
                <span className="programs-item-label">Naujas</span>
                <div className='item-logo'>
                    <SalesforceLogo />
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
    )
}