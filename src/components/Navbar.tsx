import { Coffee } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./../styles/navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Close mobile menu after click
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          {/* Logo */}
          <div className="navbar-logo">
            <Coffee className="h-8 w-8" />
            <span className="navbar-logo-text">Cabinet of Coffee Affairs</span>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-menu">
            {["Home", "About", "Products", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="navbar-menu-item"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navbar-toggle"
            >
              <motion.svg
                className="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="navbar-mobile-menu md:hidden"
          >
            <div>
              {["Home", "About", "Products", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => handleScroll(item.toLowerCase())}
                  className="navbar-mobile-menu-item"
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}