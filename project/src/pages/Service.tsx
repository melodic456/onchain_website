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
              <img className="img-fluid animated pulse infinite" style={{ animationDuration: "3s" }} src="/myapps/img/hero-2.png" alt="" />
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
            <p className="text-primary fs-5 mb-5">Solution</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/myapps/img/icon-7.png" alt="" />
                <h5 className="mb-3">Government-Based Services</h5>
                <p>Empowering governments with blockchain solutions to optimize public services and build trust.</p>
                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/myapps/img/icon-3.png" alt="" />
                <h5 className="mb-3">Enterprise Blockchain Solutions</h5>
                <p>Increase ROI with enterprise-grade blockchain solutions powered by AI, Robotics, and IoT technology.</p>
                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/myapps/img/icon-9.png" alt="" />
                <h5 className="mb-3">Decentralized Finance (DeFi)</h5>
                <p>Transforming finance with blockchain-powered solutions that redefine trust and accessibility.</p>
                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/myapps/img/icon-5.png" alt="" />
                <h5 className="mb-3">Tokenomics & Crypto Asset Development</h5>
                <p>Creating utility-driven digital assets for innovative ecosystems.</p>
                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/myapps/img/icon-2.png" alt="" />
                <h5 className="mb-3">Healthcare and Life Sciences</h5>
                <p>Predictive analytics improving early detection and personalized treatment plans.</p>
                <a href="">Read More <i className="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item bg-light p-5">
                <img className="img-fluid mb-4" src="/myapps/img/icon-8.png" alt="" />
                <h5 className="mb-3">Multiverse, VR, and AR.</h5>
                <p>Revolutionizing healthcare with blockchain, AI, and immersive technologies like Multiverse, VR, and AR.</p>
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