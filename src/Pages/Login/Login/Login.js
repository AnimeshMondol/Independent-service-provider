import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className="container py-4">
            <div className="row g-0 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card cascading-right card-bg">
                        <div className="card-body p-5 shadow-5 text-center">
                            <h2 className="fw-bold mb-5">Login Here !</h2>
                            <form>
                                <div className="form-outline mb-4">
                                    <input type="email" id="form3Example3" className="form-control" />
                                    <label className="form-label" for="form3Example3">Email address</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input type="password" id="form3Example4" className="form-control" />
                                    <label className="form-label" for="form3Example4">Password</label>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mb-4">
                                    Login
                                </button>
                                <p>Do not have a account? <span>Click Here</span></p>
                                <div className="text-center">
                                    <p>OR Login with:</p>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                        
                                    </button>
                                    <button type="button" className="btn btn-link btn-floating mx-1">
                                       
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                    <img src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-100 rounded-4 shadow-4"
                        alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;