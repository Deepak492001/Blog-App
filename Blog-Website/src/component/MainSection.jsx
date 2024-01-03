import React from "react";

import { Link } from "react-router-dom";
import sectionImage from "../assets/sectionImage.svg";
const MainSection = () => {
  return (
    <>
      <div className="content">
        <section className="main-section">
          <div className="content-left">
            <p className="section-label">Very proud to introduce</p>
            <h1 className="section-title">
              Seamless Learning for Brighter Futures
            </h1>
            <p className="section-description">
              Our innovative platform offers an effortless and seamless approach
              to learning, empowering students of all ages to achieve brighter
              futures. Join us on a transformative journey to simplify education
              and unlock your full potential.
            </p>
            <div className="button-group">
              <button href="#start" className="start-button">
                Start Now
              </button>
              <button href="#tour" className="tour-button">
                Take Tour
              </button>
            </div>
          </div>

          <div className="content-right">
            <div className="image-container">
              <img
                src={sectionImage}
                alt="sectionImage"
                className="section-image"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainSection;
