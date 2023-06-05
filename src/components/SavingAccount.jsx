import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const SavingAccount = (props) => {

    // API Functions

    const [credentials, setCredentials] = useState({ holdername: "", aadharno: "", pancardno: "", age: "", Mpin_No: "" });
    let navigate = useNavigate();


    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    // Connecting the api from frontend to backend to store user personal details into the database and create their saving account.

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Api call
        const { holdername, aadharno, pancardno, age, Mpin_No } = credentials;
        const response = await fetch("http://localhost:5000/api/auth/createaccount", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ holdername, aadharno, pancardno, age, Mpin_No })
        });

        const json = await response.json()
        console.log(json)


        if (json.success) {
            // Saving the auth token in the local storge of the user

            localStorage.setItem('token', json.authtoken);
            props.showAlert("Account Created Successfully ", "success");
            // props.showAlert("Account Created Successfully ", "success");
            navigate('/accountoverview');
            window.location.reload(false);
        }
        else {
            props.showAlert("Invalid Details ", "danger");
            console.log("Error Occurred account has not been created yet")
        }
    }



    // Main Function

    return (
        <>
            <br />
            <br />
            <div className="container my-5">
                <h2 className=' text-center'>Open Savings Account in <span className="brand-look fw-bold font-fam-roboto ">American-</span><span className='brand-look-2 fw-bold font-fam-roboto '>Express</span>.</h2>
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
                        <form className="php-email-form" onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-md-6 form-group">
                                    <label className="form-label font-fam-ssp fs-5">Full name: </label>
                                    <input type="text" onChange={onChange} value={credentials.holdername} autoComplete='off' name="holdername" className="form-control" id="name" placeholder="Enter Your Full Name" required />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label className="form-label font-fam-ssp fs-5">Pancard No: </label>
                                    <input type="text" onChange={onChange} value={credentials.pancardno} autoComplete='off' name="pancardno" className="form-control" id="name" placeholder="Eg: GY765E8" minLength="6" maxLength="6" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-12 form-group">
                                    <label className="form-label font-fam-ssp fs-5">Aadhar-card No: </label>
                                    <input type="text" onChange={onChange} value={credentials.aadharno} autoComplete='off' name="aadharno" className="form-control" id="name" placeholder=" Eg: 7858347212" minLength="8" maxLength="8" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-md-6 form-group">
                                    <label className="form-label font-fam-ssp fs-5">Age: </label>
                                    <input type="number" className='form-control' placeholder='Eg: 23' onChange={onChange} value={credentials.age} autoComplete='off' name="age" minLength="2" maxLength="2" id="" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label className="form-label font-fam-ssp fs-5">Set MPIN Number: </label>
                                    <input type="password" className='form-control' placeholder='Eg: 123456' onChange={onChange} value={credentials.Mpin_No} autoComplete='off' minLength="6" maxLength="6" name="Mpin_No" id="" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">

                                <div className="form-check my-3">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Agree to all bank agreements rules and policies.
                                    </label>
                                </div>

                                <Link className='text-decoration-underline'>Use Virtual keypad</Link>
                            </div>

                            <div className="text-center"><button className="button-58 px-4 py-3" type="submit">Create Account</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SavingAccount
