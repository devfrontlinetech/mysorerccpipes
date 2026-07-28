import React from "react";
import "../../assets/css/home/manufacture.css";
import processSteps from "../../data/manufacture-data";
import { motion } from "framer-motion";

function ManufacturingProcess() {
  return (
    <section className="manufacturing-section" id="manufacturing">
      <div className="manufacturing-header">
        <span className="manufacturing-eyebrow">
          RCC HUME PIPE MANUFACTURING
        </span>

        <h2 className="manufacturing-title">
          Built Through a Reliable Manufacturing Process
        </h2>

        <p className="manufacturing-subtitle">
          From carefully selected raw materials to final quality inspection,
          every RCC Hume Pipe passes through a controlled manufacturing process
          designed for strength, durability, and reliable infrastructure
          performance.
        </p>
      </div>

      <div className="manufacturing-container">
        {processSteps.map((step, index) => (
          <motion.article
            key={step.id}
            className="manufacturing-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8 }}
          >
            <div className="manufacturing-image">
              <img src={step.image} alt={step.title} loading="lazy" />

              <span className="manufacturing-number">
                {String(step.id).padStart(2, "0")}
              </span>
            </div>

            <div className="manufacturing-content">
              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ManufacturingProcess;
