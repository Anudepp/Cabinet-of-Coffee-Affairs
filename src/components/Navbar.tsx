import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-[#4b2e2e] via-[#8b7355] to-[#d2b48c] text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-24"> {/* ✅ Taller navbar */}
          {/* Left Section: Hamburger Menu + Logo */}
          <div className="flex items-center gap-3">
            {/* Hamburger Menu Button for Mobile */}
            <button
              className="md:hidden p-2 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 transition-all duration-300 transform rotate-180" />
              ) : (
                <Menu className="h-7 w-7 transition-all duration-300" />
              )}
            </button>

            {/* Logo */}
<img
  src="/logo.png"
  alt="Georges Coffee Logo"
  className="h-20 w-auto object-contain cursor-pointer -ml-1" // ✅ larger but still < navbar
  onClick={() => handleNavigate("/")}
/>
<span className="text-2xl md:text-5xl italic font-cursive drop-shadow-sm">
  Georges Coffee
</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-10">
            {[
              { name: "About", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleNavigate(item.path)}
                  className="text-lg font-medium transition-colors hover:text-[#fceabb]"
                >
                  {item.name}
                </button>
                {/* Underline effect */}
                <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#fceabb] scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-5 bg-gradient-to-b from-[#4b2e2e] via-[#8b7355] to-[#d2b48c]">
            {[
              { name: "About", path: "/about" },
              { name: "Products", path: "/products" },
              { name: "Contact", path: "/contact" },
            ].map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.path)}
                className={`text-lg font-medium transition-all duration-300 transform ${
                  isMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${100 * index}ms` : "0ms",
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}