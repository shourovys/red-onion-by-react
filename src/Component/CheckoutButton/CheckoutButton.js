import React from 'react';
import './CheckoutButton.css'
import { getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
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
                    <Link to="/placeOrder">
                        <button id='active' className="checkoutBtn ">
                            Checkout Your Food
                    </button>
                    </Link> :

                    <button className="checkoutBtn">
                        Checkout Your Food
                    </button>
            }
        </div>
    );
};

export default CheckoutButton;