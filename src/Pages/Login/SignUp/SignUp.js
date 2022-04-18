import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {

    const navigate = useNavigate();


    const navigateToLogin = event => {
        navigate('/signup');
    }

    return (
        <div className="container py-4">
            <div className="row g-0 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card cascading-right card-bg">
                        <div className="card-body p-5 shadow-5 text-center">
                            <h2 className="fw-bold mb-5">Sign Up Here !</h2>
                            <form>
                                <div class="form-outline mb-4">
                                    <input type="text" id="form3Example1" class="form-control" />
                                    <label class="form-label" for="form3Example1">Enter Your Name</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example2" className="form-control" />
                                    <label className="form-label" for="form3Example2">Enter Email Address</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="form3Example3" className="form-control" />
                                    <label className="form-label" for="form3Example3">Enter Password</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="form3Example4" className="form-control" />
                                    <label className="form-label" for="form3Example">Confirm Password</label>
                                </div>
                                <button type="submit" className="btn button-style btn-block mb-4">
                                    Sign Up
                                </button>
                            </form>
                            <p>Already have an account? <span><Link to="/login" className="text-danger fw-bold pe-auto text-decoration-none" onClick={navigateToLogin}>Click Here</Link></span></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                    <img src="https://images.unsplash.com/photo-1623705593182-54c59434cc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM1fHxjYW1lcmF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" className="w-100 rounded-4 shadow-4"
                        alt="" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;