import './CarsPage.css'
import React, { useState } from 'react'
import CarItem from '../../components/CarItem/CarItem'

const CarsPage = () => {

    const [carsArr, setCarsArr] = useState([
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
    ])
    const [enteredBran, setEnteredBran] = useState("");
    const [enteredModel, setEnteredModel] = useState("");
    const [enteredMileage, setEnteredMileage] = useState("");
    const [enteredBasePrice, setEnteredBasePrice] = useState("");
    const [enteredColor, setEnteredColor] = useState("");
    const [enteredEngine, setEnteredEngine] = useState("");

    const submitHandler = (event) => {
        event.preventDefault()
        const newCar = {
            brand: enteredBran,
            model: enteredModel,
            engine: enteredEngine,
            basePrice: enteredBasePrice,
            millage: enteredMileage,
            color: enteredColor
        }
        setCarsArr(prevState => [newCar, ...prevState]);
        setEnteredBran("")
        setEnteredModel("")
        setEnteredMileage("")
        setEnteredBasePrice("")
        setEnteredColor("")
        setEnteredEngine("")
    }

    const renderCarItem = () => carsArr.map((car, index) => <CarItem key={index} data={car} />)

    return (
        <div className='page-content'>
            <form className='create-car-form' onSubmit={submitHandler}>
                <div className='form-control'>
                    <label htmlFor='brand'>Brand: </label>
                    <input
                        type="text"
                        id="brand"
                        value={enteredBran}
                        onChange={(e) => { setEnteredBran(e.target.value) }}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='model' >Model: </label>
                    <input
                        type="text"
                        id="model"
                        value={enteredModel}
                        onChange={(e) => {
                            setEnteredModel(e.target.value)
                        }} />
                </div>
                <div className='form-control'>
                    <label htmlFor='model' >Mileage: </label>
                    <input
                        type="number"
                        id="mileage"
                        placeholder="Enter your car's mileage"
                        value={enteredMileage}
                        onChange={(e) => { setEnteredMileage(e.target.value) }}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='base-price' >Base price: </label>
                    <input
                        type="number"
                        id="base-price"
                        placeholder="Enter your car's base price"
                        value={enteredBasePrice}
                        onChange={(e) => { setEnteredBasePrice(e.target.value) }}
                    />
                </div>
                <div className='form-control'>
                    <label htmlFor='color' >Color: </label>
                    <select
                        id="color"
                        name="color"
                        value={enteredColor}
                        onChange={(e) => { setEnteredColor(e.target.value) }}
                    >
                        <option value="white">White</option>
                        <option value="orange">Orange</option>
                        <option value="red">Red</option>
                        <option value="gray">Gray</option>
                    </select>
                </div>
                <div className='form-control'>
                    <label htmlFor='engine' >Engine: </label>
                    <select
                        id="engine"
                        name="engine"
                        value={enteredEngine}
                        onChange={(e) => { setEnteredEngine(e.target.value) }}
                    >
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="electric">Electric</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                </div>
                <input type="submit" value="ADD" />
            </form>
            <h2 className='page-title'>Cars:</h2>
            <div className='cars-list'>
                {renderCarItem()}
            </div>
        </div>
    )
}

export default CarsPage