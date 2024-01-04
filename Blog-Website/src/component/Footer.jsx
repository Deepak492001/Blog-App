import React from "react";

import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <footer className="footer">
          <div className="footer-top">
            <div className="comp-logo">
              <Link className="logo-link" href="#">
                <img className="logo-svg" src="./images/StudySyn.svg" />
                StudySync
              </Link>
            </div>
            <p className="filler-text">
              Seamless Learning for Brighter Futures.
            </p>
            <div className="social">
              <Link className="social-link" href="#">
                <img src={instagram} className="social-icon" />
              </Link>
              <Link className="social-link">
                <img src={linkedin} className="social-icon" />
              </Link>
              <Link className="social-link">
                <img src="./images/Microsoft.svg" className="social-icon" />
              </Link>
              <Link className="social-link">
                <img src="./images/twitter.svg" className="social-icon" />
              </Link>
            </div>
          </div>

          <div className="footer-grid">
            {/* <!-- column 1 --> */}
            <div className="footer-grid-column">
              <div className="footer-grid-heading">Products</div>
              <ul className="footer-links-list">
                <li>
                  <Link href="#overview" className="footer-link">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    Customers
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- column 2 --> */}
            <div className="footer-grid-column">
              <div className="footer-grid-heading">Company</div>
              <ul className="footer-links-list">
                <li>
                  <Link href="#overview" className="footer-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    Investor Relations
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- column 3 --> */}
            <div className="footer-grid-column">
              <div className="footer-grid-heading">Support</div>
              <ul className="footer-links-list">
                <li>
                  <Link href="#overview" className="footer-link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    Chat
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- column 4 --> */}
            <div className="footer-grid-column">
              <div className="footer-grid-heading">Legal</div>
              <ul className="footer-links-list">
                <li>
                  <Link href="#overview" className="footer-link">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#overview" className="footer-link">
                    Cookie Settings
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="footer-copyright">
          Made with 	<FaHeart style={{color:"red"}} />  by Deepak Bisht
          <br />
          © 2023 - Present Blogger. All rights reserved.
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------------------------------------- */}

      {/* <footer className="bg-body-tertiary text-center">
        <div className="container p-4 pb-0">
          {/* <!-- Section: Social media --> */}
      {/* <section className="mb-4"> */}
      {/* <!-- Facebook --> */}
      {/* <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            {/* <!-- Twitter --> */}
      {/* <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </Link> */}

      {/* <!-- Google --> */}
      {/* <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i> */}
      {/* </Link>  */}

      {/* <!-- Instagram --> */}
      {/* <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </Link> */}

      {/* <!-- Linkedin --> */}
      {/* <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </Link>
            {/* <!-- Github --> */}
      {/* <Link
              data-mdb-ripple-init
              className="btn text-white btn-floating m-1"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </Link> */}
      {/* </section>  */}
      {/* <!-- Section: Social media --> */}
      {/* </div> */}
      {/* <!-- Grid container --> */}

      {/* <!-- Copyright --> */}
      {/* <div */}
      {/* //   className="text-center p-3"
        //   style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        // >
        //   © 2020 Copyright:
        //   <Link className="text-body" href="https://mdbootstrap.com/">
        //     MDBootstrap.com
        //   </Link>
        // </div> */}
      {/* <!-- Copyright --> */}
      {/* // </footer> */}
    </>
  );
};

export default Footer;
