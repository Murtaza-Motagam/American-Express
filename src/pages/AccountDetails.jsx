import React from 'react'
import { Link } from "react-router-dom"

const AccountDetails = (props) => {

    const { user } = props;


    return (
        <>
            <div className="container-fluid p-4 bg-sb-container">
                <h3 className='fw-bold font-fam-roboto  text-center mt-5'>Account Dashboard</h3>
                <p className="font-fam-roboto text-dark-grey text-center mb-3">Welcome to American-express
                    <br />
                    Download the app and use.</p>

                <div className="row">

                    <div className="col-md-8 p-2 mx-auto bg-white border-r-custom-2">

                        {/* 1st section */}

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="col-4 mt-4">
                                <div className="row g-0  rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column ">
                                        <p className="mb-0 brand-look fs-5 fw-bold font-fam-roboto">Your Account Number</p>
                                        <p className="mb-0 text-dark fs-5 font-fam-roboto my-2">{user.accno}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />
                        {/* 2nd section */}

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="col-8">
                                <div className="row g-0  rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <p className="mb-0 brand-look fs-5 fw-bold font-fam-roboto">Your CRN</p>
                                        <p className="mb-0 text-dark fs-5 font-fam-roboto my-2">{user.CRN_No}</p>
                                    </div>
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <p className="mb-0 brand-look fs-5 fw-bold font-fam-roboto">Account Holder</p>
                                        <p className="mb-0 text-dark fs-5 font-fam-roboto my-2">{user.holdername}</p>
                                    </div>
                                    <div className="col p-4 d-flex flex-column position-static ms-2">
                                        <p className="mb-0 brand-look fs-5 fw-bold font-fam-roboto" style={{cursor: "pointer"}}>Holding Balance</p>
                                        <p className="mb-0 text-dark fs-5 font-fam-roboto my-2 fw-bold">{user.Balance}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-8 d-flex justify-content-between align-items-center p-3 mx-auto bg-white border-r-custom adSection">
                        <div className="col-5 sec-1">
                            <h4 className='font-fam-roboto fw-bold fs-5 px-3'>Congratulation! You are now eligible for applying the credit card against a fixed deposit.</h4>
                            <div className="list-group my-3 " style={{ border: "none!important" }}>
                                <Link to="/" className="list-group-item list-group-item-action" aria-current="true">
                                    <i className="fa-sharp fa-solid fa-up-right-from-square fa-lg me-2" style={{ color: "#000000" }}></i> Book Fixed Deposit
                                </Link>
                                <Link to="/" className="list-group-item list-group-item-action" ><i className="fa-sharp fa-solid fa-up-right-from-square fa-lg me-2" style={{ color: "#000000" }}></i> Apply For Golden Card.</Link>
                                <Link to="/" className="list-group-item list-group-item-action"><i className="fa-sharp fa-solid fa-up-right-from-square fa-lg me-2" style={{ color: "#000000" }}></i> 500$ reward point on apply new scheme debit card.</Link>
                                <Link to="/" className="list-group-item list-group-item-action"><i className="fa-sharp fa-solid fa-up-right-from-square fa-lg me-2" style={{ color: "#000000" }}></i> Get a free 8$ by opening a DEMAT account.</Link>
                            </div>
                        </div>
                        <div className="col-6">
                            <img src={require('../images/creditcard.jpg')} width="700px" className="img-fluid border-r-extreme" alt="" />
                        </div>
                    </div>
                </div>

            </div >
        </>

    )
}

export default AccountDetails
