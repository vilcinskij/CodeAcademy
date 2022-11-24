import React from 'react'
import CityItem from '../../components/CityItem/CityItem'

let cities = [
    {
        name: 'Sydney',
        population: 5200000,
        location: {
            continent: 'Australia',
            country: 'Australia',
        },
        touristAttractions: ['Sydney Opera House'],
        isCapital: true,
    },
    {
        name: 'Quebec',
        population: 8500000,
        location: {
            continent: 'North America',
            country: 'Canada',
        },
        touristAttractions: ['The Chateau Frontenac'],
        isCapital: false,
    },
    {
        name: 'Rio de Janeiro',
        population: 6700000,
        location: {
            continent: 'South America',
            country: 'Brazil',
        },
        touristAttractions: ['Christ the Redeemer', 'Palacio Pedro Ernesto', 'Tiradentes Palace', 'Guanabara Palace'],
        isCapital: true,
    },
    {
        name: 'Johannesburg ',
        population: 5600000,
        location: {
            continent: 'Africa',
            country: 'South Africa',
        },
        touristAttractions: [],
        isCapital: false,
    },
    {
        name: 'Lima',
        population: 9700000,
        location: {
            continent: 'South America',
            country: 'Peru',
        },
        touristAttractions: ['Lima Metropolitan Cathedral', 'Park of the Reserve', 'Plaza Mayor de Lima', 'La Marina Lighthouse', 'San Isidro'],
        isCapital: true,
    },
    {
        name: 'Dresden',
        population: 500000,
        location: {
            continent: 'Europe',
            country: 'Germany',
        },
        touristAttractions: ['Dresden Castle', 'Church of Our Lady'],
        isCapital: false,
    },
    {
        name: 'London',
        population: 9000000,
        location: {
            continent: 'Europe',
            country: 'UK',
        },
        touristAttractions: ['Trafalgar Square', 'London Eye', 'Tower Bridge'],
        isCapital: true,
    },
    {
        name: 'Vilnius',
        population: 600000,
        location: {
            continent: 'Europe',
            country: 'Lithuania',
        },
        touristAttractions: [],
        isCapital: true,
    },
    {
        name: 'New York',
        population: 8800000,
        location: {
            continent: 'North America',
            country: 'USA',
        },
        touristAttractions: ['Central Park', 'Brooklyn Bridge', 'Grand Central Terminal', 'Statue of Liberty', 'Times Square'],
        isCapital: false,
    },
    {
        name: 'Toronto',
        population: 2800000,
        location: {
            continent: 'North America',
            country: 'Canada',
        },
        touristAttractions: ['CN Tower', 'Ontario Legislative Building', 'Humber Bay Arch Bridge'],
        isCapital: false,
    },
]

const CitiesPage = () => {
    return (
        <div className='page-content'>
            {cities.length > 0 && (
                <div>
                    <h2 className='page-title'>Cities:</h2>
                    {cities.map((city, index) => <CityItem key={index} data={city} />)}
                </div>
            )}
        </div>
    )
}



export default CitiesPage