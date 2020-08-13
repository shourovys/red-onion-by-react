import React from 'react';
import logo2 from '../../hot-onion-restaurent-resources/logo2.png'
import Background from '../../hot-onion-restaurent-resources/Background.png'
import './Login.css'
import { useAuth } from './Auth';

import { useForm } from "react-hook-form";



const Login = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);



    const auth = useAuth()

    const handelCreatUser = () => {
        auth.createUserWithEmail('shourovysys@gmail.com', 'amebolse')
    }

    console.log(password.value)
    return (
        <div style={{ backgroundImage: `url(${Background})` }}
            className="loginContainer">
            <div className='loginFormContainer'>
                <div><img src={logo2} /></div>
            </div>

            <div className=" formContainer">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                        type="email"
                        placeholder='password'
                    />
                    {errors.password && <span>Password is required</span>}

                    <input name="confirmPassword"
                        ref={register({ required: true })}
                        placeholder='Confirm Password'
                    />
                    {errors.confirmPassword && <span>ConfirmPassword is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Login;