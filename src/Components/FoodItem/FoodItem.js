import React from 'react';
import './FoodItem.css'

const FoodItem = (props) => {
    const { id, name, category, shotDescription, description, price, img } = props.food
    return (
        <div className='foodItem'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{shotDescription}</p>
            <h3>${price}</h3>

        </div>
    );
};

export default FoodItem;