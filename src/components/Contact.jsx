import React, { useEffect } from 'react'
import Aos from 'aos';

const Contact = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <>
            <section id="contact" className="contact section-bg ">
                <div className="container mt-5" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Contact</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className="info-box mb-4">
                                <i className="bx bx-map"></i>
                                <h3>Our Address</h3>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us</h3>
                                <p>contact@example.com</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="info-box  mb-4">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us</h3>
                                <p>+1 5589 55488 55</p>
                            </div>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-lg-6 ">
                            <iframe title="myFrame" className="mb-4 mb-lg-0" src="" style={{border:"0", width: "100%", height: "384px"}} allowFullScreen></iframe>
                        </div>

                        <div className="col-lg-6">
                            <form className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact