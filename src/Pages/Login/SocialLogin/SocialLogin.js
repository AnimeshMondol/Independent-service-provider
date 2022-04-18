import React from 'react';
import googlelogo from '../../../Images/Logo/googlelogo.png';
import gitlogo from '../../../Images/Logo/GitHub-Mark-120px-plus.png';
import fbLogo from '../../../Images/Logo/fblogo.png';
import './SocialLogin.css'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);

    const navigate = useNavigate();

    let errorElement;

    if(loading || loading1 || loading2){
        return <Loading></Loading>
    } 

    if(error || error1 || error2){
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message} {error2?.message}</p>
    }
    if(user || user1 || user2){
        navigate('/home');
    }
    return (
        <div className="text-center">
            {errorElement}
            <div className='d-flex align-items-center'>
                <div style={{ height: '5px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>Or Login With</p>
                <div style={{ height: '5px' }} className='bg-dark w-50'></div>
            </div>
            <div className='d-flex justify-content-center'>
                <button onClick={() => signInWithGoogle()} type="button" className="btn btn-link button-style2 btn-floating mx-1">
                    <img className='img-size' src={googlelogo} alt="" />
                </button>
                <br />
                <button onClick={() => signInWithGithub()} type="button" className="btn btn-link button-style2 btn-floating mx-1">
                    <img className='img-size2' src={gitlogo} alt="" />
                </button>
                <button onClick={() => signInWithFacebook()} type="button" className="btn btn-link button-style2 btn-floating mx-1 ms-3">
                    <img className='img-size2' src={fbLogo} alt="" />
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;