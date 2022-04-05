import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"
import openNav from '../../img/openNav.png'
import closeNav from '../../img/close.png'
import { useState } from 'react';


const Header = () => {
    let [toggle, setToggle] = useState(false);
    const navBtnHndle = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <div className='pt-4 pb-10 nav'>
            <img onClick={navBtnHndle} className='sm:hidden absolute right-8 top-6' width={25} src={toggle ? closeNav : openNav} alt="" />
            <ul className={`flex flex-col sm:flex-row justify-center absolute sm:relative sm:opacity-100 sm:top-0 bg-white w-full py-2 duration-500 ease-out z-10 ${toggle ? "top-12 opacity-100" : "top-[-250px] opacity-0"}`}>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/"}>HOME</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/reviews"}>REVIEWS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/dashboard"}>DASHBOARD</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/blogs"}>BLOGS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/about"}>ABOUT</NavLink>
            </ul>
        </div >
    );
};

export default Header;