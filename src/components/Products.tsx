import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";

interface CoffeeProduct {
  id: number;
  name: string;
  type: string;
  process: string;
  Area: string;
  Altitude: string;
  characteristics: string[];
  image: string;
}

const products: CoffeeProduct[] = [
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
  // ... (other products - consider reducing duplicates in your actual implementation)
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<CoffeeProduct | null>(null);

  const handleRequestSample = (): void => {
    setSelectedProduct(null);
    setTimeout(() => {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    }, 300);
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
              key={`${product.id}-${product.name}`} // More unique key
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-serif text-lg text-[#4a3728]">{product.type}</h3>
                <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-[#8b7355] text-white">
                  {product.process}
                </span>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="mt-4 block w-full bg-[#4a3728] text-white py-2 rounded-lg hover:bg-[#8b7355] transition-colors"
                  aria-label={`View details for ${product.name}`}
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with improved transitions */}
      <Transition appear show={!!selectedProduct} as={Fragment}>
        <Dialog 
          as="div" 
          className="fixed inset-0 z-50 flex items-center justify-center p-4" 
          onClose={() => setSelectedProduct(null)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto z-10">
              {selectedProduct && (
                <>
                  <Dialog.Title className="text-2xl font-serif text-[#4a3728] mb-4">
                    {selectedProduct.name}
                  </Dialog.Title>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">Tasting Notes</h3>
                      <ul className="list-disc ml-5 space-y-1">
                        {selectedProduct.characteristics.map((note, index) => (
                          <li key={index}>{note}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold">Specifications</h3>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        <p><span className="font-medium">Type:</span> {selectedProduct.type}</p>
                        <p><span className="font-medium">Process:</span> {selectedProduct.process}</p>
                        <p><span className="font-medium">Area:</span> {selectedProduct.Area}</p>
                        <p><span className="font-medium">Altitude:</span> {selectedProduct.Altitude}</p>
                      </div>
                    </div>

                    <div className="flex justify-between gap-4 mt-6">
                      <button
                        onClick={handleRequestSample}
                        className="flex-1 bg-[#8b7355] text-white px-4 py-2 rounded-md hover:bg-[#6b5a45] transition-colors"
                      >
                        Request a Sample
                      </button>
                      <button
                        onClick={() => setSelectedProduct(null)}
                        className="flex-1 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                      >
                        Close
                      </button>
                    </div>
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