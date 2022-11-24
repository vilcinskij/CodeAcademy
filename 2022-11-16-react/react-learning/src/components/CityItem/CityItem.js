import './CityItem.css'
import React from 'react'

const CityItem = ({ data }) => {
    let { name, population, location, touristAttractions, isCapital } = data
    let classes = isCapital ? 'capital' : '';
    let capitalText = isCapital && ' (capital)';
    let capitalDescription = isCapital ? ` ${name} is the capital of ${location.country}.` : '';
    let cityDescription = `${name} is located in ${location.continent}, ${location.country} and has population of ${population} people.${capitalDescription}`

    function renderTouristAttraction() {
        return (<>
            <h4>{touristAttractions.length === 1 ? `Main Tourist attraction of ${name} is` : `Main Tourist attractions of ${name} are`}</h4>
            <ul>
                {touristAttractions.map((attraction, index) => <li key={index}>{attraction}</li>)}
            </ul>
        </>)
    }

    return (
        <div className={`city-item ${classes}`}>
            <h3 className='city-name'>{name}{capitalText}</h3>
            <p>{cityDescription}</p>
            {touristAttractions.length > 0 && renderTouristAttraction()}
        </div>
    )
}

export default CityItem