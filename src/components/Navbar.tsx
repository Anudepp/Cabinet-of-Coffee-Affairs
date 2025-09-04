import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-[#2C1D14] text-[#F0EAD6] shadow-xl z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Left Section: Hamburger Menu + Logo */}
          <div className="flex items-center gap-4">
            {/* Hamburger Menu Button for Mobile */}
            <button
              className="md:hidden p-2 text-[#F0EAD6] hover:text-[#B5843E] transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMenuOpen ? "x" : "menu"}
                  initial={{ opacity: 0, rotate: isMenuOpen ? -90 : 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: isMenuOpen ? 90 : -90 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? (
                    <X className="h-7 w-7" />
                  ) : (
                    <Menu className="h-7 w-7" />
                  )}
                </motion.div>
              </AnimatePresence>
            </button>

            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate("/")}>
              <img
                src="/logo.png"
                alt="Georges Coffee Logo"
                className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              <span className="text-3xl md:text-5xl font-cursive drop-shadow-lg text-[#F0EAD6]">
                Georges Coffee
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {[
            { name: "Home ", path: "/" },
              { name: "About", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleNavigate(item.path)}
                  className="text-lg font-poppins font-medium transition-colors hover:text-[#B5843E]"
                >
                  {item.name}
                </button>
                {/* Underline effect */}
                <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#B5843E] scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col items-center gap-6 py-5 bg-[#2C1D14]">
                {[
                  { name: "About", path: "/about" },
                  { name: "Products", path: "/products" },
                  { name: "Contact", path: "/contact" },
                ].map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavigate(item.path)}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.05 * index, duration: 0.2 }}
                    className="text-lg font-poppins font-medium text-[#F0EAD6] hover:text-[#B5843E] transition-colors"
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}