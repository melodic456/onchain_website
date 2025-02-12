import React from 'react';

export function Feature() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">Features</h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Features</li>
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
                  <span>Simple onboarding process with user-friendly interface for beginners</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src="/img/icon-6.png" alt="" />
                <div className="ps-4">
                  <h5 className="mb-3">Safe & Secure</h5>
                  <span>Advanced security measures including 2FA and cold storage</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src="/img/icon-5.png" alt="" />
                <div className="ps-4">
                  <h5 className="mb-3">Affordable Plans</h5>
                  <span>Competitive fees and flexible pricing plans for all users</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src="/img/icon-4.png" alt="" />
                <div className="ps-4">
                  <h5 className="mb-3">Secure Storage</h5>
                  <span>Multi-signature wallets and encrypted data storage</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src="/img/icon-3.png" alt="" />
                <div className="ps-4">
                  <h5 className="mb-3">Protected By Insurance</h5>
                  <span>Digital assets protected by comprehensive insurance coverage</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src="/img/icon-8.png" alt="" />
                <div className="ps-4">
                  <h5 className="mb-3">24/7 Support</h5>
                  <span>Round-the-clock customer support via multiple channels</span>
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