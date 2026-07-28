import React from "react";
import "../../assets/css/home/products.css";
import products from "../../data/product-data";

import { FaStar, FaWhatsapp, FaCheckCircle } from "react-icons/fa";

function Products() {
  const handleWhatsApp = (product) => {
    const message = `Hello, I need more details about:

Product: ${product.name}
Category: ${product.category}
Material: ${product.material}
Size: ${product.sizes[0].size}

Please share complete specifications and quotation.`;

    window.open(
      `https://wa.me/919600544451?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section className="product-section" id="products">
      {/* SECTION HEADER */}

      <div className="product-section-header">
        <span className="product-eyebrow">RCC CONCRETE PRODUCTS</span>

        <h2 className="product-title">Our Products</h2>

        <p className="product-subtitle">
          High-quality RCC concrete pipes manufactured for drainage, sewerage,
          culvert, irrigation, and infrastructure projects.
        </p>
      </div>

      {/* PRODUCT GRID */}

      <div className="product-container">
        {products.map((item) => (
          <article className="product-card" key={item.id}>
            {/* PRODUCT IMAGE */}
            <div className="product-img-box">
              <img
                src={item.image}
                alt={`${item.name} - ${item.material}`}
                loading="lazy"
              />

              <span className="product-category">{item.category}</span>
            </div>

            {/* BASIC PRODUCT INFORMATION */}
            <div className="product-content">
              <div className="product-heading">
                <h3 className="product-name">{item.name}</h3>

                <div className="rating">
                  {[...Array(item.rating)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
              </div>

              <p className="material">{item.material}</p>

              <div className="product-details">
                <div className="detail-item">
                  <span className="detail-label">Available Size</span>
                  <strong>{item.sizes[0].size}</strong>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Starting Price</span>
                  <strong className="price">{item.sizes[0].price}</strong>
                </div>
              </div>

              <button className="ask-btn" onClick={() => handleWhatsApp(item)}>
                <FaWhatsapp />
                Get Product Details
              </button>
            </div>

            {/* HOVER DETAILS PANEL */}
            <div className="product-hover-details">
              <div className="hover-details-inner">
                <span className="hover-label">PRODUCT DETAILS</span>

                <h3>{item.name}</h3>

                <p className="hover-description">{item.description}</p>

                {item.features && (
                  <ul className="product-features">
                    {item.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>
                        <FaCheckCircle />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <button
                  className="hover-ask-btn"
                  onClick={() => handleWhatsApp(item)}
                >
                  <FaWhatsapp />
                  Get Product Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
