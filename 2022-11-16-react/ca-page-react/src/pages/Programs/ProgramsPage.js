import { ReactComponent as SalesforceLogo } from '../../img/programs/salesforce.svg'
import { ReactComponent as FrontendLogo } from '../../img/programs/frontend.svg'
import { ReactComponent as TypescriptLogo } from '../../img/programs/ts.svg'
import { ReactComponent as UxuiLogo } from '../../img/programs/uxui.svg'
import MaxWidth from '../../components/UI/MaxWidth/MaxWidth';
import ProgramsItem from '../../components/ProgramsItem/ProgramsItem';
import './ProgramsPage.css';
import ProgramsFilter from './ProgramsPageSections/ProgramsFilter/ProgramsFilter';
import { useEffect } from 'react';
import { useState } from 'react';


export default function ProgramsPage() {

    const programsArr = [
        {
            title: "„Salesforce“ CRM – pradedančių",
            description: "„Salesforce“ – įmonės operacinė sistema, leidžianti skirtingiems padaliniams sklandžiai dalintis informacija, sėkmingiau aptarnauti klientus, didinti produktyvumą, o svarbiausia – efektyviau išnaudoti sukauptus duomenis.",
            label: 'Naujas',
            features: {
                level: '1 lygys',
                time: 'Vakarais'
            },
            logo: <SalesforceLogo />
        },
        {
            title: "Front-end Serverless (223002583)",
            description: "Front-End programuotojas, pasitelkdamas HTML, CSS ir JavaScript, kuria vartotojui matomą sąsają. Todėl jo darbas yra ne tik techninio, bet ir kūrybinio pobūdžio.",
            label: 'Finansuojama UŽT',
            features: {
                time: 'Dienomis'
            },
            logo: <FrontendLogo />
        },
        {
            title: "TypeScript programa (223002404)",
            description: "Front-End programuotojas – tikra būtinybė moderniam verslui, todėl ši sritis yra paklausiausia darbo rinkoje.",
            label: 'Finansuojama UŽT',
            features: {
                time: 'Dienomis'
            },
            logo: <TypescriptLogo />
        },
        {
            title: "Web Dizainas UX/UI – pradedančių",
            description: "Web dizainas UX/UI yra būtina puslapio gyvybės sąlyga. Tai informacijos pateikimas vizualiu būdu siekiant geriausios vartotojo patirties ir maksimaliai atsižvelgiant į jo patogumą bei teikiamą naudą.",
            label: 'Populiaru',
            features: {
                level: '1 lygys',
                time: 'Vakarais'
            },
            logo: <UxuiLogo />
        }
    ]

    const [programs, setPrograms] = useState([])

    useEffect(() => {
        fetch('./movies.json')
            .then(res => res.json())
            .then(programsData => {
                console.log(programsData);
                setPrograms(programsData)
            })
    }, [])

    function renderProgramsItem() {
        let programsItem = programs.map((item, i) => {
            return <ProgramsItem key={i} data={item} />
        })
        return programsItem
    }


    return (
        <MaxWidth>
            <div>
                <h1>Programos</h1>
            </div>
            <div className="main-grid">
                <ProgramsFilter />
                <section className="programs-list">
                    {renderProgramsItem()}
                </section>
            </div>
        </MaxWidth>
    )
}