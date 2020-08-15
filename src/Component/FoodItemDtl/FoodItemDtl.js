import React from 'react';
import './FoodItemDtl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import foodData from '../../fakeData';
import Quantity from '../Quantity/Quantity';

const FoodItemDtl = () => {
    // take the clicked food item id by useing useParams
    const { id } = useParams();
    //find the current food item form foodData
    const thisFood = foodData.find(food => food.id === id)
    const { img, name, description, price } = thisFood;


    return (
        <div className='twoSideContainer'>
            <div className="leftSide">
                <h1>{name}</h1>
                <p>{description}</p>

                <div className="price-quantity-container">
                    <span className='price'>${price}</span>

                    <Quantity
                        id={id}
                        showAddBtn={true}
                        style={{ top: '38px' }}
                        quantity={1}
                    >
                    </Quantity>
                </div>
            </div>

            <div className="rightSide">
                <img src={img} />
            </div>
        </div>
    );
};

export default FoodItemDtl;