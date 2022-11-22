import { ReactComponent as SalesforceLogo } from '../../img/programs/salesforce.svg'

export default function ProgramsItem({data}) {
    let { title, description, label, features, logo } = data
    return (
        <a href="./">
            <div className="programs-items">
                <span className="programs-item-label">{label}</span>
                <div className='item-logo'>
                    {logo}
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
                <ul>
                    <li className="level">1 LYGIS</li>
                    <li className="type">VAKARAIS</li>
                </ul>
            </div>
        </a>
    )
}