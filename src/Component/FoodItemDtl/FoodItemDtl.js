import React from 'react';
import './FoodItemDtl.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import foodData from '../../fakeData';
import { useState } from 'react';
import { addToDatabaseCart } from '../../utilities/databaseManager';

const FoodItemDtl = () => {
    // take the clicked food item id by useing useParams
    const { id } = useParams();
    //find the current food item form foodData
    const thisFood = foodData.find(food => food.id === id)
    const { img, name, description, price } = thisFood;

    //in this state we set current quantity value 
    const [count, setCount] = useState(1)
    const addDataInLocalStore = () => {//this function set food id && quantity in localStorage
        addToDatabaseCart(id, count)
        setCount(1)
    }





    return (
        <div className='twoSideContainer'>
            <div className="leftSide">
                <h1>{name}</h1>
                <p>{description}</p>

                <div className="price-quantity-container">
                    <span className='price'>${price}</span>

                    <span className='quantity'>
                        <span
                            // if the count value is <1 then user can Minus 
                            onClick={() => count > 1 && setCount(count - 1)}>
                            <FontAwesomeIcon icon={faMinus} />
                        </span>

                        <div>{count}</div>

                        <span
                            onClick={() => setCount(count + 1)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </span>
                    </span>
                </div>

                <button className="add-to-cart"
                    onClick={addDataInLocalStore}
                >
                    <FontAwesomeIcon icon={faCartPlus} />
                    &nbsp;&nbsp;Add
                </button>

            </div>

            <div className="rightSide">
                <img src={img} />
            </div>
        </div>
    );
};

export default FoodItemDtl;