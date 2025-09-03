import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// 1. Import your Footer component
import Footer from "./Footer"; 

// ----------------------
// Types (Unchanged)
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
// Sample Data (Unchanged - keeping your original data)
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
    <>
      <section id="products" className="py-24 bg-[#2C1D14] text-[#F0EAD6]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-playfair-display text-center text-[#F0EAD6] mb-16 tracking-wide drop-shadow-lg">
            Our Curated Selection ☕
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-16">
            <AnimatePresence mode="wait">
              {["Arabica", "Robusta"].map((tab) => (
                <motion.button
                  key={tab}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setActiveTab(tab as "Arabica" | "Robusta")}
                  className={`relative px-8 py-3 mx-2 text-lg font-poppins font-medium rounded-full transition-all duration-300 overflow-hidden group
                    ${
                      activeTab === tab
                        ? "bg-[#B5843E] text-white shadow-lg shadow-[#B5843E]/30"
                        : "bg-transparent text-[#D4C4A7] border border-[#8C5F3A] hover:bg-[#8C5F3A] hover:bg-opacity-20 hover:text-white"
                    }`
                  }
                >
                  {tab}
                  {/* Active Tab Underline Effect */}
                  {activeTab === tab && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-1 bg-white"
                    />
                  )}
                </motion.button>
              ))}
            </AnimatePresence>
          </div>

          {/* Categories */}
          <div className="space-y-24">
            <AnimatePresence mode="wait">
              {filteredCategories.map((category) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-3xl md:text-4xl font-playfair-display text-[#F0EAD6] mb-12 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-[#B5843E] drop-shadow">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {category.products.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.4)" }}
                        className="bg-[#3D2B20] rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 transform group border border-[#4a3728]"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <div className="relative overflow-hidden w-full h-56">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6 text-center">
                          <h4 className="font-playfair-display text-2xl text-[#F0EAD6] mb-2 leading-tight drop-shadow-sm">
                            {product.name}
                          </h4>
                          <span className="inline-block mt-2 px-3 py-1 text-xs font-poppins rounded-full bg-[#8C5F3A] text-white tracking-wider">
                            {product.process}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 2. Add the Footer component here */}
      <Footer />

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="bg-[#3D2B20] text-[#F0EAD6] p-8 rounded-xl shadow-2xl max-w-lg w-full relative flex flex-col border border-[#8C5F3A]"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-[#F0EAD6] hover:text-[#B5843E] transition-colors z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0 w-full md:w-1/2">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover rounded-lg aspect-square border border-[#8C5F3A]"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-playfair-display mb-2 drop-shadow-sm leading-tight overflow-hidden">
                    {selectedProduct.name}
                  </h3>
                  <div className="space-y-2 text-sm text-[#D4C4A7] opacity-90">
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
                  <div className="flex flex-col gap-4 mt-8">
                    <button className="bg-[#B5843E] text-white px-6 py-3 rounded-lg hover:bg-[#D19B53] transition-colors shadow-lg font-poppins text-lg">
                      Request a Sample
                    </button>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="border border-[#8C5F3A] text-[#8C5F3A] px-6 py-3 rounded-lg hover:bg-[#8C5F3A] hover:text-white transition-colors font-poppins text-lg"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}