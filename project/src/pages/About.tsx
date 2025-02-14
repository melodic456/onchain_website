import React from 'react';

export function About() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">About Us</h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">About</li>
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
                <p className="text-primary fs-5 mb-4">Innovating the Future, One Block at a Time</p>
                <p>In a world where innovation moves at lightning speed, staying ahead requires more than just technology—it demands mastery. That’s where we come in. By combining blockchain , AI , and IoT , we craft ecosystems that are not only revolutionary but also sustainable, transparent, and infinitely scalable.
                </p>
                {/* <p className="mb-4">With years of experience in blockchain technology and financial services, we've built a platform that prioritizes security, transparency, and user experience.</p> */}
                {/* <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>Licensed and regulated platform</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>100% secure transactions</span>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                  <span>24/7 dedicated support</span>
                </div>
                <a className="btn btn-primary py-3 px-4" href="">Read More</a> */}
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
    </>
  );
}