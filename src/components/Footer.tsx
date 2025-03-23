import { Coffee } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#4A3728] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Coffee className="h-6 w-6" />
              <span className="ml-2 font-serif">Cabinet of Coffee Affairs</span>
            </div>
            <p className="text-sm text-gray-300">
              Premium coffee exports from the world's finest plantations.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white">Products</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Arabica Premium</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Robusta Select</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} Cabinet of Coffee Affairs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}