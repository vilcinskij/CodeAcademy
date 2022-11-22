import SectionTitle from "../../../../components/UI/SectionTitle/SectionTitle"

const ProgramsFilter = () => {
    return (
        <section className="programs-filter">
            <SectionTitle content={'Rastos 31 programos'} />
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
        </section>
    )
}

export default ProgramsFilter