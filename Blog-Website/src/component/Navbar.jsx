import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doLogout, isLoggedIn } from "../service/Authentication";
import logo from "../assets/logo.svg";
import "../CSS/Nav.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  // const [LoggedIn, setLoggedIn] = useState(false);

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [LoggedIn, setLoggedIn] = useState(currentUser.loginStatus);
  const [showNav, setShowNav] = useState(false); // State to manage the visibility of nav
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

      {/* <!-- Navbar --> */}
      {/* -------------------------------------------------------------------------- */}

      <div className="header">
        <header className="header-content">
          <Link to="/" className="logo">
            <img src={logo} alt="logoImage" className="logo-icon" />
            <span className="logo-text">Blogify</span>
          </Link>

          <nav className={`nav ${showNav ? "active" : ""}`}>
            {/* Your navigation links here */}

            {currentUser.data !== undefined && (
              <>
                <Link className="nav-link" to="/user/dashboard">
                  Add Post
                </Link>

                <Link className="nav-link" to="/all-blogs">
                  All Posts
                </Link>

                <Link
                  className="nav-link"
                  to={`/all-my-blogs/${currentUser.data}`}
                >
                  YOur Posts
                </Link>

                <Link
                  className="nav-link"
                  to={`/bookmarked-blogs/${currentUser.data}`}
                >
                  Favurite Posts
                </Link>

                {/* <li className="nav-item">
                <p>Hello {currentUser.data && currentUser.data}</p>
              </li> */}
              </>
            )}

            {/* {currentUser.data !== undefined && (
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
          )} */}
          </nav>

          {LoggedIn ? (
            <Link to="/">
              <button className="nav-button" onClick={logOutHandler}>
                Logout
              </button>
            </Link>
          ) : (
            <>
              <Link to="/signin">
                <button className="nav-button">Login</button>
              </Link>

              <Link to="/signup">
                <button className="nav-button">Sign up for free</button>
              </Link>
            </>
          )}

          {/* Hamburger menu button */}
          <button
            type="button"
            className="menu-button"
            onClick={() => setShowNav(!showNav)} // Toggle nav visibility on button click
          >
            {
              !showNav ?    <GiHamburgerMenu className="larger-icon" /> :<IoClose className="larger-icon" />

            }

          </button>

          {/* <button href="#contact" className="contact-button">
            Contact Us
          </button> */}
        </header>
      </div>
    </>
  );
};

export default Navbar;
