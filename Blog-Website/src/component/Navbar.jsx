import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doLogout, isLoggedIn } from "../service/Authentication";
import logo from "../assets/logo.svg";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  // const [LoggedIn, setLoggedIn] = useState(false);

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [LoggedIn, setLoggedIn] = useState(currentUser.loginStatus);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(currentUser.loginStatus);
  }, [currentUser.loginStatus]);
  console.log(currentUser.data);

  function logOutHandler() {
    setCurrentUser({
      data: "",
      loginStatus: false,
    });
    doLogout(() => {
      setLoggedIn(false);
      navigate("/");
    });
  }
  return (
    <>
      {/* --------------------------------------------------------------------------------------------------- */}
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        {/* <!-- Container wrapper --> */}
        <div className="container">
          {/* <!-- Navbar brand --> */}
          <Link className="navbar-brand me-2" to="/">
            <img
              // src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              src={logo}
              height="16"
              alt="MDB Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
          </Link>

          {/* <!-- Toggle button --> */}
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <!-- Collapsible wrapper --> */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {currentUser.data !== undefined && (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/user/dashboard">
                    Add Post
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/all-blogs">
                    All Posts
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/all-my-blogs/${currentUser.data}`}
                  >
                    YOur Posts
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to={`/bookmarked-blogs/${currentUser.data}`}
                  >
                    Favurite Posts
                  </Link>
                </li>

                {/* <li className="nav-item">
                <p>Hello {currentUser.data && currentUser.data}</p>
              </li> */}
              </ul>
            )}

            <div className="d-flex align-items-center">
              {LoggedIn ? (
                <Link to="/">
                  <button
                    data-mdb-ripple-init
                    type="button"
                    className="btn btn-link px-3 me-2"
                    onClick={logOutHandler}
                  >
                    Logout
                  </button>
                </Link>
              ) : (
                <>
                  <Link to="/signin">
                    <button
                      data-mdb-ripple-init
                      type="button"
                      className="btn btn-link px-3 me-2"
                    >
                      Login
                    </button>
                  </Link>

                  <Link to="/signup">
                    <button
                      data-mdb-ripple-init
                      type="button"
                      className="btn btn-primary me-3"
                    >
                      Sign up for free
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
          {/* <!-- Collapsible wrapper --> */}
        </div>
        {/* <!-- Container wrapper --> */}
        <Toaster position="top-center" reverseOrder={false} />
      </nav>
      {/* <!-- Navbar --> */}
      {/* -------------------------------------------------------------------------- */}

      <div className="header">
        <header className="header-content">
          <a href="#logo" className="logo">
            <img src={logo} alt="logoImage" className="logo-icon" />
            <span className="logo-text">StudySync</span>
          </a>

          {currentUser.data !== undefined && (
            <nav className="nav">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#features" className="nav-link">
                Features
              </a>
              <a href="#pricing" className="nav-link">
                Pricing
              </a>
              <a href="#blog" className="nav-link">
                Blog
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
            </nav>
          )}

          <button href="#contact" className="contact-button">
            Contact Us
          </button>

          <button type="button" className="menu-button">
            <img
              src="./images/Hamburger.svg"
              alt="menuButton"
              className="menu-icon"
            />
          </button>
        </header>
      </div>
    </>
  );
};

export default Navbar;
