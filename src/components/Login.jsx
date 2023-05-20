import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    return (
        <>
            <div className="container my-5">
                <h2 className='fw-bold text-center'>Login to Access Facilities.</h2>
                <hr style={{
                    height: '4px',
                    background: '#318CE7'
                }}
                />
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img src={require('../images/bk.jpg')} className="img-fluid" width="600px" alt="" />
                    </div>
                    <div className="col-md-6 ms-auto my-5">
                        <h3 className='font-fam-roboto mb-4'>Fill up the details</h3>
                        <form className="php-email-form">
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Enter Your CRN, Username or Card Number to begin" required />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">

                                <div class="form-check my-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Remember me
                                    </label>
                                </div>

                                <Link className='text-decoration-underline'>Use Virtual keypad</Link>
                            </div>
                            <div className="row mb-5">
                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="col-md-5 form-group">
                                        <input type="text" name="name" className="py-3 form-control" id="name" placeholder="Enter the Captcha" required />
                                    </div>
                                    <div className="col-md-6">
                                        <p className="bg-warning fs-4 text-center text-white py-2">23E5Y6</p>
                                    </div>

                                </div>
                            </div>

                            <div className="text-center"><button className=" px-5 btn btn-primary btn-lg" type="submit">Login</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
