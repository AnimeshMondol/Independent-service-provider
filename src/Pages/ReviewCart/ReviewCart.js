import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewCart.css'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewCart = ({ reviews }) => {

    const { name, title, review, ratings, img } = reviews;

    return (
        <div className='col'>
            <div className='bg-color h-100 p-3 rounded-3 d-flex flex-column'>
                <img className='card-img-top img-size1 rounded-circle z-depth-2' src={img} alt="100*100" />
                <div className='card-body'>
                    <h4 className='text-center fw-bolder text-light'>{name}</h4>
                    <h6 className='text-center fw-bold my-4 fs-5'>Title: {title}</h6>
                    <hr />
                    <p className='fw-bold text-danger'>Review: <span className='fw-normal text-dark fs-6'>{review}</span></p>
                </div>
                <div className='card-footer'>
                    <h6 className='text-center'><small>Ratings: {ratings} out of 5 <FontAwesomeIcon className='text-danger' icon={faStar}></FontAwesomeIcon></small></h6>
                </div>
            </div>
        </div>
    );
};

export default ReviewCart;