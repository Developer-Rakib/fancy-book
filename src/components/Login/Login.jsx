import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const hadnleLogIn = () => {

    }
    const hndleEmail = () => {

    }
    const hndlePass = () => {

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
                                <p style={{ color: 'red' }}>{ }</p>
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