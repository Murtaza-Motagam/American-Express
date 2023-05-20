import React from 'react'
import Services from './Services'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <>
            <main className="container mt-5" >
                <div className="p-md-5 mb-4 rounded bg-light my-5">
                    <div className="col-md-12 px-0 text-center">
                        <h1 className="display-4 text-center fw-bold">Welcome to <span className="brand-look">American-</span><span className='brand-look-2'>Express</span> Bank</h1>
                        <span className="fs-5">America Most Trusted Bank</span>
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
                <Services/>
                <br />
                <br />
                <br />

            </main>
        </>
    )
}

export default Home
