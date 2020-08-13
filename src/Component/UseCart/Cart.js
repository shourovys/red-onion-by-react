import React from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import foodData from '../../fakeData';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';


const CartContext = createContext()

export const useCart = () => useContext(CartContext)

const CartContextProvider = (props) => {
    const [orderedFoods, setOrderedFoods] = useState([])//set all added food
    const addedFoodKeyQuantity = getDatabaseCart()//take addedFood key and quantity form local
    const addedFoodId = Object.keys(addedFoodKeyQuantity)//take all key

    useEffect(() => {//find added food dtls data from foodData bass
        let addedFood = addedFoodId.map(id => {
            let food = foodData.find(fd => fd.id === id);
            food.quantity = addedFoodKeyQuantity[id];
            return food
        })
        setOrderedFoods(addedFood);
    }, [])

    return (
        <CartContext.Provider
            value={orderedFoods}>
            {props.children}
        </CartContext.Provider>

    );
};

export default CartContextProvider;