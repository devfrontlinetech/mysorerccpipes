import React, { useState } from "react";
import "../../../assets/css/layout/footer.css";
import logo from "../../../assets/images/logo/rcc-logo.png";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaArrowUp,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  const [showMore, setShowMore] = useState(false);

  const links = [
    { name: "Home", link: "#home" },
    { name: "Products", link: "#products" },
    { name: "Manufacturing", link: "#manufacturing" },
    { name: "Why Choose Us", link: "#whychoose" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaFacebookF />,
      url: "https://facebook.com",
      label: "Facebook",
    },
    {
      id: 2,
      icon: <FaInstagram />,
      url: "https://instagram.com",
      label: "Instagram",
    },
    {
      id: 3,
      icon: <FaLinkedinIn />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      id: 4,
      icon: <FaTwitter />,
      url: "https://twitter.com",
      label: "Twitter",
    },
  ];

  const scrollToSection = (link) => {
    const section = document.querySelector(link);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="rcc-footer" id="contact">
      <div className="rcc-footer-container">
        {/* ABOUT */}
        <div className="footer-col footer-about">
          <img src={logo} alt="RCC Concrete Pipes" className="footer-logo" />

          <p className="footer-description">
            We manufacture durable RCC concrete pipes designed for drainage,
            sewage, irrigation, culvert, and infrastructure projects.
          </p>

          {showMore && (
            <p className="footer-more-text">
              Our products are manufactured with carefully selected materials
              and controlled production processes to deliver strength,
              durability, and reliable long-term performance.
            </p>
          )}

          <button
            type="button"
            className="see-more-btn"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "See Less" : "Read More"}
            <FaArrowRight />
          </button>

          <div className="footer-social">
            {socialLinks.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-col footer-links">
          <h3>Quick Links</h3>

          <ul>
            {links.map((item) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => scrollToSection(item.link)}
                >
                  <FaArrowRight />
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col footer-contact">
          <h3>Contact Us</h3>

          <div className="footer-contact-item">
            <span className="contact-icon">
              <FaMapMarkerAlt />
            </span>

            <div>
              <small>Location</small>
              <p>Mysore, Karnataka is 570009</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="contact-icon">
              <FaPhoneAlt />
            </span>

            <div>
              <small>Phone</small>
              <p>+91 96005 44451</p>
            </div>
          </div>

          <div className="footer-contact-item">
            <span className="contact-icon">
              <FaEnvelope />
            </span>

            <div>
              <small>Email</small>
              <p>info@mysorerccpipes.in</p>
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-col footer-newsletter">
          <h3>Stay Connected</h3>

          <p>
            Get updates about our latest RCC concrete pipe products and
            infrastructure solutions.
          </p>

          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />

            <button type="submit" aria-label="Subscribe">
              <FaArrowRight />
            </button>
          </form>

          <span className="newsletter-note">We respect your privacy.</span>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} RCC Pipes Mysuru. All Rights Reserved.
        </p>

        <p>
          Designed by{" "}
          <a
            href="https://frontlinetechnologies.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontline Technologies
          </a>
        </p>

        <button
          type="button"
          className="footer-top-btn"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
