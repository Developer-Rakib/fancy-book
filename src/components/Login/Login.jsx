import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase.init';
import './Login.css';



const Login = () => {
    const [email, setEmail] = useState({ value: "", error: "" });
    const [pass, setPass] = useState({ value: "", error: "" });

    const navigat = useNavigate()
    const [
        signInWithEmailAndPassword,
    ] = useSignInWithEmailAndPassword(auth);
    const [user, loading, error] = useAuthState(auth);

    if (user) {
        navigat('/')
        // console.log(user);
    }

    const hadnleLogIn = (event) => {
        signInWithEmailAndPassword(email.value, pass.value)
        event.preventDefault()
    }
    const hndleEmail = (event) => {
        setEmail({ value: event.target.value, error: "" })
    }
    const hndlePass = (event) => {
        setPass({ value: event.target.value, error: "" })
    }
    return (
        <div className='SignIn-container'>
            <div className="SignIn">
                <div className="box">
                    <div className="form">
                        <h1>Login Form</h1>

                        <form onSubmit={hadnleLogIn}>
                            <div>
                                <input onBlur={hndleEmail} type="email" name="email" placeholder="Enter Your Email" id="" required />

                            </div>
                            <div>
                                <input onBlur={hndlePass} type="password" name="password" placeholder="Enter Your Password" id="" required />
                            </div>
                            <div>
                                <input type="submit" value="Login" />
                            </div>
                            <p>Forgot assword? <a href="">Click Here</a></p>
                            <p>Dont have an account ? <Link to={"/signUp"}>Sign Up</Link></p>
                        </form>
                        {/* <DirectSignIn></DirectSignIn> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;