import React, { useState } from 'react';
import { useAuth } from './Auth';

const SineIn = () => {
    const auth = useAuth()

    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')


    const handelLogin = (event) => {
        auth.logInWithEmail(userEmail, userPass)
        event.preventDefault()
    }



    const takeData = (event) => {
        if (event.target.name === 'email') {
            setUserEmail(event.target.value)
        } else {
            setUserPass(event.target.value)
        }
        event.preventDefault()
    }


    return (
        <div>
            <form >
                <input name="email"
                    placeholder='Email Address'
                    onBlur={takeData}
                />

                <input name="password"
                    type="password"
                    placeholder='password'
                    onBlur={takeData}
                />
                <button id='logInBtn' onClick={handelLogin}> LogIn</button>
            </form>
        </div>
    );
};

export default SineIn;