import React, { useState } from 'react';
import Quantity from '../../Quantity/Quantity';
import './PlaceOrderCart.css'

const PlaceOrderCart = (props) => {
    const { name, img, quantity, price, id } = props.orderedFood

    return (
        <div className="placeOrderCart">
            <img src={img} />
            <dir className="name-price">
                <h5>{name}</h5>
                <h3>${price}</h3>
            </dir><div className="">
                <Quantity
                    style={{ top: '0px' }}
                    id={id}
                    showAddBtn={false}
                    quantity={quantity}
                ></Quantity>
            </div>


        </div>
    );
};

export default PlaceOrderCart;