import React from 'react';
import './CheckoutButton.css'
import { useCart } from '../UseCart/Cart';
import { getDatabaseCart, addToDatabaseCart } from '../../utilities/databaseManager';
const CheckoutButton = () => {

    // const addedFoods = useCart()
    // console.log(addedFoods.length);

    //take data form localStorage for active checkoutBtn
    const addedFoodKeyQuantity = getDatabaseCart()
    const addedFoodId = Object.keys(addedFoodKeyQuantity)




    return (
        <div className="checkoutBtnContainer">
            {
                addedFoodId.length ?
                    <button id='active' className="checkoutBtn ">
                        Checkout Your Food
                    </button> :
                    <button className="checkoutBtn">
                        Checkout Your Food
                    </button>
            }
        </div>
    );
};

export default CheckoutButton;