import React, { useEffect } from 'react'
import Aos from 'aos';
import { Link } from 'react-router-dom';

const Cta = () => {

    useEffect(() => {
        Aos.init();
      }, [])

      
    return (
        <>
            <section id="counts" className="counts section-bg mt-5">
                <div className="container mt-5">

                    <div className="row no-gutters">

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <i className="bi bi-emoji-smile"></i>
                                <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Happy Clients</strong> consequuntur quae</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <i className="bi bi-journal-richtext"></i>
                                <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Projects</strong> adipisci atque cum quia aut</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <i className="bi bi-headset"></i>
                                <span data-purecounter-start="0" data-purecounter-end="1463" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Hours Of Support</strong> aut commodi quaerat</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch">
                            <div className="count-box">
                                <i className="bi bi-people"></i>
                                <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
                                <p><strong>Hard Workers</strong> rerum asperiores dolor</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section id="cta" className="cta">
                <div className="container" data-aos="zoom-in">

                    <div className="text-center">
                        <h3>Call To Action</h3>
                        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Link className="cta-btn" to="/">Call To Action</Link>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Cta
