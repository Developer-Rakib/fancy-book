import React from 'react';
import logo from '../../img/alchamist.webp'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-info text-left'>
                <h5 className="text-3xl">PAULO CEOLHO</h5>
                <h1 className="text-6xl text-blue-700">This Alchamist</h1>
                <p className='py-5'>The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found .</p>
                <button className='demoBtn'>Live Demo</button>
            </div>
            <div className='banner-img'>
                <img className='w-full' src={logo} alt="" />
            </div>
        </div>
    );
};

export default Banner;