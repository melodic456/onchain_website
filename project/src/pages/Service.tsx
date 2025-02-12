import React from 'react';

export function Service() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">Services</h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Services</li>
                </ol>
              </nav>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <img className="img-fluid animated pulse infinite" style={{ animationDuration: "3s" }} src="/img/hero-2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <h1 className="display-6">Services</h1>
            <p className="text-primary fs-5 mb-5">Buy, Sell And Exchange Cryptocurrency</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/img/icon-7.png" alt="" />
                <h5 className="mb-3">Currency Wallet</h5>
                <p>Secure digital wallet for storing and managing your cryptocurrencies with advanced security features.</p>
                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/img/icon-3.png" alt="" />
                <h5 className="mb-3">Currency Transaction</h5>
                <p>Fast and secure cryptocurrency transactions with competitive fees and real-time tracking.</p>
                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/img/icon-9.png" alt="" />
                <h5 className="mb-3">Bitcoin Investment</h5>
                <p>Expert guidance and tools for making informed cryptocurrency investment decisions.</p>
                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/img/icon-5.png" alt="" />
                <h5 className="mb-3">Currency Exchange</h5>
                <p>Instant cryptocurrency exchange with competitive rates and multiple trading pairs.</p>
                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/img/icon-2.png" alt="" />
                <h5 className="mb-3">Bitcoin Escrow</h5>
                <p>Secure escrow services for safe cryptocurrency transactions between parties.</p>
                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/img/icon-8.png" alt="" />
                <h5 className="mb-3">Token Sale</h5>
                <p>Participate in carefully vetted token sales and ICOs with full compliance.</p>
                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </>
  );
}