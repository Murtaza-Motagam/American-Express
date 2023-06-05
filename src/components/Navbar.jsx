import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'


const Navbar = () => {

    let location = useLocation();


    return (
        <>
            <header id="header" className="fixed-top header-transparent">
                <div className="container d-flex align-items-center justify-content-between position-relative">

                    <div className="logo">

                        <h1 className="mb-2 text-light"><i className="fas fs-3 fa-regular fa-building-columns me-2" style={{ color: "#ffffff" }}></i><Link className='fs-3' to="/">American-Express</Link></h1>
                        <span className='ms-5 text-white fs-5'>America's most Trusted</span>
                    </div>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><Link className={`nav-link scrollto ${location.pathname === "/" ? "active" : ""}`} to="/">Business</Link></li>
                            <li><Link className="nav-link scrollto" to="/">Corporate</Link></li>
                            <li><Link className="nav-link scrollto" to="/">Private Banking</Link></li>
                            <li className="dropdown"><Link to="/services"><span className={`${location.pathname === "/services" ? "active" : ""}`}>Services</span> <i className="bi bi-chevron-down"></i></Link>
                                <ul>
                                    <li><Link to="opensavingsaccount">Open Savings Acount</Link></li>
                                    <li><Link to="/">Open Current Acount</Link></li>
                                    <li><Link to="/">Open Business Acount</Link></li>
                                    <li><Link to="/">Open FD For Long-term</Link></li>
                                    <li><Link to="/">Open NRI Account</Link></li>
                                    <li className="dropdown"><Link to="/"><span>Other Services</span> <i className="bi bi-chevron-right"></i></Link>
                                        <ul>
                                            <li><Link to="/">Nada </Link></li>
                                            <li><Link to="/">Nada </Link></li>
                                            <li><Link to="/">Nada </Link></li>
                                            <li><Link to="/">Nada</Link></li>
                                            <li><Link to="/">Nada </Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><Link className={`nav-link scrollto ${location.pathname === "/about" ? "active" : ""} `} to="/about">About AS</Link></li>

                            <li><Link className={`nav-link scrollto  ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link></li>

                            {!localStorage.getItem('token') ?
                                <li><Link className={`nav-link scrollto ${location.pathname === "/login" ? "active" : ""}`} to="/login">Login</Link></li> :
                                
                                <li><Link className={`nav-link scrollto ${location.pathname === "/profile" ? "active" : ""}`} to="/profile">My Account</Link></li>
                            }
                        </ul>

                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                </div>
            </header>


            <Outlet/>


        </>
    )
}

export default Navbar
