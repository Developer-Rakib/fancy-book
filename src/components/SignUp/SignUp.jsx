import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    const handleLogIn = () => {

    }
    const handleName = () => {

    }
    const handleEmail = () => {

    }
    const handlePass = () => {

    }
    const handleConfrmPass = () => {

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