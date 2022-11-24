import React from 'react'
import './CarItem.css'

const CarItem = ({ data }) => {
    let { brand, model, engine, basePrice, millage, color, image } = data
    let carTitle = model ? `${brand} (${model})` : brand
    return (
        <div className='car-item'>
            <h2 className='car-title'>{carTitle}</h2>
            <div className='car-img'>
                <img src={image} alt={`car ${brand} ${model} ${color}"`} />
            </div>

            {(engine || basePrice || millage || color) && (
                <ul className='car-info-list'>
                    {engine && <li><strong>Engine: </strong>{engine}</li>}
                    {color && <li><strong>Color: </strong>{color}</li>}
                    {basePrice && <li><strong>Base price: </strong>{basePrice} €</li>}
                    {millage && <li><strong>Millage: </strong>{millage} km</li>}
                </ul>
            )}
        </div >
    )
}

export default CarItem