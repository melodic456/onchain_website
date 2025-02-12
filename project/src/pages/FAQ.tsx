import React from 'react';

export function FAQ() {
  return (
    <>
      {/* Header Start */}
      <div className="container-fluid hero-header bg-light py-5 mb-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 mb-3 animated slideInDown">FAQs</h1>
              <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">FAQs</li>
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

      {/* FAQs Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <h1 className="display-6">FAQs</h1>
            <p className="text-primary fs-5 mb-5">Frequently Asked Questions</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.1s">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      How do I create an account?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Creating an account is simple. Click the "Sign Up" button, enter your email and password, and follow the verification process. Once verified, you can start using our platform immediately.
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What payment methods do you accept?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We accept various payment methods including credit/debit cards, bank transfers, and other cryptocurrencies. All transactions are processed securely through our platform.
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.3s">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      How secure is your platform?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      We implement industry-leading security measures including 2FA, cold storage, and regular security audits to ensure your assets are protected at all times.
                    </div>
                  </div>
                </div>
                <div className="accordion-item wow fadeInUp" data-wow-delay="0.4s">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      What are your trading fees?
                    </button>
                  </h2>
                  <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Our trading fees are competitive and transparent. We offer tiered pricing based on trading volume, with fees starting as low as 0.1%. View our complete fee schedule for details.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQs End */}
    </>
  );
}