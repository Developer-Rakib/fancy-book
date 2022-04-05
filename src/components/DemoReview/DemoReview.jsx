import React from 'react';
import { useNavigate } from 'react-router-dom';
import Review from './Review/Review';
import './DemoReview.css'
import useReviews from '../../CustomHook/useReviews';

const DemoReview = () => {
    let navigat = useNavigate()
    let [reviewsData, setReviewsData] = useReviews();
    return (
        <div className='demuReview-container py-7'>
            <h1 className="text-2xl sm:text-5xl">Customer Review({reviewsData.length})</h1>

            <div className='flex justify-around flex-wrap'>
                {
                    reviewsData.slice(0, 3).map(reviewData => <Review
                        key={reviewData.id}
                        reviewData={reviewData}
                    ></Review>)
                }
            </div>

            <button onClick={() => navigat("/reviews")} >See Review All</button>
        </div>
    );
};

export default DemoReview;