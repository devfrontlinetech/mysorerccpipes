import React from "react";
import "../../assets/css/home/hero.css";
import heroVideo from "../../assets/video/hero-video.mp4";
import { FaCheckCircle, FaChevronDown } from "react-icons/fa";

function HeroSection() {
  const scrollToProducts = () => {
    const section = document.getElementById("products");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero-section" id="home">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line"></span>
            <span>Trusted RCC Pipe Manufacturer</span>
          </div>

          <h1 className="hero-title">
            Strong Foundations.
            <span>Reliable Infrastructure.</span>
          </h1>

          <p className="hero-description">
            High-quality reinforced cement concrete pipes engineered for
            drainage, infrastructure, construction, and industrial projects.
          </p>

          <div className="hero-features">
            <div className="hero-feature">
              <FaCheckCircle />
              <span>Quality Products</span>
            </div>

            <div className="hero-feature">
              <FaCheckCircle />
              <span>Reliable Supply</span>
            </div>

            <div className="hero-feature">
              <FaCheckCircle />
              <span>Built to Last</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-stat">
          <strong>10+</strong>
          <span>Years Experience</span>
        </div>

        <div className="hero-stat">
          <strong>100%</strong>
          <span>Quality Assured</span>
        </div>

        <div className="hero-stat">
          <strong>500+</strong>
          <span>Projects Supplied</span>
        </div>
      </div>

      <button
        className="hero-scroll"
        onClick={scrollToProducts}
        aria-label="Scroll to products"
      >
        <span>Scroll to explore</span>
        <FaChevronDown />
      </button>
    </section>
  );
}

export default HeroSection;
