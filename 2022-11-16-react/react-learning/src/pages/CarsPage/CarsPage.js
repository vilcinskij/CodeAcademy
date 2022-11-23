import './CarsPage.css'
import React from 'react'
import CarItem from '../../components/CarItem/CarItem'

let carsArr = [
    {
        brand: 'Hyundai',
        model: 'i40',
        engine: 'petrol',
        basePrice: '8000',
        millage: '270000',
        color: 'white',
        image: "https://static.autobonus.lt/foto/2105/1/big/195156-hyundai-i40-3069.jpg"
    },
    {
        brand: 'VW',
        model: 'Polo',
        engine: 'diesel',
        basePrice: '3000',
        millage: '340000',
        color: 'orange',
        image: "https://img.autogidas.lt/10_1_7091765/volkswagen-polo-2007-2009.jpg"
    },
    {
        brand: 'Tesla',
        model: 'Model S',
        engine: 'electric',
        basePrice: '30000',
        millage: '40000',
        color: 'red',
        image: "https://cdn.motor1.com/images/mgl/gLEpE/s1/tesla-model-s-plaid-in-red.webp"
    },
    {
        brand: 'Toyota',
        model: 'Prius',
        engine: 'hybrid',
        basePrice: '6000',
        millage: '520000',
        color: 'gray',
        image: "https://shiftcars1.imgix.net/content/con1fryOsGNqSTaorzCKuQnVLZp59KNrevSD5CDkwCSrjQorlbewAX"
    }
]

    function renderCarItem() {
        let car = carsArr.map((car, index) => {
            return <CarItem key={index} data={car}/>
        })
        return car
    }

const CarsPage = () => {
    return (
        <div className='cars-list'>
            {renderCarItem()}
        </div>
    )
}

export default CarsPage