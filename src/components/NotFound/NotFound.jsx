import React from 'react';
import errorImg from '../../img/404-erro.webp'

const NotFound = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <img className='w-full' src={errorImg} alt="" />
        </div>
    );
};

export default NotFound;