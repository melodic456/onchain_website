import React from 'react';

export function Token() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">Token Sale</h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Token Sale</li>
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

      {/* Token Sale Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <h1 className="display-6">Token Sale</h1>
            <p className="text-primary fs-5 mb-5">Token Sale Countdown</p>
          </div>
          <div className="row g-3">
            <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-light text-center p-3">
                <h1 className="mb-0">0</h1>
                <span className="text-primary fs-5">Days</span>
              </div>
            </div>
            <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="bg-light text-center p-3">
                <h1 className="mb-0">0</h1>
                <span className="text-primary fs-5">Hours</span>
              </div>
            </div>
            <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="bg-light text-center p-3">
                <h1 className="mb-0">0</h1>
                <span className="text-primary fs-5">Minutes</span>
              </div>
            </div>
            <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="bg-light text-center p-3">
                <h1 className="mb-0">0</h1>
                <span className="text-primary fs-5">Seconds</span>
              </div>
            </div>
            <div className="col-12 text-center py-4">
              <a className="btn btn-primary py-3 px-4" href="">Buy Token</a>
            </div>
            <div className="col-12 text-center">
              <img className="img-fluid m-1" src="/myapps/img/payment-1.png" alt="" style={{ width: "50px" }} />
              <img className="img-fluid m-1" src="/myapps/img/payment-2.png" alt="" style={{ width: "50px" }} />
              <img className="img-fluid m-1" src="/myapps/img/payment-3.png" alt="" style={{ width: "50px" }} />
              <img className="img-fluid m-1" src="/myapps/img/payment-4.png" alt="" style={{ width: "50px" }} />
            </div>
          </div>
        </div>
      </div>
      {/* Token Sale End */}
    </>
  );
}