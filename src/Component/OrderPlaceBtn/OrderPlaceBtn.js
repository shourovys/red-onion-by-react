import React from 'react';
import { Link } from 'react-router-dom';

const OrderPlaceBtn = (props) => {
    return (
        <div className="checkoutBtnContainer">
            {
                props.activeBtn ?
                    <Link to="/placeOrder">
                        <button id='active' className="checkoutBtn ">
                            place Order
                </button>
                    </Link> :

                    <button className="checkoutBtn">
                        place Order
                </button>
            }
        </div>
    );
};

export default OrderPlaceBtn;