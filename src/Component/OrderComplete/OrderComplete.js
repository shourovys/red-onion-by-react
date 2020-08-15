import React from 'react';
import map from '../../hot-onion-restaurent-resources/map.png'
import bike from '../../hot-onion-restaurent-resources/Image/bike.png'
import helmet from '../../hot-onion-restaurent-resources/Image/helmet.png'
import './OrderComplete.css'
const OrderComplete = () => {
    return (
        <div className="orderCompleteCont">
            <div className="map">
                <img src={map} alt="" />
            </div>
            <div className="status">
                <img className='bike' src={bike} alt="" />
                <ul >
                    <li>Your location <br /><span> 107 Rd No 8</span></li>
                    <li>Shop Address <br /><span> Gulshan Piaza Restaura GPR</span></li>
                </ul>
                <h1>09:30</h1>
                <p>Estimated delivery time</p>
                <div className="raider">
                    <img className="helmet" src={helmet} alt="" />
                    <div className="hamim">
                        <h4>Hamim</h4>
                        <p>your raider</p>
                    </div>
                </div>
                <button id='active' className="checkoutBtn ">Contact</button>
            </div>
        </div>
    );
};

export default OrderComplete;