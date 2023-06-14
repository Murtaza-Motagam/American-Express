import React, { useEffect, useState } from 'react'
import Services from './Services'
import Aos from 'aos'
import { Link } from 'react-router-dom'


const Home = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Aos.init();
    }, [])

    setTimeout(() => {
        setLoading(false);
    }, 1200);



    const Loading = () => {
        return (
            <>
                <main className="container mt-5 " >
                    <div className="container my-5" >

                        <div className="row p-4 pb-0 pe-lg-0 align-items-center rounded-3  bs-1">
                            <div className="col-lg-7 p-3 pt-lg-2">

                                <h1 className="display-4 fw-bold lh-1 fw-bold placeholder">Welcome to <span className=" placeholder ">American-</span><span className=' placeholder'>Express</span> Bank</h1>
                                <span className="fs-5 my-3 placeholder">America's Most Trusted Bank</span>
                                <p className="fs-4 my-3 font-fam-roboto placeholder">Earn FD like interest up to 7%* p.a. in Savings Account with ActivMoney.</p>
                                <p className="lead my-3 font-fam-roboto placeholder" style={{ marginLeft: "-10px" }}>
                                    <Link to="/opensavingsaccount" className="placeholder fw-bold button-34 py-3 btn-lg font-fam-roboto mx-2"></Link>
                                    <Link to="/" className="placeholder fw-bold button-24 btn-lg font-fam-roboto mx-2"></Link>
                                </p>
                                <p className="placeholder  mt-5 font-fam-roboto text-primary" style={{ fontSize: "17px" }}>5% off on opening DEMAT Account: Powered by American-Express.</p>
                            </div>
                            <div className="placeholder col-lg-4 offset-lg-1 p-0 overflow-hidden p-4">
                                <img className="placeholder d-none img-fluid" src={require('../images/heroImg.jpg')} alt="" height="320px" />
                            </div>
                        </div>
                    </div>

                </main>
            </>
        );
    };

    const ShowHome = () => {
        return (
            <>
                <main className="container mt-5" >
                    <div className="container my-5 border-r-1" >

                        <div className="row p-4 pb-0 pe-lg-0 align-items-center rounded-3 bs-1" >
                            <div className="col-lg-7 p-3 pt-lg-2">

                                <h1 className="display-4 fw-bold lh-1 fw-bold lh-1 font-fam-algreya">Welcome to <span className='brand-look'>American</span>-<span className='brand-look-2'>Express</span> Bank</h1>
                                <span className="fs-5 my-3">America's Most Trusted Bank</span>
                                <p className="fs-4 my-3 font-fam-roboto ">Earn FD like interest up to 7%* p.a. in Savings Account with ActivMoney.</p>
                                <p className="lead my-3 font-fam-roboto" style={{ marginLeft: "-10px" }}>
                                    <Link to="/opensavingsaccount" className="fw-bold button-34 py-3 btn-lg font-fam-roboto mx-2">Open AS Premium Account now</Link>
                                    <Link to="/" className="fw-bold button-18 btn-lg font-fam-roboto mx-2">Know More</Link>
                                </p>
                                <p className=" mt-5 font-fam-roboto text-primary" style={{ fontSize: "17px" }}>5% off on opening DEMAT Account: Powered by American-Express.</p>
                            </div>
                            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden p-4">
                                <img className="img-fluid" src={require('../images/heroImg.jpg')} alt="" height="320px" />
                            </div>
                        </div>
                    </div>

                    {/* Loan Section */}

                    <div className="mt-5 heading-main my-5" data-aos="fade-in" data-aos-delay="100" >
                        <h2 >Loan Schemes</h2>
                        <hr className='hr'/>
                    </div>
                    <div className="row mb-2 p-2 border-r-1">
                        <div className="col-md-4 cursor-pointer " data-aos="fade-up" data-aos-delay="100" >
                            <div className="row g-0 rounded overflow-hidden shadow-sm border flex-md-row mb-4 h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static" >
                                    <strong className="d-inline-block mb-2 "  >AS-Special</strong>
                                    <h3 className="mb-0 font-fam-ssp fw-bold">Home Loans</h3>
                                    <div className="mb-1 text-body-secondary">Nov 12</div>
                                    <p className="card-text mb-auto fs-5">Apply for home loan now and get $5000 discount on Ktp Official Stores. T&C Apply</p>
                                    <Link to="/" className="stretched-link mt-3 text-link"  >Continue reading</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 cursor-pointer" data-aos="fade-up" data-aos-delay="200">
                            <div className="row g-0 rounded overflow-hidden shadow-sm border flex-md-row mb-4 h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static" >
                                    <strong className="d-inline-block mb-2"   >Personal</strong>
                                    <h3 className="mb-0 font-fam-roboto">Personal Loan with Low Rates</h3>
                                    <div className="mb-1 text-body-secondary">Nov 11</div>
                                    <p className="mb-auto font-fam-roboto fs-5">Quick Loan section || Part prepayment available | Loan amount up to $4000.</p>
                                    <Link to="/" className="stretched-link text-link mt-3"  >Continue reading</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 cursor-pointer" data-aos="fade-up" data-aos-delay="300">
                            <div className="row g-0 rounded overflow-hidden shadow-sm border flex-md-row mb-4 h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static" >
                                    <strong className="d-inline-block mb-2"  >Capital</strong>
                                    <h3 className="mb-0 font-fam-roboto">Working Capital Solutions</h3>
                                    <div className="mb-1 text-body-secondary">Nov 11</div>
                                    <p className="mb-auto font-fam-roboto fs-5">Avail our array of products offered under Fund and Non-Fund based Working Capital Solutions to grow your business.</p>
                                    <Link to="/" className="stretched-link text-link mt-3"  >Continue reading</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Serivces Section */}
                    <Services />

                    <br />
                    <br />
                    <br />

                </main>

                {/* Album */}

                <div className="container mt-5">
                    <div className="heading-main" data-aos="fade-in" data-aos-delay="100">
                        <h2 >Banking</h2>
                       <hr className="hr" />
                    </div>
                </div>

                <main className='mb-5'>

                    <section className="py-5 text-center container" data-aos="fade-in">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto" data-aos="fade-up" >
                                <h1 className="fs-1 fw-light font-fam-roboto"><span className="brand-look fw-bold font-fam-roboto ">American-</span><span className='brand-look-2 fw-bold font-fam-roboto '>Express</span> Banking</h1>
                                <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                                <p>
                                    <Link to="/" className="btn btn-primary font-fam-ssp fs-5 my-2 mx-2">Explore out</Link>
                                    <Link to="/" className="btn btn-dark font-fam-ssp fs-5 my-2">Show services</Link>
                                </p>
                            </div>
                        </div>
                    </section>

                    <div className="album mb-5" >
                        <div className="container">

                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                <div className="col" data-aos="fade-up" data-aos-delay="100">
                                    <div className="card shadow-sm" >
                                        {/* images Section */}

                                        <img src={require('../images/inv-4.jpg')} className="img-fluid" alt="" />

                                        <div className="card-body">
                                            <div className="card-title fs-4 font-fam-roboto">Net Banking</div>
                                            <p className="card-text">Net Banking is a convenient way to bank from the comfort of your home or office -  a one stop solution for all of your banking needs.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-outline-success ">Checkout</button>
                                                    <button type="button" className="btn btn-sm btn-outline-primary">Read</button>
                                                </div>
                                                <small className="text-body-secondary">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" data-aos="fade-up" data-aos-delay="200">
                                    <div className="card shadow-sm" >
                                        {/* images Section */}

                                        <img src={require('../images/inv-2.jpg')} className="img-fluid" alt="" />

                                        <div className="card-body">
                                            <div className="card-title font-fam-roboto fs-4">Mobile Banking</div>
                                            <p className="card-text">Now, you can experience the benefits of online banking anywhere and anytime, without the need for a computer.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-outline-success ">Checkout</button>
                                                    <button type="button" className="btn btn-sm btn-outline-primary">Read</button>
                                                </div>
                                                <small className="text-body-secondary">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col" data-aos="fade-up" data-aos-delay="300">
                                    <div className="card shadow-sm" >
                                        {/* images Section */}

                                        <img src={require('../images/inv-3.jpg')} className="img-fluid" alt="" />

                                        <div className="card-body">
                                            <div className="card-title fs-4 font-fam-roboto">Chatting and banking come together!</div>
                                            <p className="card-text">Meet Keya - Your very own virtual assistant from Kotak. Keya is smart.</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">
                                                    <button type="button" className="btn btn-outline-success ">Checkout</button>
                                                    <button type="button" className="btn btn-sm btn-outline-primary">Read</button>
                                                </div>
                                                <small className="text-body-secondary">9 mins</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </main>

                {/* Featured Section */}
                <div className="container mt-5">
                    <div className="heading-main mt-5 mb-5" data-aos="fade-in" data-aos-delay="100">
                        <h2 >AS Credit Card & Fast Tags.</h2>
                        <hr className="hr" />
                    </div>
                </div>

                <div className="container px-4 py-5" id="featured-3">
                    {/* <h2 className='fw-bold'>AS Credit Card & Fast Tags.</h2> */}
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 p-4 border-r-1" >
                        <div className="feature col" data-aos="fade-up" data-aos-delay="100" >
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                                <i className="fas fa-regular fa-credit-card"></i>
                            </div>
                            <h3 className="fs-2">Indian Oil Credit Card</h3>

                            <ul className='list-group' >
                                <li className='list-group-item' >Save 5%* on Fuel spends at IndianOil fuel pumps and get reward on that.</li>
                                <li className='list-group-item' >Earn 2%** back as Reward Points on Grocery and Dining spends.</li>
                                <li className='list-group-item' > Annual Fee waiver on retail spends of INR 50,000 in the previous anniversary year.</li>
                            </ul>
                            <p className='mt-4 fs-5 '>
                                <Link to="/" className="text-decoration-underline mt-4 text-warning">
                                    Apply Now &#8594;
                                </Link>
                            </p>
                        </div>

                        <div className="feature col" data-aos="fade-up" data-aos-delay="200">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                                <i className="fas fa-regular fa-credit-card"></i>
                            </div>
                            <h3 className="fs-2">Urbane Gold Credit Card</h3>

                            <ul className='list-group' >
                                <li className='list-group-item' >Earn 3 Reward Points against retail spends of Rs.100.</li>
                                <li className='list-group-item' >Get 4 PVR tickets or 10,000 Reward Points on annual spends of Rs.1 Lac.</li>
                                <li className='list-group-item' > Enjoy Annual Fee waiver on annual spends of Rs.15,000.</li>
                            </ul>
                            <p className='mt-3 fs-5 '>
                                <Link to="/" className="text-decoration-underline mt-4 text-warning">
                                    Apply Now &#8594;
                                </Link>
                            </p>
                        </div>

                        <div className="feature col" data-aos="fade-up" data-aos-delay="300">
                            <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                                <i className="fas fa-regular fa-credit-card"></i>
                            </div>
                            <h3 className="fs-2">AS Vip card</h3>
                            <ul className='list-group' >
                                <li className='list-group-item' >Earn 500 bonus reward points on Activation + Rs. 5000/- spends in the first 45 days of card set up.</li>
                                <li className='list-group-item' >Earn 2 reward points against every Rs. 100/- of online spends.</li>
                                <li className='list-group-item' >Earn 1 reward point against every Rs. 100/- of other* spends.</li>
                            </ul>
                            <p className='mt-3 fs-5 '>
                                <Link to="/" className="text-decoration-underline mt-4 text-warning">
                                    Apply Now &#8594;
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <br />
            <br />

            {loading ? <Loading /> : <ShowHome />}

            <br />
            <br />
            <br />


        </>
    )
}

export default Home
