import { useState } from "react";
import { motion } from "framer-motion";

// ----------------------
// Types
// ----------------------
interface CoffeeProduct {
  id: number;
  name: string;
  type: "Arabica" | "Robusta";
  process: "Washed" | "Unwashed";
  Area: string;
  Altitude: string;
  characteristics: string[];
  image: string;
}

interface CoffeeCategory {
  title: string;
  type: "Arabica" | "Robusta";
  products: CoffeeProduct[];
}

// ----------------------
// Sample Data
// ----------------------
const coffeeCategories: CoffeeCategory[] = [
  {
    title: "Washed Arabica",
    type: "Arabica",
    products: [
      {
        id: 1,
        name: "Mysore Nuggets",
        type: "Arabica",
        process: "Washed",
        Area: "Central Highlands",
        Altitude: "1200-1800m",
        characteristics: ["Balanced", "Smooth"],
        image: "/Beans/Arabica/Washed/mysore-nuggets.jpg",
      },
      {
        id: 2,
        name: "Plantation AA",
        type: "Arabica",
        process: "Washed",
        Area: "Central Highlands",
        Altitude: "1200-1800m",
        characteristics: ["Floral", "Caramel finish"],
        image: "/Beans/Arabica/Washed/plantation-aa.jpg",
      },
      {
        id: 3,
        name: "Plantation A",
        type: "Arabica",
        process: "Washed",
        Area: "Central Highlands",
        Altitude: "1200-1800m",
        characteristics: ["Floral", "Caramel finish"],
        image: "/Beans/Arabica/Washed/plantation-a.jpg",
      },
      {
        id: 4,
        name: "Plantation B",
        type: "Arabica",
        process: "Washed",
        Area: "Central Highlands",
        Altitude: "1200-1800m",
        characteristics: ["Floral", "Caramel finish"],
        image: "/Beans/Arabica/Washed/plantation-b.jpg",
      },
      {
        id: 5,
        name: "Plantation PB",
        type: "Arabica",
        process: "Washed",
        Area: "Central Highlands",
        Altitude: "1200-1800m",
        characteristics: ["Floral", "Caramel finish"],
        image: "/Beans/Arabica/Washed/plantation-pb.jpg",
      },
      {
        id: 6,
        name: "Plantation C",
        type: "Arabica",
        process: "Washed",
        Area: "Central Highlands",
        Altitude: "1200-1800m",
        characteristics: ["Floral", "Caramel finish"],
        image: "/Beans/Arabica/Washed/plantation-c.jpg",
      },
    ],
  },
  {
    title: "Unwashed Arabica",
    type: "Arabica",
    products: [
      {
        id: 7,
        name: "Arabica Cherry AA",
        type: "Arabica",
        process: "Unwashed",
        Area: "Southern Highlands",
        Altitude: "1100-1400m",
        characteristics: ["Fruity", "Sweet"],
        image: "/Beans/Arabica/Unwashed/arabica-cherry-aa.jpg",
      },
      {
        id: 8,
        name: "Arabica Cherry A",
        type: "Arabica",
        process: "Unwashed",
        Area: "Southern Highlands",
        Altitude: "1100-1400m",
        characteristics: ["Fruity", "Sweet"],
        image: "/Beans/Arabica/Unwashed/arabica-cherry-a.jpg",
      },
            {
        id: 9,
        name: "Arabica Cherry AB",
        type: "Arabica",
        process: "Unwashed",
        Area: "Southern Highlands",
        Altitude: "1100-1400m",
        characteristics: ["Fruity", "Sweet"],
        image: "/Beans/Arabica/Unwashed/arabica-cherry-ab.jpg",
      },
                  {
        id: 10,
        name: "Arabica Cherry PB",
        type: "Arabica",
        process: "Unwashed",
        Area: "Southern Highlands",
        Altitude: "1100-1400m",
        characteristics: ["Fruity", "Sweet"],
        image: "/Beans/Arabica/Unwashed/arabica-cherry-pb.jpg",
      },
                        {
        id: 11,
        name: "Arabica Cherry C",
        type: "Arabica",
        process: "Unwashed",
        Area: "Southern Highlands",
        Altitude: "1100-1400m",
        characteristics: ["Fruity", "Sweet"],
        image: "/Beans/Arabica/Unwashed/arabica-cherry-c.jpg",
      },
    ],
  },
  {
    title: "Washed Robusta",
    type: "Robusta",
    products: [
      {
        id: 12,
        name: "Robusta Kaapi Royale",
        type: "Robusta",
        process: "Washed",
        Area: "Coorg",
        Altitude: "800-1200m",
        characteristics: ["Bold", "Chocolatey"],
        image: "/Beans/Robusta/Washed/kaapi-royale.jpg",
      },
      {
        id: 13,
        name: "Parchment AA",
        type: "Robusta",
        process: "Washed",
        Area: "Coorg",
        Altitude: "800-1200m",
        characteristics: ["Bold", "Chocolatey"],
        image: "/Beans/Robusta/Washed/parchment-aa.jpg",
      },
      {
        id: 14,
        name: "Parchment AB",
        type: "Robusta",
        process: "Washed",
        Area: "Coorg",
        Altitude: "800-1200m",
        characteristics: ["Bold", "Chocolatey"],
        image: "/Beans/Robusta/Washed/parchment-ab.jpg",
      },
      {
        id: 14,
        name: "Parchment C",
        type: "Robusta",
        process: "Washed",
        Area: "Coorg",
        Altitude: "800-1200m",
        characteristics: ["Bold", "Chocolatey"],
        image: "/Beans/Robusta/Washed/parchment-c.jpg",
      },
      {
        id: 14,
        name: "Parchment PB",
        type: "Robusta",
        process: "Washed",
        Area: "Coorg",
        Altitude: "800-1200m",
        characteristics: ["Bold", "Chocolatey"],
        image: "/Beans/Robusta/Washed/parchment-pb.jpg",
      },
    ],
  },
  {
    title: "Unwashed Robusta",
    type: "Robusta",
    products: [
      {
        id: 18,
        name: "Cherry AAA",
        type: "Robusta",
        process: "Unwashed",
        Area: "Eastern Ghats",
        Altitude: "600-1000m",
        characteristics: ["Strong body", "Earthy"],
        image: "/Beans/Robusta/Unwashed/cherry-aaa.jpg",
      },
      {
        id: 19,
        name: "Cherry AA",
        type: "Robusta",
        process: "Unwashed",
        Area: "Eastern Ghats",
        Altitude: "600-1000m",
        characteristics: ["Strong body", "Earthy"],
        image: "/Beans/Robusta/Unwashed/cherry-aa.jpg",
      },
      {
        id: 18,
        name: "Cherry A",
        type: "Robusta",
        process: "Unwashed",
        Area: "Eastern Ghats",
        Altitude: "600-1000m",
        characteristics: ["Strong body", "Earthy"],
        image: "/Beans/Robusta/Unwashed/cherry-a.jpg",
      },
      {
        id: 18,
        name: "Cherry AB",
        type: "Robusta",
        process: "Unwashed",
        Area: "Eastern Ghats",
        Altitude: "600-1000m",
        characteristics: ["Strong body", "Earthy"],
        image: "/Beans/Robusta/Unwashed/cherry-ab.jpg",
      },
      {
        id: 18,
        name: "Cherry PB",
        type: "Robusta",
        process: "Unwashed",
        Area: "Eastern Ghats",
        Altitude: "600-1000m",
        characteristics: ["Strong body", "Earthy"],
        image: "/Beans/Robusta/Unwashed/cherry-pb.jpg",
      },
    ],
  },
];

// ----------------------
// Component
// ----------------------
export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<CoffeeProduct | null>(
    null
  );
  const [activeTab, setActiveTab] = useState<"Arabica" | "Robusta">("Arabica");

  // Filter categories based on active tab
  const filteredCategories = coffeeCategories.filter(
    (cat) => cat.type === activeTab
  );

  return (
    <section id="products" className="py-16 bg-[#f9f5f0]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-[#4a3728] mb-12">
          Our Coffee Selection
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          {["Arabica", "Robusta"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as "Arabica" | "Robusta")}
              className={`px-6 py-2 mx-2 text-lg font-medium rounded-full transition-all ${
                activeTab === tab
                  ? "bg-[#4a3728] text-white shadow-md"
                  : "bg-white text-[#4a3728] border border-[#4a3728] hover:bg-[#8b7355] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {filteredCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-3xl font-serif text-[#4a3728] mb-8 border-b-2 border-[#8b7355] inline-block">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {category.products.map((product) => (
                  <motion.div
                    key={product.id}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-serif text-lg text-[#4a3728]">
                        {product.name}
                      </h4>
                      <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-[#8b7355] text-white">
                        {product.process}
                      </span>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="mt-4 block w-full bg-[#4a3728] text-white py-2 rounded-lg hover:bg-[#8b7355] transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
{selectedProduct && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="bg-white p-8 rounded-lg shadow-xl max-w-lg w-full relative flex flex-col max-h-[90vh] overflow-y-auto"
    >
      {/* Close (X) top-right */}
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>

      {/* Product Title */}
      <h3 className="text-2xl font-serif mb-4 text-[#4a3728]">
        {selectedProduct.name}
      </h3>

      {/* Image */}
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />

      {/* Details */}
      <div className="space-y-2 text-sm text-gray-700 mb-6">
        <p>
          <strong>Type:</strong> {selectedProduct.type}
        </p>
        <p>
          <strong>Process:</strong> {selectedProduct.process}
        </p>
        <p>
          <strong>Area:</strong> {selectedProduct.Area}
        </p>
        <p>
          <strong>Altitude:</strong> {selectedProduct.Altitude}
        </p>
        <p>
          <strong>Characteristics:</strong>{" "}
          {selectedProduct.characteristics.join(", ")}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-between gap-4 mt-auto">
        <button
          className="flex-1 bg-[#8b7355] text-white px-4 py-2 rounded-md hover:bg-[#6b5a45] transition-colors"
        >
          Request Sample
        </button>
        <button
          onClick={() => setSelectedProduct(null)}
          className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
        >
          Close
        </button>
      </div>
    </motion.div>
  </div>
)}
    </section>
  );
}