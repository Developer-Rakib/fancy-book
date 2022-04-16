import { Link as button, NavLink, useNavigate } from 'react-router-dom';
import "./Header.css"
import openNav from '../../img/openNav.png'
import closeNav from '../../img/close.png'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.init';
import { signOut } from 'firebase/auth';
import toast from 'react-hot-toast';


const Header = () => {
    let [toggle, setToggle] = useState(false);
    const [user, loading, error] = useAuthState(auth);
    let navigat = useNavigate();

    const navBtnHndle = () => {
        setToggle(!toggle)
    }
    const handleLogout = () => {
        signOut(auth).then(() => {
            toast.success('Logout Complete!', { id: "logOut" })
            navigat("/login")

        }).catch((error) => {
            console.log(error.message);
        });

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
                    !user && <NavLink className={({ isActive }) => (isActive ? 'activeColor' : 'navLink')} to={"/login"}>Login</NavLink>
                }
            </ul>
            {
                user &&

                <div className="user flex items-center">
                    <img src={user.photoURL ? user.photoURL : "https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png"} alt="" />
                    <p>{user.email}</p>
                    <button onClick={handleLogout}>LogOut</button>
                </div>

            }
        </div >
    );
}

export default Header;