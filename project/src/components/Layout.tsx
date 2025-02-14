import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Layout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = React.useState('');

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  useEffect(() => {
    // Initialize template features
    const initializeTemplate = () => {
      // @ts-ignore
      if (window.jQuery) {
        // @ts-ignore
        const $ = window.jQuery;

        // Initialize counter
        $('[data-toggle="counter-up"]').counterUp({
          delay: 10,
          time: 2000
        });

        // Initialize roadmap carousel
        $(".roadmap-carousel").owlCarousel({
          autoplay: true,
          smartSpeed: 1000,
          margin: 25,
          loop: true,
          dots: false,
          nav: true,
          navText: [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
          ],
          responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 3 },
            992: { items: 4 },
            1200: { items: 5 }
          }
        });

        // Sticky Navbar
        $(window).scroll(function () {
          if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
          } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
          }
        });

        // Back to top button
        $(window).scroll(function () {
          if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
          } else {
            $('.back-to-top').fadeOut('slow');
          }
        });
        $('.back-to-top').click(function () {
          $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
          return false;
        });
      }
    };

    // Initialize after a short delay to ensure all scripts are loaded
    setTimeout(initializeTemplate, 100);
  }, [location.pathname]); // Re-run when route changes

  // Helper function to determine if a link is active
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div>
      {/* Spinner */}
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" role="status"></div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 px-4 px-lg-5">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h2 className="m-0 text-primary">
            <img className="img-fluid me-2" src="/myapps/img/icon-1.png" alt="" style={{ width: "150px" }} />
            {/* OnChain */}
          </h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-4 py-lg-0">
            <Link to="/" className={`nav-item nav-link ${isActive('/')}`}>Home</Link>
            <Link to="/about" className={`nav-item nav-link ${isActive('/about')}`}>About</Link>
            <Link to="/service" className={`nav-item nav-link ${isActive('/service')}`}>Service</Link>
            <Link to="/roadmap" className={`nav-item nav-link ${isActive('/roadmap')}`}>Roadmap</Link>
            <div className="nav-item dropdown">
              <a href="#" className={`nav-link dropdown-toggle ${location.pathname.match(/\/(feature|token|faq)/) ? 'active' : ''}`} data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu shadow-sm m-0">
                <Link to="/feature" className={`dropdown-item ${isActive('/feature')}`}>Feature</Link>
                <Link to="/token" className={`dropdown-item ${isActive('/token')}`}>Token Sale</Link>
                <Link to="/faq" className={`dropdown-item ${isActive('/faq')}`}>FAQs</Link>
              </div>
            </div>
            <Link to="/blog" className={`nav-item nav-link ${isActive('/blog')}`}>Blog</Link>
            <Link to="/contact" className={`nav-item nav-link ${isActive('/contact')}`}>Contact</Link>
            {user ? (
              <>
                <Link to="/dashboard" className={`nav-item nav-link ${isActive('/dashboard')}`}>Dashboard</Link>
                <a href="#" className="nav-item nav-link" onClick={handleLogout}>Logout</a>
              </>
            ) : (
              <Link to="/dashboard" className={`nav-item nav-link ${isActive('/dashboard')}`}>Login</Link>
            )}
          </div>
          <div className="h-100 d-lg-inline-flex align-items-center d-none">
            <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-square rounded-circle bg-light text-primary me-2" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-square rounded-circle bg-light text-primary me-0" href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <div className="container-fluid bg-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6">
              <h1 className="text-primary mb-4">
                <img className="img-fluid me-2" src="/myapps/img/icon-1.png" alt="" style={{ width: "150px" }} />
                {/* Onchain */}
              </h1>
              <span>Shaping the Future with Innovative Solutions.</span>
            </div>
            <div className="col-md-6">
              <h5 className="mb-4">Newsletter</h5>
              <p>Stay updated with our latest news and announcements.</p>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="position-relative">
                  <input 
                    className="form-control bg-transparent w-100 py-3 ps-4 pe-5" 
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit" 
                    className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </form>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <h5 className="mb-4">Get In Touch</h5>
              <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
              <p><i className="fa fa-phone-alt me-3"></i>+1 234 567 890</p>
              <p><i className="fa fa-envelope me-3"></i>info@cryptocoin.com</p>
            </div> */}

            <div className="col-lg-3 col-md-6">
                <h5 className="mb-4">Contact Us</h5>
                <p><i className="fa fa-map-marker-alt me-3"></i>House # 353, 3rd Floor (North), Road # 05, DOHS Baridhara, Dhaka-1206</p>
                <p><i className="fa fa-phone-alt me-3"></i>0964311227</p>
                <p>
                    <i className="fa fa-envelope me-3"></i>
                    <a href="mailto:info@onchain.com.bd">info@onchain.com.bd</a><br/> {/* Added line break for second email */}
                    <i className="fa fa-envelope me-3"></i>
                    <a href="mailto:onchainsoftwareresearch@gmail.com">onchainsoftwareresearch@gmail.com</a>
                </p>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <h5 className="mb-4">Our Services</h5>
              <Link to="/service" className="btn btn-link">Currency Wallet</Link>
              <Link to="/service" className="btn btn-link">Currency Transaction</Link>
              <Link to="/service" className="btn btn-link">Bitcoin Investment</Link>
              <Link to="/service" className="btn btn-link">Token Sale</Link>
            </div> */}

            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4">Our Services</h5>
              <ul className="list-unstyled">
                <li><Link to="/b2g-services" className="btn btn-link">B2G Services</Link></li>
                <li><Link to="/enterprise-blockchain" className="btn btn-link">Enterprise Blockchain</Link></li>
                <li><Link to="/decentralized-finance" className="btn btn-link">Decentralized Finance</Link></li>
                <li><Link to="/healthtech-blockchain" className="btn btn-link">HealthTech Blockchain</Link></li>
                <li><Link to="/multiverse-robotics" className="btn btn-link">Multiverse & Robotics</Link></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4">Quick Links</h5>
              <Link to="/about" className="btn btn-link">About Us</Link>
              <Link to="/contact" className="btn btn-link">Contact Us</Link>
              <Link to="/service" className="btn btn-link">Our Services</Link>
              <Link to="/faq" className="btn btn-link">Terms & Condition</Link>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="mb-4">Follow Us</h5>
              <div className="d-flex">
                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                <a className="btn btn-square rounded-circle me-1" href=""><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; 2025 OnChain, All Right Reserved.
              </div>
              {/* <div className="col-md-6 text-center text-md-end">
                Designed By HTML Codex
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export { Layout };