import React from "react";
import "../../assets/css/home/contact.css";
import phoneImage from "../../assets/images/data-image/factory-03.jpg";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <span className="contact-eyebrow">LET'S CONNECT</span>

          <h2>
            Need Reliable
            <span> RCC Concrete Pipes?</span>
          </h2>

          <p className="contact-description">
            Whether you need RCC Hume Pipes for drainage, sewage, irrigation,
            culverts, or infrastructure projects, our team is ready to help with
            product details and project requirements.
          </p>

          <div className="contact-image">
            <img src={phoneImage} alt="RCC Concrete Pipe Enquiry" />
          </div>

          <div className="contact-details">
            <div className="contact-detail">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>

              <div>
                <span>Call Us</span>
                <strong>+91 96005 44451</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaWhatsapp />
              </div>

              <div>
                <span>WhatsApp Enquiry</span>
                <strong>Quick Product Assistance</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <span>Service Area</span>
                <strong>Mysuru, Karnataka is 570009 </strong>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <div className="form-header">
            <span>REQUEST A QUOTE</span>

            <h3>Tell Us About Your Requirement</h3>

            <p>
              Share your project details and our team will get back to you with
              the right product information.
            </p>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Your Name</label>

                <input type="text" placeholder="Enter your name" required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>

                <input type="tel" placeholder="Enter phone number" required />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Project Requirement</label>

              <textarea
                rows="5"
                placeholder="Tell us about pipe size, quantity, project type, or any other requirement..."
              ></textarea>
            </div>

            <button type="submit" className="contact-submit">
              Send Enquiry
              <FaArrowRight />
            </button>
          </form>

          <div className="contact-form-footer">
            <FaEnvelope />

            <span>We usually respond to enquiries as soon as possible.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
