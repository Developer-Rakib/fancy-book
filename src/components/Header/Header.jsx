import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"


const Header = () => {

    return (
        <div className='flex justify-between items-center px-24'>
            <ul className='nav'>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/"}>HOME</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/reviews"}>REVIEWS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/dashboard"}>DASHBOARD</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/blogs"}>BLOGS</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/about"}>ABOUT</NavLink>
            </ul>
        </div>
    );
};

export default Header;