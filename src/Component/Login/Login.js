import React, { useState } from 'react';
import logo2 from '../../hot-onion-restaurent-resources/logo2.png'
import Background from '../../hot-onion-restaurent-resources/Background.png'
import './Login.css'
import { useAuth } from './Auth';

import { useForm } from "react-hook-form";
import SineIn from './SineIn';



const Login = () => {
    const [exUser, setExUser] = useState(false)
    const auth = useAuth()

    const handelCreatUser = (name, email, password) => {
        auth.createUserWithEmail(name, email, password)

    }



    const { register, handleSubmit, watch, errors } = useForm();
    //new account handel
    const onSubmit = data => {
        if (data.password === data.confirmPassword) {
            handelCreatUser(data.name, data.email, data.password)
        }
        else {
            alert("Confirm Password is not match")
        }
    }



    const changePage = () => {
        let stats = !exUser
        setExUser(stats)
    }



    return (
        <div style={{ backgroundImage: `url(${Background})` }}
            className="loginContainer">
            <div className='loginFormContainer'>
                <div><img src={logo2} /></div>
                {auth.currentUser !== null ? <h2 className="userName">{auth.currentUser.name} LogIn hear</h2> : ""}
            </div>
            <div className=" formContainer">
                {
                    auth.currentUser === null &&
                    <div>

                        <form style={{ display: exUser ? "none" : "block" }} onSubmit={handleSubmit(onSubmit)}>
                            <input name="name"
                                ref={register({ required: true })}
                                placeholder='Name'
                            />
                            {errors.name && <span>Name is required</span>}

                            <input name="email"
                                ref={register({ required: true })}
                                placeholder='Email Address'
                            />
                            {errors.email && <span>Email is required</span>}

                            <input name="password"
                                ref={register({ required: true })}
                                type="password"
                                placeholder='password'
                            />
                            {errors.password && <span>Password is required</span>}

                            <input name="confirmPassword"
                                ref={register({ required: true })}
                                type="password"
                                placeholder='Confirm Password'
                            />
                            {errors.confirmPassword && <span>ConfirmPassword is required</span>}

                            <input id='logInBtn' type="submit" />

                        </form>
                        {exUser && <SineIn></SineIn>}


                        <p onClick={changePage} className='change'>{exUser ? 'Creat a Account' : 'Already have an account'}</p>
                    </div>
                }







                {
                    auth.currentUser !== null && <button onClick={auth.sineOut} id='logInBtn'>log Out</button>
                }
            </div>
        </div>
    );
};

export default Login;