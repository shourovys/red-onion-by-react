import React from 'react';

const PlaceOrderFrom = (props) => {


    const activeMaker = (e) => {
        props.setActiveBtn(true)
        e.preventDefault()
    }

    return (
        <div className="formContainer">

            <form >
                <input name="adders"
                    placeholder='Deliver to door'
                />

                <input name="rood"
                    placeholder='107 Rd No *'
                />

                <input name="floor"
                    placeholder='Flat or Floor'
                />

                <input name="business"
                    placeholder='Confirm Password'
                />

                {/* <input onClick={activeMaker} id='logInBtn' type="submit" /> */}
                <button id='logInBtn' onClick={activeMaker}> submit</button>
            </form>
        </div>
    );
};

export default PlaceOrderFrom;