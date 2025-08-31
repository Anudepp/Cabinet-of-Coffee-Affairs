import { Coffee } from "lucide-react";

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

          {/* Links Section */}
          <div className="flex flex-wrap items-center gap-8 text-sm">
            {/* Quick Links */}
            <div className="flex gap-4">
              <a href="#home" className="text-gray-300 hover:text-white">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white">About</a>
              <a href="#products" className="text-gray-300 hover:text-white">Products</a>
              <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
            </div>

            {/* Products */}
            <div className="flex gap-4 border-l border-gray-600 pl-6">
              <a href="#" className="text-gray-300 hover:text-white">Arabica Premium</a>
              <a href="#" className="text-gray-300 hover:text-white">Robusta Select</a>
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