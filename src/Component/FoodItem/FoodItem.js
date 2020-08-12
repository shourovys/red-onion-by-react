import React from 'react';
import './FoodItem.css'
import { Link } from 'react-router-dom';

const FoodItem = (props) => {
    const { id, name, category, shotDescription, description, price, img } = props.food
    return (
        <div >
            <Link to={'/category/' + id} className="listStyle" >
                <div className='foodItem'>
                    <img src={img} alt="" />
                    <h4>{name}</h4>
                    <p>{shotDescription}</p>
                    <h3>${price}</h3>
                </div>
            </Link>
        </div>
    );
};

export default FoodItem;