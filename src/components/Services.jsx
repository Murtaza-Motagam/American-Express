import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import { Link } from 'react-router-dom';


const Services = () => {

    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1100);

    useEffect(() => {
        Aos.init();
    }, [])


    const Loading = () => {
        return (
            <>
                <section id="services" className="services ">
                    <div className=" container mt-5 ">

                        <div className="text-center">
                            <p className='placeholder py-3'>Services</p>
                            <p className='placeholder py-3'>American Express is a bank corporation who probvides user money lending services.</p>
                        </div>

                        <div className=" row ">
                            <div className=" col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className=" icon-box" data-aos="fade-up">
                                    <div className=" icon"><i className="fa-regular fa-credit-card placeholder" ></i></div>
                                    <h4 className="title placeholder"><Link to="/" className='placeholder'>Debit Card</Link></h4>
                                    <p className="description placeholder">Apply for your debit card in AS Vip. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut optio reiciendis labore.</p>
                                </div>
                            </div>
                            <div className=" col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className=" icon-box" data-aos="fade-up">
                                    <div className=" icon"><i className="fa-regular fa-credit-card placeholder" ></i></div>
                                    <h4 className="title placeholder"><Link to="/" className='placeholder'>Debit Card</Link></h4>
                                    <p className="description placeholder">Apply for your debit card in AS Vip. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut optio reiciendis labore.</p>
                                </div>
                            </div>
                            <div className=" col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className=" icon-box" data-aos="fade-up">
                                    <div className=" icon"><i className="fa-regular fa-credit-card placeholder" ></i></div>
                                    <h4 className="title placeholder"><Link to="/" className='placeholder'>Debit Card</Link></h4>
                                    <p className="description placeholder">Apply for your debit card in AS Vip. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut optio reiciendis labore.</p>
                                </div>
                            </div>
                            <div className=" col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className=" icon-box" data-aos="fade-up">
                                    <div className=" icon"><i className="fa-regular fa-credit-card placeholder" ></i></div>
                                    <h4 className="title placeholder"><Link to="/" className='placeholder'>Debit Card</Link></h4>
                                    <p className="description placeholder">Apply for your debit card in AS Vip. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut optio reiciendis labore.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
            </>
        )
    }

    const ShowServices = () => {
        return (
            <>
                <section id="services" className="services">
                    <div className=" container mt-5">

                        <div className=" section-title" data-aos="fade-in" data-aos-delay="100">
                            <h2>Services</h2>
                            <p>American Express is a bank corporation who probvides user money lending services.</p>
                        </div>

                        <div className=" row">
                            <div className=" col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className=" icon-box" data-aos="fade-up">
                                    <div className=" icon"><i className="fa-regular fa-credit-card" ></i></div>
                                    <h4 className="title"><Link to="/">Debit Card</Link></h4>
                                    <p className="description">Apply for your debit card in AS Vip. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut optio reiciendis labore.</p>
                                </div>
                            </div>

                            <div className=" col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className=" icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className=" icon"><i className="fa-solid fa-user"></i></div>
                                    <h4 className="title"><Link to="/">Saving and Current Account</Link></h4>
                                    <p className="description">Open your savings or current account now with american express vip services to get full advantages and functionaluity.</p>
                                </div>
                            </div>

                            <div className=" col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className=" icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div className=" icon"><i className="fa-solid fa-money-bill-transfer"></i></div>
                                    <h4 className="title"><Link to="/">Home Loans</Link></h4>
                                    <p className="description">Home Loans can be apply to the particular request by providing your legal documentation..</p>
                                </div>
                            </div>

                            <div className=" col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                                <div className=" icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <div className=" icon"><i className="fa-solid fa-money-bill-transfer"></i></div>
                                    <h4 className="title"><Link to="/">Personal Loans</Link></h4>
                                    <p className="description">Personal Loans can be apply to the particular request by providing your legal documentation.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </>
        )
    }

    return (
        <>
            {loading ? <Loading /> : <ShowServices/>}
        </>
    )
}

export default Services
