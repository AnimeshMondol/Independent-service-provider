import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container mt-5 my-5'>
            <br />
            <h3 className='my-5 fw-bolder text-center'><ins>Some Question Answer..</ins></h3>
            <div className='container mt-5'>
                <h3><span className='fw-bolder text-color'>Q1.</span>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <h5 className='fw-bold text-dark mt-3'>Answer: <span className='fw-light text-light'>By giving safe access to the database directly from client-side code, the Firebase Realtime Database enables you to create complex, collaborative apps. Data is saved locally, and real-time events continue to trigger even when the user is offline, providing a responsive experience.<br />
                    Typically, a server's authentication requires the usage of a user name and password. Cards, retina scans, voice recognition, and fingerprints can also be used to authenticate.
                </span></h5>
            </div>
            <div className='container mt-3'>
                <h3><span className='fw-bolder text-color'>Q2.</span>What other services does firebase provide other than authentication?</h3>
                <h5 className='fw-bold text-dark mt-3'>Answer: <span className='fw-light text-light'>There are some usefull services that Firebase provides other then authentication. They are given bellow;<br />
                    <ul class="list-group container mt-3 w-50 mx-0 mt-4">
                        <li class="list-group-item list-group-item-secondary">Cloud Firestore</li>
                        <li class="list-group-item list-group-item-dark">Hosting</li>
                        <li class="list-group-item list-group-item-secondary">Cloud Functions</li>
                        <li class="list-group-item list-group-item-dark">Cloud Storage</li>
                        <li class="list-group-item list-group-item-secondary">Google Analytics</li>
                        <li class="list-group-item list-group-item-dark">Predictions</li>
                        <li class="list-group-item list-group-item-secondary">Cloud Messaging</li>
                        <li class="list-group-item list-group-item-dark">Dynamic Links</li>
                        <li class="list-group-item list-group-item-secondary">Remot Config</li>
                    </ul>
                </span>
                </h5>
            </div>
            <div className='container mt-3'>
                <h3><span className='fw-bolder text-color'>Q3.</span>What are the difference between authorization and authentication?</h3>
                <h5 className='fw-bold text-dark mt-4'>Answer: <span className='fw-light text-light'>The difference between authorization and authentication are given below; <br />
                    <table class="table container mt-4 table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Authorization</th>
                                <th scope="col">Authentication</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>During the authorization process, the authority of the individual or user to access the resources is verified.</td>
                                <td>The identity of users is verified during the authentication process before they are granted access to the system.</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>While in this process, users or persons are validated.</td>
                                <td>In authentication process, users or persons are verified.</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>While this process is done after the authentication process.</td>
                                <td>It is done before the authorization process.</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>While it needs users privilege or security levels.</td>
                                <td>It needs usually users login details.</td>
                            </tr>
                        </tbody>
                    </table>
                </span>
                </h5>
            </div>
        </div>
    );
};

export default Blogs;