import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { useUpdateProfile } from 'react-firebase-hooks/auth';



const SignUp = () => {
    const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [pass, setPass] = useState({ value: "", error: "" });
    const [conPass, setConPass] = useState({ value: "", error: "" });

    // const [
    //     createUserWithEmailAndPassword,
    //     ,
    //     loading,
    //     error,
    // ] = useCreateUserWithEmailAndPassword(auth);
    // const [updateProfile, updating] = useUpdateProfile(auth);
    const [user] = useAuthState(auth);
    const navigat = useNavigate();


    if (user) {
        console.log(user);
        navigat('/')
    }

    const handleLogIn = (event) => {
        event.preventDefault();

        createUserWithEmailAndPassword(auth, email.value, pass.value)
            .then((result) => {
                // Signed in 
                updateProfile(auth.currentUser, {
                    displayName: name.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    // Profile updated!
                    console.log('updated');
                }).catch((error) => {
                    // An error occurred
                    console.log(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        // createUserWithEmailAndPassword(email.value, pass.value);


    }
    const handleName = (event) => {
        setName({ value: event.target.value, error: "" })
    }
    const handleEmail = (event) => {
        setEmail({ value: event.target.value, error: "" })
    }
    const handlePass = (event) => {
        setPass({ value: event.target.value, error: "" })

    }
    const handleConfrmPass = (event) => {
        setConPass({ value: event.target.value, error: "" })
    }
    return (
        <div className='SignIn-container'>
            <div className="SignIn pt-8 pb-5">
                <div className="box">
                    <div className="form">
                        <h1>Sign Up Form</h1>

                        <form onSubmit={handleLogIn}>
                            <div>
                                <input onBlur={handleName} type="text" name="name" placeholder="Enter Your Name" id="" required />
                            </div>
                            <div>
                                <input onBlur={handleEmail} type="email" name="email" placeholder="Enter Your Email" id="" required />
                            </div>
                            <div>
                                <input onBlur={handlePass} type="password" name="password" placeholder="Enter Your Password" id="" required />
                            </div>
                            <div>
                                <input onBlur={handleConfrmPass} type="password" name="confirmPassword" placeholder="Enter Your Confirm Password" id="" required />
                            </div>
                            <div>
                                <input type="submit" value="Sign up" />
                            </div>
                            <p>You already have an account ? <Link to={"/login"}>Login</Link></p>
                        </form>
                        {/* <DirectSignIn></DirectSignIn> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;