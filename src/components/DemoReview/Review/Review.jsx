import React from 'react';
import ReactStars from 'react-rating-stars-component';
import './Review.css'

const Review = ({ reviewData }) => {
    console.log(reviewData);
    let { name, comment, rating, saticpaction, userImg } = reviewData;
    return (
        <div className='py-10'>
            <div className='reveiw' title={comment}>
                <p className=''>{comment.slice(0, 100)}...</p>
                <div className="clint-img">
                    <img src={userImg} alt="" />
                </div>


                <h3>{name}</h3>
                <h4>{saticpaction}</h4>
                <h3 className="pt-1 w-2/5 mx-auto">
                    <ReactStars
                        count={rating}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        color="#FB8200"
                    />
                </h3>
            </div>
        </div>
    );
};

export default Review;