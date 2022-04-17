import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price, duration} = service;
    const navigate = useNavigate();

    const navigateToDetail = id =>{
        navigate(`/service/${id}`);
    }

    return (
        <div className='col'>
            <div className='bg-color h-100 p-3 d-flex flex-column box-border'>
                <img className='card-img-top img-fluid' src={img} alt="100*100" />
                <div className='card-body'>
                    <h2 className='text-center fw-bolder card-name'>{name}</h2>
                    <hr />
                    <h4 className='text-center fw-bold my-4 fs-2'><span className='text-light'>Price: </span>{price} $</h4>
                    <h6 className='text-center my-4 fs-5'><span className='text-light'>Discription: </span>{description.slice(0, 99)}...<span className='text-info'>See More in details</span></h6>
                    <h6 className='text-center fw-bold my-4 fs-4'><span className='text-light'>Duration: </span>{duration}</h6>
                    <hr />    
                </div>
                <div className='d-flex justify-content-center'>
                    <Button onClick={() => navigateToDetail(id)} className="btn btn-success d-block">Book: {name}</Button>
                </div>
            </div>
        </div>
    );
};

export default Service;