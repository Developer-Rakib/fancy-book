import React from 'react';
import useReviews from '../../CustomHook/useReviews';
import Review from '../DemoReview/Review/Review';
import Loading from '../Loading/Loading';
import './Reviews.css'

const Reviews = () => {
    let [reviewsData, setReviewsData] = useReviews();
    return (
        <div className='flex flex-wrap reviews-container'>
            {
                reviewsData.length == 0 ? <Loading></Loading> : reviewsData.map(reviewData => <Review
                    key={reviewData.id}
                    reviewData={reviewData}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;