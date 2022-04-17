import React, { useEffect, useState } from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container pt-5 mt-1'>
            <h2 className='text-center my-3 fw-bold text-color'>Things That Our Customers said!!</h2>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 mt-1'>
                {
                    reviews.map(reviews => <ReviewCart
                        key={reviews.id}
                        reviews={reviews}
                    ></ReviewCart>)
                }
            </div>
            <br />
        </div>
    );
};

export default Review;