import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';
import Loading from '../../Shared/Loading/Loading';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Toast, ToastHeader } from 'react-bootstrap';


const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();

    const navigateToSignup = event => {
        navigate('/signup');
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            <Toast>
                <ToastHeader>Email Sent</ToastHeader>
            </Toast>
        }
        else {
            <Toast>
                <ToastHeader>Please Enter Your Email</ToastHeader>
            </Toast>
        }
    }

    return (
        <div className="container py-4 mt-5">
            <div className="row g-0 align-items-center mt-5">
                <div className="col-lg-6 mb-5 mb-lg-0">
                    <div className="card cascading-right card-bg">
                        <div className="card-body p-5 shadow-5 text-center">
                            <h2 className="fw-bold mb-5">Login Here !</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-outline mb-4">
                                    <input ref={emailRef} type="email" id="form3Example3" className="form-control" required />
                                    <label className="form-label" for="form3Example3">Email address</label>
                                </div>
                                <div className="form-outline mb-4">
                                    <input ref={passwordRef} type="password" id="form3Example4" className="form-control" required />
                                    <label className="form-label" for="form3Example4">Password</label>
                                </div>
                                <button type="submit" className="btn button-style btn-block mb-4">
                                    Login
                                </button>
                                {errorElement}
                            </form>
                            <p>Do not have an account? <span><Link to="/signup" className="text-danger fw-bolder pe-auto text-decoration-none" onClick={navigateToSignup}>Click Here</Link></span></p>
                            <p>Forget Password? <button className='btn btn-link text-primary text-decoration-none' onClick={resetPassword}><span>Reset Password</span></button> </p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0 mt-5">
                    <img src="https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="w-100 rounded-4 shadow-4"
                        alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;