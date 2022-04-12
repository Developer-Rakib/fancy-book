import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './SignUp.css';
import app, { auth } from '../../firebase/firebase.init';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { UserName } from '../../App';



const SignUp = () => {
    const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [pass, setPass] = useState({ value: "", error: "" });
    const [conPass, setConPass] = useState({ value: "", error: "" });
    let [uName, setUName] = useContext(UserName);

    // const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
    // const [updateProfile, updating] = useUpdateProfile(auth);

    const [user] = useAuthState(auth);
    const navigat = useNavigate();

    if (user) {
        navigat('/')
    }

    const handleSignUp = async (event) => {
        event.preventDefault();


        createUserWithEmailAndPassword(auth, email.value, pass.value)
            .then((result) => {
                setUName(name.value)
                updateProfile(auth.currentUser, {
                    displayName: name.value
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

                        <form onSubmit={handleSignUp}>
                            <div>
                                <input onBlur={handleName} type="displayName" name="displayName" placeholder="Enter Your Name" id="" required />
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