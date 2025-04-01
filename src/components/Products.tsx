import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

const products = [
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    Area: "Central Highlands",
    Altitude: "1200-1800m",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png",
  },
  {
    id: 2,
    name: "Robusta Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    Area: "Northern Highlands",
    Altitude: "1100-1400m",
    characteristics: ["Bold flavor", "Strong body", "Chocolate notes"],
    image: "/2.png",
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    Area: "Central Highlands",
    Altitude: "1200-1800m",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png",
  },
  {
    id: 2,
    name: "Robusta Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    Area: "Northern Highlands",
    Altitude: "1100-1400m",
    characteristics: ["Bold flavor", "Strong body", "Chocolate notes"],
    image: "/2.png",
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    Area: "Central Highlands",
    Altitude: "1200-1800m",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png",
  },
  {
    id: 2,
    name: "Robusta Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    Area: "Northern Highlands",
    Altitude: "1100-1400m",
    characteristics: ["Bold flavor", "Strong body", "Chocolate notes"],
    image: "/2.png",
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    Area: "Central Highlands",
    Altitude: "1200-1800m",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png",
  },
  {
    id: 2,
    name: "Robusta Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    Area: "Northern Highlands",
    Altitude: "1100-1400m",
    characteristics: ["Bold flavor", "Strong body", "Chocolate notes"],
    image: "/2.png",
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    Area: "Central Highlands",
    Altitude: "1200-1800m",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png",
  },
  {
    id: 2,
    name: "Robusta Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    Area: "Northern Highlands",
    Altitude: "1100-1400m",
    characteristics: ["Bold flavor", "Strong body", "Chocolate notes"],
    image: "/2.png",
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    Area: "Central Highlands",
    Altitude: "1200-1800m",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png",
  },
  {
    id: 2,
    name: "Robusta Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    Area: "Northern Highlands",
    Altitude: "1100-1400m",
    characteristics: ["Bold flavor", "Strong body", "Chocolate notes"],
    image: "/2.png",
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    Area: "Central Highlands",
    Altitude: "1200-1800m",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png",
  },
  {
    id: 2,
    name: "Robusta Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    Area: "Northern Highlands",
    Altitude: "1100-1400m",
    characteristics: ["Bold flavor", "Strong body", "Chocolate notes"],
    image: "/2.png",
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    Area: "Central Highlands",
    Altitude: "1200-1800m",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png",
  },
  {
    id: 2,
    name: "Robusta Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    Area: "Northern Highlands",
    Altitude: "1100-1400m",
    characteristics: ["Bold flavor", "Strong body", "Chocolate notes"],
    image: "/2.png",
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    Area: "Central Highlands",
    Altitude: "1200-1800m",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png",
  },
  {
    id: 2,
    name: "Robusta Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    Area: "Northern Highlands",
    Altitude: "1100-1400m",
    characteristics: ["Bold flavor", "Strong body", "Chocolate notes"],
    image: "/2.png",
  },
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRequestSample = () => {
    setSelectedProduct(null); // Close modal first

    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // Delay ensures smooth UX
  };

  return (
    <section id="products" className="bg-[#fdf5e6] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-[#4a3728] text-center mb-12">
          Our Premium Coffee Selection
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-serif text-lg text-[#4a3728]">{product.type}</h3>
                <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-[#8b7355] text-white">
                  {product.process}
                </span>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-4 block w-full bg-[#4a3728] text-white py-2 rounded-lg hover:bg-[#8b7355]"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <Transition appear show={selectedProduct !== null} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClose={() => setSelectedProduct(null)}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              {selectedProduct && (
                <>
                  <h2 className="text-2xl font-serif text-[#4a3728] mb-4">{selectedProduct.name}</h2>
                  <h3 className="text-lg font-semibold">Tasting Notes</h3>
                  <ul className="list-disc ml-5 mb-4">
                    {selectedProduct.characteristics.map((note, index) => (
                      <li key={index}>{note}</li>
                    ))}
                  </ul>
                  <h3 className="text-lg font-semibold">Specifications</h3>
                  <p><strong>Type:</strong> {selectedProduct.type}</p>
                  <p><strong>Process:</strong> {selectedProduct.process}</p>
                  <p><strong>Area:</strong> {selectedProduct.Area}</p>
                  <p><strong>Altitude:</strong> {selectedProduct.Altitude}</p>

                  <div className="flex justify-between mt-4">
                    <button
                      onClick={handleRequestSample}
                      className="bg-[#8b7355] text-white px-4 py-2 rounded-md"
                    >
                      Request a Sample
                    </button>
                    <button
                      className="bg-gray-500 text-white px-4 py-2 rounded-md"
                      onClick={() => setSelectedProduct(null)}
                    >
                      Close
                    </button>
                  </div>
                </>
              )}
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </section>
  );
}