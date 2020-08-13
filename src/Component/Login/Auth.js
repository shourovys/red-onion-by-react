import * as firebase from "firebase/app";
import "firebase/auth";
import React, { createContext, useContext } from 'react';
import firebaseConfig from "../../FirebassConfig";
import { useState } from "react";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);






const Auth = () => {
    const [user, setUser] = useState(null)

    //Sign up new users
    const createUserWithEmail = (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (result) {
                console.log(result);
                // const newUser = getUser(result.user)
                // setUser(newUser)
                return result.user
            })
            .catch(function (error) {

                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error);
                return errorMessage
            });
    }

    //Sign in existing users
    const logInWithEmail = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }

    const sineOut = () => {
        return firebase.auth().signOut().then(function () {
        }).catch(function (error) {
            // An error happened.
        });
    }
    return (
        {
            createUserWithEmail,
            logInWithEmail,
            sineOut
        }
    );
};



// creat a context api for pass user state
const AuthContext = createContext()
export const AuthContextProvider = (props) => {
    const auth = Auth();
    console.log(Auth());
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext)