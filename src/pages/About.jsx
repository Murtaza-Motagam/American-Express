import React, { useEffect, useState } from 'react'
import Aos from 'aos';
import MoonLoader from "react-spinners/MoonLoader"
import { Link } from 'react-router-dom';


const About = () => {


    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1500);

    useEffect(() => {
        Aos.init();
    }, [])

    const Loading = () => {
        return (
            <>


                <br />
                <div className="basic-loader">
                    <MoonLoader
                        color="rgb(103, 190, 231)"
                        size={100}
                        loading={loading}
                    />
                </div>
            </>
        )
    }

    const ShowAbout = () => {
        return (
            <>
                <div className="container-fluid col-xxl-12 bg-light px-5 py-5 mt-5 font-fam-roboto">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img src={require('../images/bk.jpg')} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold text-body-emphasis font-fam-roboto lh-1 mb-3">About <span className="brand-look">American-</span><span className='brand-look-2'>Express</span></h1>
                            <p className="lead">American-Express Bank Limited is an United States banking and financial services company headquartered in Utah. It offers banking products and financial services for corporate and retail customers in the areas of personal finance, investment banking, life insurance, and wealth management.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <button type="button" className="button-58 btn-lg px-4 me-md-2">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>


                <section id="about" className="about">
                    <div className="container ">
                        <div className="section-title mt-5">
                            <h2>About American-Express Bank.</h2>
                        </div>

                        <div className="row no-gutters">
                            <div className="content col-xl-5 d-flex align-items-stretch" data-aos="fade-up">
                                <div className="content">
                                    <h3>American-Express National Bank </h3>
                                    <p>
                                        American-Express Bank Limited is an United States banking and financial services company headquartered in Utah. It offers banking products and financial services for corporate and retail customers in the areas of personal finance, investment banking, life insurance, and wealth management
                                    </p>
                                    <Link to="/" className="about-btn">About us <i className="bx bx-chevron-right"></i></Link>
                                </div>
                            </div>


                            <div className="col-xl-7 d-flex align-items-stretch">
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                            <i className="bx bx-receipt"></i>
                                            <h4>Recognition</h4>
                                            <p>In a study by Brand Finance Banking 500 published in February 2014 by Banker magazine, KMBL was ranked 245th among the world's top 500 banks with a brand valuation of around US$481 million and brand rating of AA+</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                            <i className="bx bx-cube-alt"></i>
                                            <h4>Philanthropy</h4>
                                            <p>In 2020, AS pledged to donate $50 million to the President CARES Fund to fight against the COVID-19 pandemic in United States.</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                            <i className="bx bx-images"></i>
                                            <h4>Acquisitions</h4>
                                            <p>In 2005, American-Express Bank acquired Ford Credit's 40% stake in AS Primus, making it a wholly-owned subsidiary of the group. AS Primus was subsequently renamed as American-Express Prime</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                                            <i className="bx bx-shield"></i>
                                            <h4>Subsidiaries and Associates</h4>
                                            <p>American Express Prime
                                                American Express Investments
                                                American Express Securities
                                                American Express Capital
                                                American Express Life Insurance
                                                American Express General Insurance
                                                AS AMC
                                                American-Express Advisors
                                                American-Express</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="counts" className="counts  section-bg" data-aos="fade-up" data-aos-delay="100">
                    <div className="container">

                        <div className="row no-gutters">

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i className="bi bi-emoji-smile"></i>
                                    <span className="purecounter">22k+</span>
                                    <p><strong>Happy Clients <br/></strong>Active Users</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                <i class="bi bi-journal-richtext"></i>
                                    <span className="purecounter">34k+</span>
                                    <p><strong>Accounts<br /></strong>Savings & Current Accounts</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i className="bi bi-headset"></i>
                                    <span className="purecounter">24H</span>
                                    <p><strong>Hours Of Support</strong> Customer Helpline</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                                <div className="count-box">
                                    <i className="bi bi-people"></i>
                                    <span className="purecounter">9K+</span>
                                    <p><strong>Hard Working Employees<br /></strong>Managing American Express</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="cta" className="cta mb-5">
                    <div className="container" data-aos="zoom-in">

                        <div className="text-center">
                            <h3>Call To Action</h3>
                            <p> Contact or React to American Express helpline team directly by providing given helpline number. 24h of customer support can be seen and Your Money is completely safe in our hands Trust us as rest of americans are doing...</p>
                            <Link className="cta-btn" to="/">Contact HD</Link>
                        </div>

                    </div>
                </section>
            </>
        )
    }

    return (
        <>

            {loading ? <Loading /> : <ShowAbout />}

        </>
    )
}

export default About
