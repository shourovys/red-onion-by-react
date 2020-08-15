import React from 'react';
import { useForm } from 'react-hook-form';

const PlaceOrderFrom = (props) => {
    const { register, handleSubmit, watch, errors } = useForm()


    const activeMaker = () => {
        props.setActiveBtn(true)
    }

    return (
        <div className="formContainer">

            <form >
                {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                <input name="adders"
                    ref={register({ required: true })}
                    placeholder='Deliver to door'
                />
                {errors.name && <span>adders is required</span>}

                <input name="rood"
                    ref={register({ required: true })}
                    placeholder='107 Rd No *'
                />
                {errors.rood && <span>Rood adders is required</span>}

                <input name="floor"
                    ref={register({ required: true })}
                    placeholder='Flat or Floor'
                />
                {errors.floor && <span>Flat or Floor is required</span>}

                <input name="business"
                    ref={register()}
                    placeholder='Confirm Password'
                />

                <input onClick={activeMaker} id='logInBtn' type="submit" />

            </form>
        </div>
    );
};

export default PlaceOrderFrom;