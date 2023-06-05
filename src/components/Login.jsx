import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Login = (props) => {


    const [credentials, setCredentials] = useState({ CRN_No: "", Mpin_No: "" });
    let navigate = useNavigate();


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({CRN_No: credentials.CRN_No, Mpin_No: credentials.Mpin_No})
        });

        const json = await response.json()
 
        if(json.success){
            // Saving the auth token in the local storge of the user
            localStorage.setItem('token', json.authtoken);
            navigate('/');
            props.showAlert(" Your are Logged in Successfully ", "success ");
            window.location.reload(false);
        }
        else{
            props.showAlert(" Invalid Credentials Try again using correct details", "danger ");
            console.log("Try using proper credentials");
        }
    }


    return (
        <>
        <br />
        <br />
            <div className="container my-5">
                <h2 className='fw-bold text-center'>Login to Access Facilities.</h2>
                <hr style={{
                    height: '4px',
                    background: '#318CE7'
                }}
                />
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img src={require('../images/bk.jpg')} className='img-fluid' width="600px" alt="" />
                    </div>
                    <div className="col-md-6 ms-auto my-5">
                        <h3 className='font-fam-roboto mb-4'>Fill up the details</h3>
                        <form className="php-email-form" onSubmit={handleLogin}>
                            <div className="row mb-3">
                                <div className="col-md-12 form-group">
                                    <label className="form-label font-fam-ssp fs-5">CRN Details: </label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter Your CRN, Username or Card Number to begin" name="CRN_No" onChange={onChange} value={credentials.CRN_No} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-12 form-group">
                                    <label className="form-label font-fam-ssp fs-5">Mpin Number: </label>
                                    <input type="text"  className="form-control" id="name" placeholder="Enter your mpin number" onChange={onChange} name="Mpin_No" value={credentials.Mpin_No} required />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check my-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
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

                            <div className="text-center"><button className=" px-5 button-58 fs-4" type="submit">Login</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
