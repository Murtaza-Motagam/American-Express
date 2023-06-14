import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Navbar = () => {

    let location = useLocation();


    return (
        <>

            <nav className="navbar navbar-expand-lg ">
                <div className="container py-2 bg-brand-2 nav-border bs-1 fixed-top mt-3">
                    <div className="d-flex flex-column">
                        <Link className="navbar-brand font-fam-ssp fs-3 text-white ms-3" to="/"><i className="fas fs-3 fa-regular fa-building-columns me-2" style={{ color: "#ffffff" }}></i>American-Express</Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse font-fam-poppins fs-5" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-4">
                            <li className="nav-item mx-2">
                                <Link className={`nav-link px-3 text-white ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Business</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link px-3 text-white" to="/">Corporate</Link>
                            </li>
                            <li className="nav-item mx-2 dropdown">
                                <Link className={`nav-link dropdown-toggle text-white ${location.pathname === "/services" ? "active" : ""}`} to="/services" data-bs-toggle="dropdown" role="button" aria-expanded="false">
                                    Services
                                </Link>
                                <ul className="dropdown-menu bg-brand-2">
                                    <li className="dropdown-item"><Link className="dropdown-hover text-white font-fam-roboto fs-5" to="opensavingsaccount">Open Savings Acount</Link></li>
                                    <li className="dropdown-item"><Link className="dropdown-hover text-white font-fam-roboto fs-5" to="/">Open Current Acount</Link></li>
                                    <li className="dropdown-item"><Link className="dropdown-hover text-white font-fam-roboto fs-5" to="/">Open Business Acount</Link></li>
                                    <li className="dropdown-item"><Link className="dropdown-hover text-white font-fam-roboto fs-5" to="/">Open FD For Long-term</Link></li>
                                    <li className="dropdown-item"><Link className="dropdown-hover text-white font-fam-roboto fs-5" to="/">Open NRI Account</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className={`nav-link px-3 text-white ${location.pathname === "/about" ? "active" : ""}`} to="/about" >About</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className={`nav-link px-3 text-white ${location.pathname === "/contact" ? "active" : ""} `} to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item mx-2">
                                {!localStorage.getItem('token') ?
                                    <Link className={`nav-link px-3 text-white scrollto ${location.pathname === "/login" ? "active" : ""}`} to="/login">Login</Link> :

                                    <Link className={`nav-link px-3 text-white scrollto ${location.pathname === "/profile" ? "active" : ""}`} to="/profile">My Account</Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar
