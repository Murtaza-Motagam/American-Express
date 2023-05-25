import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Profile = () => {

    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        window.location.reload(false);
    }

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row ">
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-body-tertiary acc-border margin-nav sidebar collapse">
                        <div className="position-sticky pt-3 sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link mb-2" aria-current="page" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 feather feather-bar-chart-2 align-text-bottom" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                        Recent Activities
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark font-fam-roboto" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 feather feather-file align-text-bottom" aria-hidden="true"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
                                        Quick Access
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark font-fam-roboto" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 feather feather-shopping-cart align-text-bottom" aria-hidden="true"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                        Purchase Offers
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark font-fam-roboto" to="/accountoverview">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 feather feather-users align-text-bottom" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                        Account
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark font-fam-roboto" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 feather feather-bar-chart-2 align-text-bottom" aria-hidden="true"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                                        Transactions
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark font-fam-roboto" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 feather feather-layers align-text-bottom" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                        Pay and Transfer
                                    </Link>
                                </li>
                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                                <span>Account Profile</span>
                                <Link className="link-secondary" to="/" aria-label="Add a new report">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 feather feather-plus-circle align-text-bottom" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </Link>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <Link className="nav-link text-dark font-fam-roboto" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                        Account Activities
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark font-fam-roboto" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                        Statements
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark" to="/">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 feather feather-file-text align-text-bottom" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                        Deposits and Recurring
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-dark fw-bold logoutHover" data-bs-toggle="modal" data-bs-target="#exampleModal" to="/">
                                        <i className="ms-1 fas fs-4 me-1 fa-solid fa-right-from-bracket"></i>
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    {/* 2nd section */}

                    <div className=" col-md-8 mt-5 ms-5">
                        <h2 className="font-fam-roboto fs-3 text-dark">Recent Transactions</h2>
                        <hr />
                        <table className="table mt-5 fs-5 font-fam-ssp">
                            <thead>
                                <tr>
                                    <th scope="col">Time</th>
                                    <th scope="col">To</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Mode</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">12:08</th>
                                    <td>Julie Yeskov</td>
                                    <td className='fw-bold'>$34</td>
                                    <td>Net Banking</td>
                                </tr>
                                <tr>
                                    <th scope="row">14:22</th>
                                    <td>Mike Tyson</td>
                                    <td className='fw-bold'>$12</td>
                                    <td>Quick Transfer</td>
                                </tr>
                                <tr>
                                    <th scope="row">20:13</th>
                                    <td> - </td>
                                    <td className='fw-bold'>$100</td>
                                    <td>Cash Withdrawal</td>
                                </tr>
                                <tr>
                                    <th scope="row">12:08</th>
                                    <td>Julie Yeskov</td>
                                    <td className='fw-bold'>$34</td>
                                    <td>Net Banking</td>
                                </tr>
                                <tr>
                                    <th scope="row">14:22</th>
                                    <td>Mike Tyson</td>
                                    <td className='fw-bold'>$12</td>
                                    <td>Quick Transfer</td>
                                </tr>
                                <tr>
                                    <th scope="row">20:13</th>
                                    <td> - </td>
                                    <td className='fw-bold'>$100</td>
                                    <td>Cash Withdrawal</td>
                                </tr>
                                <tr>
                                    <th scope="row">12:08</th>
                                    <td>Julie Yeskov</td>
                                    <td className='fw-bold'>$34</td>
                                    <td>Net Banking</td>
                                </tr>
                                <tr>
                                    <th scope="row">14:22</th>
                                    <td>Mike Tyson</td>
                                    <td className='fw-bold'>$12</td>
                                    <td>Quick Transfer</td>
                                </tr>
                                <tr>
                                    <th scope="row">20:13</th>
                                    <td> - </td>
                                    <td className='fw-bold'>$100</td>
                                    <td>Cash Withdrawal</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div >
            </div >

            <br />
            <br />
            <br />

            {/* Logout Modal */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title text-center fs-5 font-fam-roboto" id="exampleModalLabel">Are you sure you want to logout</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="button-24" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
