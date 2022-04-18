import React from 'react';
import googlelogo from '../../../Images/Logo/googlelogo.png';
import gitlogo from '../../../Images/Logo/GitHub-Mark-120px-plus.png';
import './SocialLogin.css'

const SocialLogin = () => {
    return (
        <div className="text-center">
            <p>OR Login with:</p>
            <div className='d-flex justify-content-center'>
                <button type="button" className="btn btn-link button-style2 btn-floating mx-1">
                    <img className='img-size' src={googlelogo} alt="" />
                </button>
                <br />
                <button type="button" className="btn btn-link button-style2 btn-floating mx-1">
                    <img className='img-size2' src={gitlogo} alt="" />
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;