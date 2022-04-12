import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Header.css"
import openNav from '../../img/openNav.png'
import closeNav from '../../img/close.png'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';
import { signOut } from 'firebase/auth';


const Header = () => {
    let [toggle, setToggle] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
    const navBtnHndle = () => {
        setToggle(!toggle)
    }
    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <div className='pt-4 pb-10 nav  z-10'>
            <img onClick={navBtnHndle} className='sm:hidden absolute right-8 top-6' width={25} src={toggle ? closeNav : openNav} alt="" />
            <ul className={`flex flex-col sm:flex-row justify-center absolute sm:relative sm:opacity-100 sm:top-0 bg-white w-full py-2 duration-500 ease-out ${toggle ? "top-12 opacity-100" : "top-[-250px] opacity-0"}`}>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/"}>HOME</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/reviews"}>REVIEWS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/dashboard"}>DASHBOARD</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/blogs"}>BLOGS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/about"}>ABOUT</NavLink>
                {
                    user ? <NavLink onClick={handleLogout} className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/login"}>Log Out</NavLink>
                        :
                        <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/login"}>Login</NavLink>
                }
            </ul>
            {
                user &&
                <>
                    <div className="user flex items-center">
                        <p>{user.email}</p>
                        <Link onClick={handleLogout} to={"/login"}>Log Out</Link>
                    </div>

                </>
            }
        </div >
    );
};

export default Header;