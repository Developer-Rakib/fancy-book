import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css';
import { auth } from '../../firebase/firebase.init';



const SignUp = () => {
    const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [pass, setPass] = useState({ value: "", error: "" });
    const [conPass, setConPass] = useState({ value: "", error: "" });

    const [
        createUserWithEmailAndPassword
    ] = useCreateUserWithEmailAndPassword(auth);
    const [user, loading, error] = useAuthState(auth);
    const navigat = useNavigate();

    // console.log(name);
    // console.log(email);
    // console.log(pass);
    // console.log(conPass);
    if (user) {
        navigat('/')
        // console.log(user);
    }

    const handleLogIn = (event) => {
        event.preventDefault();
        // console.log(email.value, pass.value);
        createUserWithEmailAndPassword(email.value, pass.value)
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