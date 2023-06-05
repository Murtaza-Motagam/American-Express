import React, { useContext, useState, useEffect } from 'react'
import noteContext from '../context/noteContext'


const TransferAmount = (props) => {

    const [credentials, setCredentials] = useState({ id: "", accno: "", caccno: "", amount: "", remarks: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    // Api calling for username

    const context = useContext(noteContext);
    const { data, fetchUser, updateBalance } = context;

    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line
    }, [])
    
    const updateAmount = (id) => {
        if(credentials.accno === credentials.caccno){
            updateBalance(id, credentials.amount, credentials.accno);
            props.showAlert("Transcation Made, Money Has been transfered successfully", "success");
            window.location.reload(false);
        }
        else{
            props.showAlert("Please Transfer amount by entering valid credentials.", "Oops! Something Went Wrong");
        }
    }

    return (
        <>
            <br />
            <br />
            <br />
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-5 mx-auto">
                        <div className="section-title">
                            <h2 className=' font-fam-roboto fw-bold mb-4 text-center'>Quick Transfer</h2>
                            <hr
                                style={{
                                    height: '3px',
                                    background: 'blue'
                                }}
                            />
                        </div>
                        {data.map((user) => {
                            return (
                                <div className="d-flex mb-4 bg-light p-3 border-r-1 justify-content-between align-items-center" key={user._id}>
                                    <div className="d-flex align-items-center">
                                        <i className="fa-solid fa-user me-2 fs-3 me-3" style={{ color: "#364359" }}></i>
                                        <span className="font-fam-ssp fs-3">{user.holdername}</span>
                                    </div >
                                    <div className="ms-3">
                                        <span className='font-fam-roboto fs-4 me-2 fw-bold'>Balance: </span>
                                        <span className='font-fam-poppins fw-bold  fs-4'>{user.Balance}</span>
                                    </div>
                                </div>
                            )
                        })}
                        <form className=''>
                            <div className="mb-3 ">
                                <label className="form-label font-fam-roboto fs-5">Bank Name: </label>
                                <select className="form-select font-fam-roboto fs-5" aria-label="Default select example">
                                    <option defaultValue>American-Express</option>
                                    <option value="1">Bank Of California</option>
                                    <option value="2">Bank of Chicago</option>
                                    <option value="3">Bank of Ohio</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label font-fam-roboto fs-5">Account Details: </label>
                                <input type="number" className="form-control fs-5 mb-2 font-fam-roboto" placeholder="Enter account number" maxLength={10} name="accno" onChange={onChange} value={credentials.accno} required autoComplete='off' />
                                <input type="number" className="form-control fs-5 mb-2 font-fam-roboto" placeholder="Confirm account number" maxLength={10} name="caccno" onChange={onChange} value={credentials.caccno} required autoComplete='off' />
                            </div>

                            <div className="mb-3">
                                <label className="form-label font-fam-roboto fs-5">Amount Details: </label>
                                <input type="number" className="form-control fs-5 mb-2 font-fam-roboto" placeholder="Enter amount" required autoComplete='off' name="amount" value={credentials.amount} onChange={onChange} />
                                <input type="text" className="form-control fs-5 mb-2 font-fam-roboto" placeholder="Remarks" onChange={onChange} name="remarks" required autoComplete='off' />
                            </div>
                            {data.map((user) => {
                                return (
                                    <div className="" key={user._id}>
                                        <button type="button" className="button-58 d-block mx-auto fs-4" onClick={() => { updateAmount(user._id) }}>Transfer Amount</button>
                                    </div>
                                )
                            })}
                        </form>
                    </div>
                </div >
            </div >
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

export default TransferAmount
