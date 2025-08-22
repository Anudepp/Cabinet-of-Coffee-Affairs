import { Coffee, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-[#8b7355] text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Hamburger Menu + Logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger Menu Button for Mobile */}
            <button
              className="md:hidden p-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 transition-all duration-300 transform rotate-180" />
              ) : (
                <Menu className="h-6 w-6 transition-all duration-300" />
              )}
            </button>

            {/* Logo */}
            <Coffee className="h-8 w-8" />
            <span className="text-lg font-serif tracking-wide">
                    Georges Coffee

            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {["Home", "About", "Products", "Contact"].map((item) => (
              <div key={item} className="relative group">
                <button
                  onClick={() => handleScroll(item.toLowerCase())}
                  className="text-lg font-medium transition-colors hover:text-[#d2b48c]"
                >
                  {item}
                </button>
                {/* Underline effect */}
                <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#d2b48c] scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96" : "max-h-0"}`}>
          <div className="flex flex-col items-center gap-6 py-4 bg-[#8b7355]">
            {["Home", "About", "Products", "Contact"].map((item, index) => (
              <button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className={`text-lg font-medium transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
                style={{ transitionDelay: isMenuOpen ? `${100 * index}ms` : "0ms" }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}