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
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Logo */}
            <Coffee className="h-8 w-8" />
            <span className="text-lg font-serif tracking-wide">
              Cabinet of Coffee Affairs
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
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-center gap-6 py-4 bg-[#8b7355]">
            {["Home", "About", "Products", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleScroll(item.toLowerCase())}
                className="text-lg font-medium transition-colors hover:text-[#d2b48c]"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}