import React from 'react';
import foodData from '../../fakeData';

const InventoryBtn = () => {
    const addData = () => {
        fetch('http://localhost:4200/addFoodData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(foodData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <button onClick={addData}>inventory</button>
        </div>
    );
};

export default InventoryBtn;