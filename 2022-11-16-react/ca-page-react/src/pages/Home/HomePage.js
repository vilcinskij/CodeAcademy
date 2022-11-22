import './HomePage.css'
import CodeAcademyPulse from './HomePageSections/CodeAcademyPulse'
import Differences from './HomePageSections/Differences'
import Events from './HomePageSections/Events'
import HeroBox from './HomePageSections/HeroBox'
import HeroesVideo from './HomePageSections/HeroesVideo'
import Partners from './HomePageSections/Partners'
import YouCan from './HomePageSections/YouCan'
import YourWay from './HomePageSections/YourWay'

export default function HomePage() {
    return (
        <>
            <HeroBox />
            <CodeAcademyPulse />
            <YouCan />
            <HeroesVideo />
            <Differences />
            <YourWay />
            <Partners />
            <Events />
        </ >
    )
}