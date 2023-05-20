import React, { useEffect } from 'react'
import Aos from 'aos';
import { Link } from 'react-router-dom';


const Services = () => {

    useEffect(() => {
        Aos.init();
      }, [])


    return (
        <>
            <section id="services" className="services">
                <div className="container mt-5">

                    <div className="section-title" data-aos="fade-in" data-aos-delay="100">
                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up">
                                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                                <h4 className="title"><Link to="/">Lorem Ipsum</Link></h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon"><i className="bx bx-file"></i></div>
                                <h4 className="title"><Link to="/">Sed ut perspiciatis</Link></h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon"><i className="bx bx-tachometer"></i></div>
                                <h4 className="title"><Link to="/">Magni Dolores</Link></h4>
                                <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon"><i className="bx bx-world"></i></div>
                                <h4 className="title"><Link to="/">Nemo Enim</Link></h4>
                                <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Services
