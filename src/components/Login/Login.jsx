import React, { useEffect, useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase.init';
import './Login.css';



const Login = () => {
    const [email, setEmail] = useState({ value: "", error: "" });
    const [pass, setPass] = useState({ value: "", error: "" });

    const navigat = useNavigate()
    const [
        signInWithEmailAndPassword, user, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    // const [user, loading, error] = useAuthState(auth);


    useEffect(() => {
        if (user) {
            toast.success("Successfully Login!", { id: "signin" })
            navigat("/")
        }
    }, [user])
    useEffect(() => {
        if (error) {
            console.log(error.code);
            switch (error.code) {
                case "auth/wrong-password":
                    toast.error('Password is Wrong!', { id: "signup" })
                    break;
                case "auth/too-many-requests":
                    toast.error('Too Many Requests!', { id: "signup" })
                    break;
                case "auth/user-not-found":
                    toast.error('User Not Available, Please Sign Up!', { id: "signup" })
                    break;

                default:
                    toast.error('Somting is wrong', { id: "signup" })
                    break;
            }
        }
    }, [error])




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
                            <div className='input-container'>
                                <input onBlur={hndleEmail} type="email" name="email" placeholder="Enter Your Email" id="" required />

                            </div>
                            <div className='input-container'>
                                <input onBlur={hndlePass} type="password" name="password" placeholder="Enter Your Password" id="" required />
                            </div>
                            <div className='input-container'>
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