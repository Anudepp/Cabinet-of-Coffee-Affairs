import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#4A3728] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          {/* Logo & Brand - Now centered on mobile */}
          <div className="flex items-center justify-center md:justify-start w-full md:w-auto">
            <Coffee className="h-6 w-6" />
            <span className="ml-2 font-serif font-semibold">Georges Coffee</span>
          </div>

          {/* Navigation Links - Stacked on mobile */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 text-sm w-full md:w-auto mt-4 md:mt-0">
            {/* Quick Links */}
            <div className="flex gap-4">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
              <Link to="/products" className="text-gray-300 hover:text-white">Products</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
            </div>

            {/* Products - MODIFIED HERE */}
            <div className="hidden md:flex gap-4 border-t border-gray-600 pt-4 md:border-t-0 md:pt-0 md:border-l md:pl-6">
              <Link to="/products" className="text-gray-300 hover:text-white">Arabica Premium</Link>
              <Link to="/products" className="text-gray-300 hover:text-white">Robusta Select</Link>
            </div>
          </div>

          {/* Copyright - Centered on mobile */}
          <div className="text-sm text-gray-300 text-center w-full md:w-auto mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} GEORGES IMPORTS & EXPORTS PVT LTD
          </div>
        </div>
      </div>
    </footer>
  );
}