import React from 'react';
import logo from '../../img/cover.jpeg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-info text-left'>
                <h1 className="text-6xl">This is book Libary</h1>
                <h1 className="text-6xl text-blue-700">This is book shop</h1>
                <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, pariatur! Maiores, dolore, autem laudantium non explicabo dolorum repellat at atque minus tenetur soluta nisi.</p>
                <button className='demoBtn'>Live Demo</button>
            </div>
            <div className='banner-img'>
                <img className='w-full' src={logo} alt="" />
            </div>
        </div>
    );
};

export default Banner;