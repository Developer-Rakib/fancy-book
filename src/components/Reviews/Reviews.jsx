import React from 'react';
import useReviews from '../../CustomHook/useReviews';
import Review from '../DemoReview/Review/Review';
import './Reviews.css'

const Reviews = () => {
    let [reviewsData, setReviewsData] = useReviews();
    return (
        <div className='flex flex-wrap reviews-container'>
            {
                reviewsData.map(reviewData => <Review
                    key={reviewData.id}
                    reviewData={reviewData}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;