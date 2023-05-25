import React from 'react'
import Services from './Services'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
        <br />
        <br />
            <main className="container mt-5" >
                <div className="p-md-5 mb-4 rounded bg-light my-5">
                    <div className="col-md-12 px-0 text-center">
                        <h1 className="display-4 text-center fw-bold">Welcome to <span className="brand-look">American-</span><span className='brand-look-2'>Express</span> Bank</h1>
                        <span className="fs-5">America's Most Trusted Bank</span>
                        <p className="fs-4 my-3 font-fam-roboto text-left">Earn FD like interest up to 7%* p.a. in Savings Account with ActivMoney.</p>
                        <p className="lead mb-3 font-fam-roboto">
                            <Link to="/" className="fw-bold btn btn-danger btn-lg font-fam-roboto mx-2">Open AS Premium Account now</Link>
                            <Link to="/" className="fw-bold btn btn-danger btn-lg font-fam-roboto mx-2">Know More</Link>
                        </p>
                    </div>
                </div>

                {/* Loan Section */}

                <div className="row mb-2 mt-5">
                    <div className="col-md-4 cursor-pointer ">
                        <div className="row g-0 rounded overflow-hidden shadow-sm border flex-md-row mb-4 h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">AS-Special</strong>
                                <h3 className="mb-0 font-fam-ssp fw-bold">Home Loans</h3>
                                <div className="mb-1 text-body-secondary">Nov 12</div>
                                <p className="card-text mb-auto fs-5">Apply for home loan now and get $5000 discount on Ktp Official Stores. T&C Apply</p>
                                <Link to="/" className="stretched-link mt-3 text-link">Continue reading</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 cursor-pointer">
                        <div className="row g-0 rounded overflow-hidden shadow-sm border flex-md-row mb-4 h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Personal</strong>
                                <h3 className="mb-0 font-fam-roboto">Personal Loan with Low Rates</h3>
                                <div className="mb-1 text-body-secondary">Nov 11</div>
                                <p className="mb-auto font-fam-roboto fs-5">Quick Loan section || Part prepayment available | Loan amount up to $4000.</p>
                                <Link to="/" className="stretched-link text-link mt-3">Continue reading</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 cursor-pointer">
                        <div className="row g-0 rounded overflow-hidden shadow-sm border flex-md-row mb-4 h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Capital</strong>
                                <h3 className="mb-0 font-fam-roboto">Working Capital Solutions</h3>
                                <div className="mb-1 text-body-secondary">Nov 11</div>
                                <p className="mb-auto font-fam-roboto fs-5">Avail our array of products offered under Fund and Non-Fund based Working Capital Solutions to grow your business.</p>
                                <Link to="/" className="stretched-link text-link mt-3">Continue reading</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Services />
                <br />
                <br />
                <br />
            </main>

            {/* Album */}

            <main>

                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fs-1 fw-light font-fam-roboto"><span className="brand-look fw-bold font-fam-roboto ">American-</span><span className='brand-look-2 fw-bold font-fam-roboto '>Express</span> Banking</h1>
                            <p className="lead text-body-secondary">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                            <p>
                                <Link to="/" className="btn btn-primary font-fam-ssp fs-5 my-2 mx-2">Explore out</Link>
                                <Link to="/" className="btn btn-dark font-fam-ssp fs-5 my-2">Show services</Link>
                            </p>
                        </div>
                    </div>
                </section>

                <div className="album  bg-body-tertiary mb-5">
                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            <div className="col">
                                <div className="card shadow-sm">
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
                            <div className="col">
                                <div className="card shadow-sm">
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
                            <div className="col">
                                <div className="card shadow-sm">
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

            <div className="container px-4 py-5" id="featured-3">
                <h2 className='fw-bold'>AS Credit Card & Fast Tags.</h2>
                <hr style={{
                    height: '4px',
                    background: '#318CE7'
                }}
                />
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                            <i className="fas fa-regular fa-credit-card"></i>
                        </div>
                        <h3 className="fs-2">Indian Oil Credit Card</h3>

                        <ul className='list-group'>
                            <li className='list-group-item'>Save 5%* on Fuel spends at IndianOil fuel pumps and get reward on that.</li>
                            <li className='list-group-item'>Earn 2%** back as Reward Points on Grocery and Dining spends.</li>
                            <li className='list-group-item'> Annual Fee waiver on retail spends of INR 50,000 in the previous anniversary year.</li>
                        </ul>
                        <p className='mt-4 fs-5 '>
                            <Link to="/" className="text-decoration-underline mt-4 text-warning">
                                Apply Now &#8594;
                            </Link>
                        </p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                            <i className="fas fa-regular fa-credit-card"></i>
                        </div>
                        <h3 className="fs-2">Urbane Gold Credit Card</h3>

                        <ul className='list-group'>
                            <li className='list-group-item'>Earn 3 Reward Points against retail spends of Rs.100.</li>
                            <li className='list-group-item'>Get 4 PVR tickets or 10,000 Reward Points on annual spends of Rs.1 Lac.</li>
                            <li className='list-group-item'> Enjoy Annual Fee waiver on annual spends of Rs.15,000.</li>
                        </ul>
                        <p className='mt-3 fs-5 '>
                            <Link to="/" className="text-decoration-underline mt-4 text-warning">
                                Apply Now &#8594;
                            </Link>
                        </p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center  fs-2 mb-3">
                            <i className="fas fa-regular fa-credit-card"></i>
                        </div>
                        <h3 className="fs-2">AS Vip card</h3>

                        <ul className='list-group'>
                            <li className='list-group-item'>Earn 500 bonus reward points on Activation + Rs. 5000/- spends in the first 45 days of card set up.</li>
                            <li className='list-group-item'>Earn 2 reward points against every Rs. 100/- of online spends.</li>
                            <li className='list-group-item'>Earn 1 reward point against every Rs. 100/- of other* spends.</li>
                        </ul>
                        <p className='mt-3 fs-5 '>
                            <Link to="/" className="text-decoration-underline mt-4 text-warning">
                                Apply Now &#8594;
                            </Link>
                        </p>
                    </div>
                </div>
            </div>


            <br />
            <br />
            <br />

        </>
    )
}

export default Home
