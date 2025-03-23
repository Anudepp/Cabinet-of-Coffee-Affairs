import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#FDF5E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-serif text-center text-[#4A3728] mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-serif text-[#4A3728] mb-6">Get in Touch</h3>
            <form className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B7355] focus:ring focus:ring-[#8B7355] focus:ring-opacity-50 p-2"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B7355] focus:ring focus:ring-[#8B7355] focus:ring-opacity-50 p-2"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B7355] focus:ring focus:ring-[#8B7355] focus:ring-opacity-50 p-2"
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-[#8B7355] text-white px-8 py-3 rounded-full hover:bg-[#6F4E37] transition duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-serif text-[#4A3728] mb-6">Contact Information</h3>
            <div className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#8B7355] mr-4" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">1234567890</p>
                  <p className="text-gray-600">1234567890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaWhatsapp className="h-6 w-6 text-[#25D366] mr-4" /> 
                <div>
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-gray-600">1234567890</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-6 w-6 bg-[#8B7355] text-white flex items-center justify-center rounded-full mr-4 font-bold">B</div>
                <div>
                  <h4 className="font-semibold">Contact Person</h4>
                  <p className="text-gray-600">XXX</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
