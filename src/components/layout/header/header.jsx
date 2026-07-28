import React, { useState, useEffect } from "react";
import "../../../assets/css/layout/header.css";
import logo from "../../../assets/images/logo/rcc-logo.png";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "Products", link: "#products" },
    { id: 3, name: "Industries", link: "#manufacturing" },
    { id: 4, name: "Why Us", link: "#whychoose" },
    { id: 5, name: "Contact", link: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = (link) => {
    const section = document.querySelector(link);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className={`concretepipe-header ${
        scrolled ? "concretepipe-header-scrolled" : ""
      }`}
    >
      <nav className="concretepipe-navbar">
        {/* LOGO */}
        <div className="concretepipe-logo">
          <img
            src={logo}
            alt="RCC Concrete Pipes"
            className="concretepipe-logo-img"
            onClick={() => handleClick("#home")}
          />
        </div>

        {/* DESKTOP NAVIGATION */}
        <ul
          className={`concretepipe-nav-links ${
            scrolled ? "concretepipe-nav-scrolled" : ""
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                className="concretepipe-nav-link-btn"
                onClick={() => handleClick(item.link)}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA BUTTON */}
        <div className="concretepipe-header-actions">
          <button
            className="concretepipe-cta-btn"
            onClick={() => handleClick("#contact")}
          >
            Get Quote
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
