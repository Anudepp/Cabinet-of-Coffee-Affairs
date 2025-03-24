import { useState } from "react";
import { motion } from "framer-motion";
import "./../styles/products.css";

export default function Products() {
  const [selectedTab, setSelectedTab] = useState("Arabica");

  const products = [
    {
      name: "Arabica Coffee Beans",
      types: ["Plantation", "Cherry"],
      grades: ["AAA", "AA", "A", "AB", "PB"],
      characteristics: ["Mild flavor", "High acidity", "Aromatic notes"],
      idealFor: "Ideal for specialty coffee blends and premium coffee brands",
      image: "/arabicacoffeebeans.png",
    },
    {
      name: "Robusta Coffee Beans",
      types: ["Plantation", "Cherry"],
      grades: ["AAA", "AA", "A", "AB", "PB"],
      characteristics: ["Strong flavor", "Low acidity", "Higher caffeine content"],
      idealFor: "Suitable for espresso blends and instant coffee production",
      image: "/robustacoffeebeans.png",
    },
  ];

  const selectedProduct =
    selectedTab === "Arabica" ? products[0] : products[1];

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="products-heading">Our Premium Coffee Beans</h2>

        {/* Tabs */}
        <div className="tabs">
          {["Arabica", "Robusta"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`tab-button ${selectedTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Product Display */}
        <motion.div
          key={selectedProduct.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="product-display"
        >
          {/* Product Image */}
          <div className="product-image">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="image"
            />
          </div>

          {/* Product Details */}
          <div className="product-details">
            <h3 className="product-name">{selectedProduct.name}</h3>

            {/* Types */}
            <div className="product-section">
              <h4 className="section-title">Types</h4>
              <div className="tag-container">
                {selectedProduct.types.map((type, idx) => (
                  <span key={idx} className="tag type-tag">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Grades */}
            <div className="product-section">
              <h4 className="section-title">Available Grades</h4>
              <div className="tag-container">
                {selectedProduct.grades.map((grade, idx) => (
                  <span key={idx} className="tag grade-tag">
                    {grade} ⭐
                  </span>
                ))}
              </div>
            </div>

            {/* Characteristics */}
            <div className="product-section">
              <h4 className="section-title">Key Characteristics</h4>
              <ul className="characteristics-list">
                {selectedProduct.characteristics.map((char, idx) => (
                  <li key={idx} className="characteristic-item">
                    <span className="bullet"></span>
                    {char}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div className="product-footer">
              <p className="ideal-for">{selectedProduct.idealFor}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}