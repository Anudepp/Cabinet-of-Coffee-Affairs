import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location object

  const handleNavigate = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-[#f0efec] text-[#2C1D14] shadow-md z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo Section */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigate("/")}>
            <img
              src="/logo.avif"
              alt="Georges Coffee Logo"
              className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
            <span className="text-3xl md:text-5xl font-cursive drop-shadow-lg text-[#2C1D14]">
              Georges Coffee
            </span>
          </div>

          {/* Right Section: Desktop Menu + Mobile Hamburger */}
          <div className="flex items-center gap-10">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <div key={item.name} className="relative group">
                  <button
                    onClick={() => handleNavigate(item.path)}
                    // Conditionally apply a class based on the current path
                    className={`text-xl font-poppins font-bold transition-all duration-300 relative overflow-hidden
                      ${location.pathname === item.path ? "text-[#B5843E]" : "hover:text-[#B5843E]"}
                    `}
                  >
                    {item.name}
                    {/* The underline will be visible on hover AND when the link is active */}
                    <span className={`absolute left-0 bottom-0 w-full h-[3px] bg-[#B5843E] transition-transform duration-300 origin-left
                      ${location.pathname === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}></span>
                  </button>
                </div>
              ))}
            </div>

            {/* Hamburger Menu Button for Mobile */}
            <button
              className="md:hidden p-2 text-[#2C1D14] hover:text-[#B5843E] transition-colors duration-300"
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
              <div className="flex flex-col items-center gap-6 py-5 bg-[#efeeeb]">
                {[
                  { name: "Home", path: "/" },
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
                    // Conditionally apply a class for mobile menu
                    className={`text-lg font-poppins font-bold transition-colors
                      ${location.pathname === item.path ? "text-[#B5843E]" : "text-[#2C1D14] hover:text-[#B5843E]"}
                    `}
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