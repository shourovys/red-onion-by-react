import React, { useState, useEffect } from 'react';
import './FoodItemDtl.css'
import { useParams } from 'react-router-dom';
import foodData from '../../fakeData';
import Quantity from '../Quantity/Quantity';

const FoodItemDtl = () => {
    const [thisFood, setThisFood] = useState(null)
    // take the clicked food item id by using useParams
    const { id } = useParams();
    // take this food item form database
    useEffect(() => {
        fetch(`http://localhost:4200/getOne/${id}`)
            .then(res => res.json())
            .then(food => setThisFood(food))

    }, [])



    //find the current food item form foodData
    // const thisFood = foodData.find(food => food.id === id)


    // const { img, name, description, price } = thisFood;


    return (
        <div className='twoSideContainer'>
            {
                thisFood &&
                <div className="leftSide">
                    <h1>{thisFood.name}</h1>
                    <p>{thisFood.description}</p>

                    <div className="price-quantity-container">
                        <span className='price'>${thisFood.price}</span>

                        <Quantity
                            id={thisFood.id}
                            showAddBtn={true}
                            style={{ top: '38px' }}
                            quantity={1}
                        >
                        </Quantity>
                    </div>
                </div>
            }

            {
                thisFood &&
                <div className="rightSide">
                    <img src={thisFood.img} />
                </div>
            }
        </div>
    );
};

export default FoodItemDtl;