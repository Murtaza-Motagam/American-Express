import React, {useEffect, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import noteContext from '../context/noteContext';


const Profile = () => {

    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        window.location.reload(false);
    }

    const context = useContext(noteContext);
    const { data, fetchUser } = context;


    useEffect(() => {
        fetchUser();
        // eslint-disable-next-line
    }, [])

   

    return (
        <>
            <br />
            <br />
            <br />
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-4 d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary acc-border" style={{ width: "280px" }}>
                        <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                            <span className="fs-4 fw-bold font-fam-roboto text-center p-2">Account Dashboard</span>
                        </Link>
                        <hr />
                        <ul className="nav nav-pills flex-column mb-auto">
                            <li className="nav-item ">
                                <Link to="/" className="  text-white nav-link font-fam-roboto fs-5 mb-2 active" aria-current="page">
                                    <i className="fa-sharp fa-solid fa-chart-simple fa-lg me-2 text-white" style={{ color: "#364359" }}></i>
                                    Recent Activities
                                </Link>
                            </li>
                            <li className="nav-item  hover-links">
                                <Link to="/accountoverview" className=" m-auto nav-link link-body-emphasis font-fam-roboto fs-5 mb-2">
                                    <i className="fa-solid fa-user me-2 fa-lg" style={{ color: "#364359" }}></i>
                                    Account Overview
                                </Link>
                            </li>
                            <li className="nav-item hover-links">
                                <Link to="/transfer" className=" nav-link link-body-emphasis font-fam-roboto fs-5 mb-2">
                                    <i className="fa-sharp fa-solid fa-money-bill-transfer fa-lg me-2" style={{ color: "#364359" }}></i>
                                    Pay and transfer
                                </Link>
                            </li>
                            <li className="nav-item hover-links">
                                <Link to="/" className=" nav-link link-body-emphasis font-fam-roboto fs-5 mb-2">
                                    <i className="fa-solid fa-magnifying-glass fa-lg me-2" style={{ color: "#364359" }}></i>
                                    Account Activity
                                </Link>
                            </li>
                            <li className="nav-item hover-links">
                                <Link to="/" className=" nav-link link-body-emphasis font-fam-roboto fs-5 mb-2 ">
                                    <i className="fas fa-duotone fa-piggy-bank fa-lg me-2" style={{ color: "#364359" }}></i>
                                    Fixed Deposit
                                </Link>
                            </li>
                            <li className="nav-item hover-links">
                                <Link to="/" className=" nav-link link-body-emphasis font-fam-roboto fs-5 mb-2">
                                    <i className="fa-brands fa-cc-amazon-pay fa-lg me-2" style={{ color: "#364359" }}></i>
                                    Bhim UPI
                                </Link>
                            </li>
                            <li className="nav-item hover-links">
                                <Link to="/" className=" nav-link link-body-emphasis font-fam-roboto fs-5 mb-2">
                                    <i className="fa-solid fa-bolt fa-lg me-2" style={{ color: "#364359" }}></i>
                                    Bill pay & Recharge
                                </Link>
                            </li>
                            <hr />
                            {/* <li className="nav-item logout-hover">
                                <Link to="/" className=" nav-link link-body-emphasis font-fam-roboto fs-5 mb-2">
                                    <i className="fa-solid fa-circle-arrow-left fa-xl me-3"></i>
                                    Logout
                                </Link>
                            </li> */}
                            <div className="dropdown-center text-center fs-4 font-fam-ssp ms-3">
                                <Link to="/" className="  d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-user me-2 fs-3 me-3" style={{ color: "#364359" }}></i>
                                    {data.map((user)=>{
                                        return (
                                            <div key={user._id}>
                                                <span className='font-fam-roboto fw-bold text-primary'>{user.holdername}</span>
                                            </div>
                                        )
                                    })}
                                </Link>
                                <ul className="dropdown-menu text-small shadow fs-5 font-fam-roboto">
                                    <li><Link className="dropdown-item" to="/accountoverview">Profile</Link></li>
                                    <li><Link className="dropdown-item" to="/">Settings</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="/" onClick={handleLogout}>Sign out</Link></li>
                                </ul>
                            </div>
                        </ul>
                    </div>

                    <div className="col-md-8 ms-5 mt-5">
                        <div className="">
                            <h1 className="text-body-emphasis font-fam-poppins">Recent Activities
                                <hr
                                    style={{
                                        height: '3px',
                                        background: 'blue'
                                    }}
                                />
                            </h1>
                            <table className="table font-fam-roboto text-center fs-4">
                                <thead>
                                    <tr>
                                        <th scope="col">Sno</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Transfer Accounts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>12:18 - 9/12 </td>
                                        <td>Julia Vescov</td>
                                        <td>3000$</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>21:21 - 9/13 </td>
                                        <td>Robert William</td>
                                        <td>712$</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>19:44 - 9/19 </td>
                                        <td>Sandra Bullocks</td>
                                        <td>988$</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>13:14 - 9/22 </td>
                                        <td>Joseph Kile</td>
                                        <td>988$</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>21:34 - 9/24 </td>
                                        <td>Mike Canes</td>
                                        <td>198$</td>
                                    </tr>
                                </tbody>
                            </table>


                        </div>
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

export default Profile
