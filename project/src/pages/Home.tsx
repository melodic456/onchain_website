import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">Make Better Life With Trusted CryptoCoin</h1>
              <p className="animated slideInDown">
                Experience the future of digital finance with our secure and innovative blockchain platform.
                Join thousands of users who trust CryptoCoin for their cryptocurrency needs.
              </p>
              <Link to="/dashboard" className="btn btn-primary py-3 px-4 animated slideInDown">
                Get Started
              </Link>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <img className="img-fluid animated pulse infinite" style={{ animationDuration: "3s" }} src="/img/hero-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img className="img-fluid" src="/img/about.png" alt="" />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6">About Us</h1>
                <p className="text-primary fs-5 mb-4">The Most Trusted Cryptocurrency Platform</p>
                <p>
                  At CryptoCoin, we're dedicated to making cryptocurrency accessible to everyone.
                  Our platform combines cutting-edge security with user-friendly features to provide
                  the best possible experience in digital asset management.
                </p>
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>Secure and reliable platform</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>24/7 customer support</span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>Advanced trading features</span>
                </div>
                <Link to="/about" className="btn btn-primary py-3 px-4">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Facts Start */}
      <div className="container-xxl bg-light py-5 my-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
              <img className="img-fluid mb-4" src="/img/icon-9.png" alt="" />
              <h1 className="display-4" data-toggle="counter-up">123456</h1>
              <p className="fs-5 text-primary mb-0">Today Transactions</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.3s">
              <img className="img-fluid mb-4" src="/img/icon-10.png" alt="" />
              <h1 className="display-4" data-toggle="counter-up">123456</h1>
              <p className="fs-5 text-primary mb-0">Monthly Transactions</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.5s">
              <img className="img-fluid mb-4" src="/img/icon-2.png" alt="" />
              <h1 className="display-4" data-toggle="counter-up">123456</h1>
              <p className="fs-5 text-primary mb-0">Total Transactions</p>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* Features Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <h1 className="display-6">Why Us!</h1>
            <p className="text-primary fs-5 mb-5">The Best In The Crypto Industry</p>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src="/img/icon-7.png" alt="" />
                <div className="ps-4">
                  <h5 className="mb-3">Easy To Start</h5>
                  <span>Get started with cryptocurrency in minutes with our simple onboarding process</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src="/img/icon-6.png" alt="" />
                <div className="ps-4">
                  <h5 className="mb-3">Safe & Secure</h5>
                  <span>Advanced security measures to protect your digital assets</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src="/img/icon-5.png" alt="" />
                <div className="ps-4">
                  <h5 className="mb-3">Affordable Plans</h5>
                  <span>Competitive fees and flexible plans for all types of traders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
    </>
  );
}