import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#4A3728] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Coffee className="h-6 w-6" />
            <span className="ml-2 font-serif font-semibold">Georges Coffee</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center gap-8 text-sm">
            {/* Quick Links */}
            <div className="flex gap-4">
              <Link to="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link to="/products" className="text-gray-300 hover:text-white">
                Products
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">
                Contact
              </Link>
            </div>

            {/* Products */}
            <div className="flex gap-4 border-l border-gray-600 pl-6">
              <Link to="/products" className="text-gray-300 hover:text-white">
                Arabica Premium
              </Link>
              <Link to="/products" className="text-gray-300 hover:text-white">
                Robusta Select
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-300 text-center md:text-right">
            &copy; {new Date().getFullYear()} GEORGES IMPORTS & EXPORTS PVT LTD
          </div>
        </div>
      </div>
    </footer>
  );
}