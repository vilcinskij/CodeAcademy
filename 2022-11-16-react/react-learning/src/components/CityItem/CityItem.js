import React from 'react'

const CityItem = ({ data }) => {
    let { name, population, location, touristAttractions, isCapital } = data
    let classes = isCapital ? 'capital' : '';
    let capitalText = isCapital && ' (capital)';
    let cityDescription = `${name} is located in ${location.continent}, ${location.country} and has population of ${population} people. ${name} is the capital of ${location.country}.`

    function renderTouristAttraction() {
        return (<>
            <h4>{`Main Tourist attractions of ${name} are`}</h4>
            <ul>
                {touristAttractions.map((attraction, index) => <li key={index}>{attraction}</li>)}
            </ul>
        </>)
    }

    return (
        <div className={`city-item${classes}`}>
            <h2 className='city-name'>{name}{capitalText}</h2>
            <p>{cityDescription}</p>
            {renderTouristAttraction()}
        </div>
    )
}

export default CityItem