import React, { useEffect } from 'react'
import Aos from 'aos';
import { Link } from 'react-router-dom';


const About = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>

            <div class="container-fluid col-xxl-10 px-4 py-5 mt-5 font-fam-roboto">
                <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div class="col-10 col-sm-8 col-lg-6">
                        <img src={require('../images/bk.jpg')} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="display-4 fw-bold text-body-emphasis font-fam-roboto lh-1 mb-3">About <span className="brand-look">American-</span><span className='brand-look-2'>Express</span></h1>
                        <p class="lead">American-Express Bank Limited is an United States banking and financial services company headquartered in Utah. It offers banking products and financial services for corporate and retail customers in the areas of personal finance, investment banking, life insurance, and wealth management.</p>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" class="button-58 btn-lg px-4 me-md-2">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>


            <section id="about" className="about">
                <div className="container">
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
        </>
    )
}

export default About
