import React from 'react'

const AccountDetails = (props) => {

    const { user } = props;


    return (
            <div>
                <div className="row mb-2 ">
                    <div className="col-md-6 ">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 bg-light d-flex flex-column position-static">
                                <h4 className="mb-0 font-fam-poppins">Account Holder</h4>
                                <input type="text" value={user.holdername} className="fs-3 font-fam-roboto text-grey my-3 form-control" readOnly />
                            </div>
                            <div className="col-auto d-none d-lg-block">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 bg-light d-flex flex-column position-static">
                                <h4 className="mb-0 font-fam-poppins font-fam-roboto">Account No: </h4>
                                <input type="text" value={user.accno} className="fs-3 font-fam-roboto text-grey my-3 form-control" readOnly />
                            </div>
                            <div className="col-auto d-none d-lg-block">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-2 ">
                    <div className="col-md-4" >
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 bg-light d-flex flex-column position-static">
                                <h4 className="mb-0 font-fam-poppins">Aadhar Card: </h4>
                                <input type="text" value={user.aadharno} className="fs-3 font-fam-roboto text-grey my-3 form-control" readOnly />
                            </div>
                            <div className="col-auto d-none d-lg-block">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col bg-light p-4 d-flex flex-column position-static">
                                <h4 className="mb-0 font-fam-poppins">Pancard No: </h4>
                                <input type="text" value={user.pancardno} className="fs-3 font-fam-roboto text-grey my-3 form-control" readOnly />
                            </div>
                            <div className="col-auto d-none d-lg-block">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col bg-light p-4 d-flex flex-column position-static">
                                <h4 className="mb-0 font-fam-poppins">CRN No: </h4>
                                <input type="text" value={user.CRN_No} className="fs-3 font-fam-roboto text-grey my-3 form-control" readOnly />
                            </div>
                            <div className="col-auto d-none d-lg-block">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default AccountDetails
