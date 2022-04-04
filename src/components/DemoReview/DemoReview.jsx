import React from 'react';
import { useNavigate } from 'react-router-dom';
import Review from './Review/Review';
import './DemoReview.css'

const DemoReview = () => {
    let navigat = useNavigate()
    return (
        <div className='demuReview-container py-7'>
            <h1 className="text-5xl">Customer Review({ })</h1>

            <Review></Review>

            <button onClick={() => navigat("/reviews")} >See Review All</button>
        </div>
    );
};

export default DemoReview;