import React from 'react';
import Banner from '../Banner/Banner';
import DemoReview from '../DemoReview/DemoReview';
import './Home.css'

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <DemoReview></DemoReview>
        </div>
    );
};

export default Home;