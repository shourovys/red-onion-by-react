import React from 'react';
import foodData from '../../fakeData';
import FoodItem from '../FoodItem/FoodItem';
import { useState } from 'react';
import './FoodItemContainer.css'
import CheckoutButton from '../CheckoutButton/CheckoutButton';

const FoodItemContainer = (props) => {
    const [data, setData] = useState(foodData)

    //take selected category Name by useing props
    const categoryName = props.CategoryName
    //take current category data Array by filtering all data
    const currentFood = data.filter(food => food.category === categoryName)

    return (
        <div className="">
            <div className="foodItemContainer">
                {
                    currentFood.map(food =>
                        <FoodItem
                            food={food}
                            key={food.id}
                        ></FoodItem>)
                }
            </div>
            <div className="">
                <CheckoutButton></CheckoutButton>
            </div>
        </div>
    );
};

export default FoodItemContainer;