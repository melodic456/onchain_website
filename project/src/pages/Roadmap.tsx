import React from 'react';

export function Roadmap() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">Roadmap</h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Roadmap</li>
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

      {/* Roadmap Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <h1 className="display-6">Roadmap</h1>
            <p className="text-primary fs-5 mb-5">We Translate Your Dream Into Reality</p>
          </div>
          <div className="owl-carousel roadmap-carousel wow fadeInUp" data-wow-delay="0.1s">
            <div className="roadmap-item">
              <div className="roadmap-point"><span></span></div>
              <h5>January 2025</h5>
              <span>Platform Launch & Initial Feature Release</span>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-point"><span></span></div>
              <h5>March 2025</h5>
              <span>Mobile App Development & Beta Testing</span>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-point"><span></span></div>
              <h5>May 2025</h5>
              <span>Advanced Trading Features Implementation</span>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-point"><span></span></div>
              <h5>July 2025</h5>
              <span>Global Market Expansion & Partnerships</span>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-point"><span></span></div>
              <h5>September 2025</h5>
              <span>DeFi Integration & Smart Contracts</span>
            </div>
            <div className="roadmap-item">
              <div className="roadmap-point"><span></span></div>
              <h5>November 2025</h5>
              <span>Cross-Chain Support & Ecosystem Growth</span>
            </div>
          </div>
        </div>
      </div>
      {/* Roadmap End */}
    </>
  );
}