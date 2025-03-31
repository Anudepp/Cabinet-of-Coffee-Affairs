import { motion } from "framer-motion";

// Sample expanded product data
const products = [
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png"
  },
  {
    id: 2,
    name: "Arabica Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/2.png"
  },
  {
    id: 3,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Natural",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/3.png"
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png"
  },
  {
    id: 2,
    name: "Arabica Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/2.png"
  },
  {
    id: 3,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Natural",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/3.png"
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png"
  },
  {
    id: 2,
    name: "Arabica Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/2.png"
  },
  {
    id: 3,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Natural",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/3.png"
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png"
  },
  {
    id: 2,
    name: "Arabica Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/2.png"
  },
  {
    id: 3,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Natural",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/3.png"
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png"
  },
  {
    id: 2,
    name: "Arabica Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/2.png"
  },
  {
    id: 3,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Natural",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/3.png"
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png"
  },
  {
    id: 2,
    name: "Arabica Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/2.png"
  },
  {
    id: 3,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Natural",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/3.png"
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png"
  },
  {
    id: 2,
    name: "Arabica Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/2.png"
  },
  {
    id: 3,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Natural",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/3.png"
  },
  {
    id: 1,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Washed",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/1.png"
  },
  {
    id: 2,
    name: "Arabica Plantation AA",
    type: "Robusta",
    process: "Honey SunDried",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/2.png"
  },
  {
    id: 3,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Natural",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/3.png"
  },
  {
    id: 3,
    name: "Arabica Plantation AA",
    type: "Arabica",
    process: "Natural",
    characteristics: ["Floral aroma", "Medium acidity", "Caramel finish"],
    image: "/3.png"
  },
  
];

export default function Products() {

  return (
    <section id="products" className="bg-[#fdf5e6] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-[#4a3728] text-center mb-12">
          Our Premium Coffee Selection
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-serif text-lg text-[#4a3728]">
                  {product.type}
                </h3>
                <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-[#8b7355] text-white">
                  {product.process}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}