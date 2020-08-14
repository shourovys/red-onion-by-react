import * as firebase from "firebase/app";
import "firebase/auth";
import React, { createContext, useContext, useEffect } from 'react';
import firebaseConfig from "../../FirebassConfig";
import { useState } from "react";
import { Route, Redirect } from "react-router-dom";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export function PrivateRoute({ children, ...rest }) {
    const auth = useAuth()
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.currentUser ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}



const Auth = () => {
    const [currentUser, setCurrentUser] = useState(null)

    console.log(currentUser);
    //this function take out user info
    const getUserInfo = user => {
        return {
            name: user.displayName,
            email: user.email,
        }
    }

    //Sign up new users
    const createUserWithEmail = (name, email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function (result) {
                firebase.auth().currentUser.updateProfile({
                    displayName: name
                })
                    .then(res => {
                        const newUser = getUserInfo(result.user)
                        setCurrentUser(newUser)
                    })
                    .catch(err => console.log(err))

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
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                const change = "hello"
                return change
            })
            .catch(function (error) {
                // Handle Errors here.
                console.log(error)
            });
    }

    const sineOut = () => {
        return firebase.auth().signOut().then(function () {
            setCurrentUser(null)
        }).catch(function (error) {
            // An error happened.
        });
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const newUser = getUserInfo(user)
                setCurrentUser(newUser)
            }
            else {
                // User is signed out.
                setCurrentUser(null)
            }
        })

    }, [])

    return (
        {
            createUserWithEmail,
            logInWithEmail,
            sineOut,
            currentUser
        }
    );
};



// creat a context api for pass user state
const AuthContext = createContext()
export const AuthContextProvider = (props) => {
    const auth = Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}
export const useAuth = () => useContext(AuthContext)