import React, { useState } from 'react';
import PlaceOrderFrom from './PlaceOrderFrom/PlaceOrderFrom';
import './PlaceOrder.css'
import { useCart } from '../UseCart/Cart';
import PlaceOrderCart from './PlaceOrderCart/PlaceOrderCart';
// import foodData from '../../fakeData';
import OrderPlaceBtn from '../OrderPlaceBtn/OrderPlaceBtn';
const PlaceOrder = () => {
    const [readyForPayment, setReadyForPayment] = useState(false)
    console.log(readyForPayment);


    const cart = useCart()
    // const { name } = cart.orderedFoods;
    // const orderedFood = cart.map(fd => fd)
    let totalPrice = 0
    let totalQuantity = 0
    cart.map(fd => {
        totalPrice = totalPrice + Number(fd.price) * fd.quantity
        totalQuantity = totalQuantity + fd.quantity
    })
    const tex = totalPrice / 10

    const delivery = 2
    const grandTotal = totalPrice + tex + delivery
    const makeNumTwoD = (num) => Number(num.toFixed(2))





    const [activeBtn, setActiveBtn] = useState(false)
    return (<div className='placeOrder'>
        {readyForPayment == false &&
            <div className="placeOrderFrom">
                <h4>Edit Delivery Details</h4>
                <hr />
                <PlaceOrderFrom
                    setActiveBtn={setActiveBtn}
                ></PlaceOrderFrom>
            </div>
        }


        <div >
            <p>From <span>Gulshan Plaza Restaura GPR</span></p>
            <p>Arriving in 20-30 min</p>
            <p>107 Rd No 8</p>

            {
                cart.map(orderedFood =>
                    <PlaceOrderCart
                        orderedFood={orderedFood}
                        key={orderedFood.id}
                    >
                    </PlaceOrderCart>)
            }
            <div className="price">
                <p><span>Subtotal {totalQuantity} item</span><span>${makeNumTwoD(totalPrice)}</span></p>
                <p><span>Tex</span><span></span>${makeNumTwoD(tex)}</p>
                <p><span>Delivery fee</span><span></span>${delivery}</p>
                <p><span>Total</span><span>${makeNumTwoD(grandTotal)}</span></p>
            </div>
            <OrderPlaceBtn setReadyForPayment={setReadyForPayment} activeBtn={activeBtn}></OrderPlaceBtn>
        </div>
        {
            readyForPayment &&
            <div className="Payment">
                payment
            </div>
        }

    </div>
    );
};

export default PlaceOrder;