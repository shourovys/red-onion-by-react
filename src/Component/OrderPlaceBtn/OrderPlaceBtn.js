import React from 'react';
import { Link } from 'react-router-dom';

const OrderPlaceBtn = (props) => {
    return (
        <div className="checkoutBtnContainer">
            {
                props.activeBtn ?
                    // <Link to="/orderComplete">
                    <button onClick={() => props.setReadyForPayment(true)} id='active' className="checkoutBtn ">
                        Order Conform
                </button>
                    // </Link> 
                    :

                    <button className="checkoutBtn">
                        Order Conform
                </button>
            }
        </div>
    );
};

export default OrderPlaceBtn;