import React from 'react'
import './CarItem.css'

const CarItem = ({ data }) => {
    let { brand, model, engine, basePrice, millage, color, image } = data
    return (
        <div className='car-item'>
            <h2 className='car-title'>{brand} ({model})</h2>
            <div className='car-img'>
                <img src={image} alt="car model brand"/>
            </div>
            <ul className='car-info-list'>
            <li></li>
            <li></li>
            <li></li>
            </ul>
        </div>
    )
}

export default CarItem