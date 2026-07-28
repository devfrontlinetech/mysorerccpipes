import React from "react";
import "../../assets/css/home/whychoose.css";
import pipeImage from "../../assets/images/data-image/factory-02.jpg";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "High Strength RCC Pipes",
    description:
      "Manufactured using quality concrete and reinforcement materials for dependable structural performance.",
  },
  {
    id: 2,
    title: "Consistent Manufacturing",
    description:
      "Controlled production processes help maintain uniform dimensions, strength, and finish across every pipe.",
  },
  {
    id: 3,
    title: "Long-Term Durability",
    description:
      "Designed to perform reliably under demanding conditions, heavy loads, and long-term infrastructure use.",
  },
  {
    id: 4,
    title: "Quality-Focused Production",
    description:
      "Each pipe is carefully inspected for dimensional accuracy, surface quality, and manufacturing consistency.",
  },
  {
    id: 5,
    title: "Multiple Sizes Available",
    description:
      "A wide range of pipe sizes supports drainage, sewage, irrigation, culvert, and infrastructure requirements.",
  },
  {
    id: 6,
    title: "Reliable Project Supply",
    description:
      "Efficient production and organized dispatch support dependable supply for construction and infrastructure projects.",
  },
];

function WhyChoose() {
  return (
    <section className="whychoose-section" id="whychoose">
      <div className="whychoose-wrapper">
        <motion.div
          className="whychoose-image"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src={pipeImage} alt="RCC Concrete Pipes" loading="lazy" />

          <div className="whychoose-image-badge">
            <strong>RCC</strong>
            <span>Built for Infrastructure</span>
          </div>
        </motion.div>

        <motion.div
          className="whychoose-content"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="whychoose-eyebrow">WHY CHOOSE OUR RCC PIPES</span>

          <h2>Reliable Concrete Pipes for Long-Term Infrastructure</h2>

          <p className="whychoose-intro">
            We manufacture reinforced concrete pipes designed for demanding
            drainage, sewage, irrigation, culvert, and infrastructure
            applications. Our focus is on dependable quality, durability, and
            consistent manufacturing.
          </p>

          <div className="whychoose-list">
            {features.map((item, index) => (
              <motion.div
                key={item.id}
                className="whychoose-item"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
              >
                <div className="whychoose-number">
                  {String(item.id).padStart(2, "0")}
                </div>

                <div className="whychoose-item-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChoose;
