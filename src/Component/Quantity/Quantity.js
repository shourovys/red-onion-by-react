import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { addToDatabaseCart } from '../../utilities/databaseManager';
import "./Quantity.css"

const Quantity = (props) => {
    //in this state we set current quantity value 
    const [count, setCount] = useState(props.quantity)
    const addDataInLocalStore = () => {//this function set food id && quantity in localStorage
        addToDatabaseCart(props.id, count)

    }

    return (
        <div onMouseLeave={addDataInLocalStore}>
            <span
                style={props.style}
                className='quantity'>
                <span
                    // if the count value is <1 then user can Minus 
                    onClick={() => count > 1 && setCount(count - 1)}
                >
                    <FontAwesomeIcon icon={faMinus} />
                </span>

                <div>{count}</div>

                <span
                    onClick={() => setCount(count + 1)}>
                    <FontAwesomeIcon icon={faPlus} />
                </span>
            </span>
            <div className="">
                {props.showAddBtn && <button className="add-to-cart"
                    onClick={addDataInLocalStore}
                >
                    <FontAwesomeIcon icon={faCartPlus} />
                    &nbsp;&nbsp;Add
                </button>}
            </div>
        </div>
    );

};

export default Quantity;