import React from 'react';
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Review.css'
import { Fade } from 'react-reveal';

const Review = ({ reviewData }) => {
    let { name, comment, rating, saticpaction, userImg } = reviewData;
    return (
        <Fade top>
            <div className='py-4 sm:py-10'>
                <div className='reveiw' title={comment}>
                    <p className=''>{comment.slice(0, 100)}...</p>
                    <div className="clint-img">
                        <img src={userImg} alt="" />
                    </div>


                    <h3>{name}</h3>
                    <h4>{saticpaction}</h4>
                    <h3 className="pt-1 w-2/6 mx-auto">
                        <Rating
                            initialRating={rating}
                            emptySymbol={<FontAwesomeIcon style={{ color: 'gray' }} icon={faStar} />}
                            fullSymbol={<FontAwesomeIcon style={{ color: 'orange' }} icon={faStar} />}
                            readonly
                        ></Rating>
                    </h3>
                </div>
            </div>
        </Fade>
    );
};


export default Review;