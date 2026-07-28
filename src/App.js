import React from "react";
import Header from "./components/layout/header/header.jsx";
import HeroSection from "./components/home/hero.jsx";
import Products from "./components/home/products.jsx";
import ManufacturingProcess from "./components/home/manufacture-process.jsx";
import WhyChoose from "./components/home/why-choose.jsx";
import ContactSection from "./components/home/contact.jsx";
import Footer from "./components/layout/footer/footer.jsx";
import Float from "./components/common/float.jsx";
import Bottomnav from "./components/layout/bottom-menu/bottom-nav.jsx";

// import "./components/style.css";

function App() {
  // Scroll to section handler
  const handleMenuClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header />

      <section id="home">
        <HeroSection />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="manufacturing">
        <ManufacturingProcess />
      </section>
      <section id="whychoose">
        <WhyChoose />
      </section>

      <section id="contact">
        <ContactSection />
      </section>
      <Footer />

      <Bottomnav onMenuClick={handleMenuClick} />
      <Float />
    </div>
  );
}

export default App;
