import { useState } from "react";
import { motion } from "framer-motion";

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
    <section id="products" className="py-20 bg-[#FDF5E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center text-[#4A3728] mb-12">
          Our Premium Coffee Beans
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-8">
          {["Arabica", "Robusta"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-2 text-lg font-medium rounded-lg ${
                selectedTab === tab
                  ? "bg-[#8B7355] text-white"
                  : "bg-[#D2B48C] text-[#4A3728]"
              } transition-all duration-300`}
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
          className="flex flex-col md:flex-row items-center gap-8"
        >
          {/* Product Image */}
          <div className="w-full md:w-1/2">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full rounded-xl shadow-lg"
            />
          </div>

          {/* Product Details */}
          <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-2xl font-serif text-[#4A3728] mb-4">
              {selectedProduct.name}
            </h3>

            {/* Types */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-[#4A3728]">Types</h4>
              <div className="flex gap-2 flex-wrap">
                {selectedProduct.types.map((type, idx) => (
                  <span
                    key={idx}
                    className="bg-[#8B7355] text-white px-3 py-1 rounded-full text-sm"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Grades */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-[#4A3728]">
                Available Grades
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.grades.map((grade, idx) => (
                  <span
                    key={idx}
                    className="bg-[#D2B48C] text-[#4A3728] px-3 py-1 rounded-full text-sm"
                  >
                    {grade} ⭐
                  </span>
                ))}
              </div>
            </div>

            {/* Characteristics */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-[#4A3728]">
                Key Characteristics
              </h4>
              <ul className="space-y-2">
                {selectedProduct.characteristics.map((char, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-[#8B7355] rounded-full mr-2"></span>
                    {char}
                  </li>
                ))}
              </ul>
            </div>

            {/* Ideal For */}
            <div className="pt-4 border-t border-[#D2B48C]">
              <p className="text-[#4A3728] italic">{selectedProduct.idealFor}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}