import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const phoneRef = useRef('');
    const nameRef = useRef('');
    const addressRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const address = addressRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;

        console.log(name, address, email, phone);
        navigate('/home');
        window.alert("Thanks. Your order will be shortly confirmed.");
    }
    return (
        <div className="container py-4 mt-5">
            <div className="row g-0 align-items-center mt-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card cascading-right card-bg">
                        <div className="card-body p-5 shadow-5 text-center">
                            <h2 className="fw-bold mb-5">Please fill up the form to checkout!</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-outline mb-4">
                                    <input ref={nameRef} type="text" id="form3Example3" className="form-control" required />
                                    <label className="form-label" for="form3Example3">Name</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input ref={addressRef} type="text" id="form3Example3" className="form-control" required />
                                    <label className="form-label" for="form3Example3">Address</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input ref={emailRef} type="email" id="form3Example3" className="form-control" required />
                                    <label className="form-label" for="form3Example3">Email address</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input ref={phoneRef} type="number" id="form3Example4" className="form-control" required />
                                    <label className="form-label" for="form3Example4">Phone No</label>
                                </div>
                                <button type="submit" className="btn button-style btn-block mb-4">
                                    Check-Out
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0 mt-5">
                    <img src="https://images.unsplash.com/photo-1524072704778-007808d701d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNob3BwaW5nJTIwY2FydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="w-100 rounded-4 shadow-4"
                        alt="" />
                </div>
            </div>
        </div>
    );
};

export default CheckOut;