import React from 'react';
import foodData from '../../fakeData';
import FoodItem from '../FoodItem/FoodItem';
import { useState } from 'react';
import './FoodItemContainer.css'

const FoodItemContainer = () => {
    const [data, setData] = useState(foodData)

    return (
        <div className="foodItemContainer">
            {
                data.map(food =>
                    <FoodItem
                        food={food}
                        key={food.id}
                    ></FoodItem>)
            }
        </div>
    );
};

export default FoodItemContainer;