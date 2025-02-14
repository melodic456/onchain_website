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
              <h1 className="display-4 mb-3 animated slideInDown">Code the Future. Disrupt the Norm.</h1>
              <p className="animated slideInDown">
              Onchain Software & Research is redefining what's possible with blockchain, AI, Robotics and Emerging Technology We don’t just adapt to innovation—we create it. 
              Break boundaries with us.
              </p>
              <Link to="/dashboard" className="btn btn-primary py-3 px-4 animated slideInDown">
                Subscribe 
              </Link>
            </div>
            <div className="col-lg-6 animated fadeIn">
              <img className="img-fluid animated pulse infinite" style={{ animationDuration: "3s" }} src="/myapps/img/hero-1.png" alt="" />
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
              <img className="img-fluid" src="/myapps/img/about.png" alt="" />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6">About Us</h1>
                <p className="text-primary fs-5 mb-4">Innovating the Future, One Block at a Time</p>
                <p>In a world where innovation moves at lightning speed, staying ahead requires more than just technology—it demands mastery. That’s where we come in. By combining blockchain , AI , and IoT , we craft ecosystems that are not only revolutionary but also sustainable, transparent, and infinitely scalable.
                </p>
                {/* <p className="text-primary fs-5 mb-4">The Most Trusted Cryptocurrency Platform</p>
                <p>
                  At CryptoCoin, we're dedicated to making cryptocurrency accessible to everyone.
                  Our platform combines cutting-edge security with user-friendly features to provide
                  the best possible experience in digital asset management.
                </p> */}
                {/* <div className="d-flex align-items-center mb-2">
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
                </div> */}
                <Link to="/about" className="btn btn-primary py-3 px-4">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Facts Start */}
      {/* <div className="container-xxl bg-light py-5 my-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
              <img className="img-fluid mb-4" src="/myapps/img/icon-9.png" alt="" />
              <h1 className="display-4" data-toggle="counter-up">123456</h1>
              <p className="fs-5 text-primary mb-0">Today Transactions</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.3s">
              <img className="img-fluid mb-4" src="/myapps/img/icon-10.png" alt="" />
              <h1 className="display-4" data-toggle="counter-up">123456</h1>
              <p className="fs-5 text-primary mb-0">Monthly Transactions</p>
            </div>
            <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.5s">
              <img className="img-fluid mb-4" src="/myapps/img/icon-2.png" alt="" />
              <h1 className="display-4" data-toggle="counter-up">123456</h1>
              <p className="fs-5 text-primary mb-0">Total Transactions</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* Facts End */}

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

      {/* Features Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <h1 className="display-6">Why Us!</h1>
            <p className="text-primary fs-5 mb-5">Driven by Innovation, Focused on Security</p>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src="/myapps/img/icon-7.png" alt="" />
                <div className="ps-4">
                  <h5 className="mb-3">Innovation-Driven Approach</h5>
                  <span>We continuously explore and integrate emerging technologies to stay ahead of the curve.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src="/myapps/img/icon-6.png" alt="" />
                <div className="ps-4">
                  <h5 className="mb-3">User-Centric Design</h5>
                    <span>We prioritize seamless, intuitive user experiences, ensuring that our solutions are easy to implement and use.</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src="/myapps/img/icon-5.png" alt="" />
                <div className="ps-4">
                  <h5 className="mb-3">Commitment to Security</h5>
                  <span>Our systems are designed with robust security frameworks to safeguard your data and maintain trust.</span>
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