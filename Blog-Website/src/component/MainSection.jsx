import React from "react";
import "../CSS/MainSection.css"
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
              Join us on this Journey



            </h1>
            <p className="section-description">
             Embark on a journey where every blog post is a door to wisdom, every comment a gateway to discussions, and every bookmark a treasure trove of cherished reads.
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
