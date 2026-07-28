import React from "react";
import "../../assets/css/home/map.css";

const Map = () => {
  return (
    <section className="map-section" id="location">
      <div className="map-wrapper">
        <iframe
          title="Mysore RCC Pipes Location"
          src="https://www.google.com/maps?q=Mysore,Karnataka&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Map;