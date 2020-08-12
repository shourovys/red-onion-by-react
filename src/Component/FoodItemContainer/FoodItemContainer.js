import React from 'react';
import foodData from '../../fakeData';
import FoodItem from '../FoodItem/FoodItem';
import { useState } from 'react';
import './FoodItemContainer.css'

const FoodItemContainer = (props) => {
    const [data, setData] = useState(foodData)

    //take selected category Name by useing props
    const categoryName = props.CategoryName
    //take current category data Array by filtering all data
    const currentFood = data.filter(food => food.category === categoryName)

    return (
        <div className="foodItemContainer">
            {
                currentFood.map(food =>
                    <FoodItem
                        food={food}
                        key={food.id}
                    ></FoodItem>)
            }
        </div>
    );
};

export default FoodItemContainer;