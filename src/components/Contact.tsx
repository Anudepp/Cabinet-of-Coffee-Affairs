import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, margin: "-100px 0px" });

  return (
    <section 
      id="contact" 
      ref={ref}
      className="bg-gradient-to-br from-[#FDF5E6] to-[#F5E6D3] py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-serif text-center text-[#4A3728] mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        >
          Contact Us
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            <div className="p-8">
              <h3 className="text-2xl font-serif text-[#4A3728] mb-6 border-b-2 border-[#8B7355] pb-3">
                Get in Touch
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                    Name
                  </label>
                  <input 
                    type="text" id="name" 
                    className="w-full px-4 py-3 border-2 border-[#E7D7C6] rounded-xl 
                    focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent 
                    transition duration-300 hover:border-[#8B7355]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                    Email
                  </label>
                  <input 
                    type="email" id="email" 
                    className="w-full px-4 py-3 border-2 border-[#E7D7C6] rounded-xl 
                    focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent 
                    transition duration-300 hover:border-[#8B7355]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" rows={4} 
                    className="w-full px-4 py-3 border-2 border-[#E7D7C6] rounded-xl 
                    focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent 
                    transition duration-300 hover:border-[#8B7355]"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-[#8B7355] text-white py-3 rounded-full 
                  font-bold hover:bg-[#6F4E37] transition duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            <div className="p-8">
              <h3 className="text-2xl font-serif text-[#4A3728] mb-6 border-b-2 border-[#8B7355] pb-3">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-8 h-8 text-[#8B7355] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#4A3728]">Phone</h4>
                    <p className="text-[#4A4A4A]">1234567890</p>
                    <p className="text-[#4A4A4A]">0987654321</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageCircle className="w-8 h-8 text-[#25D366] flex-shrink-0" /> 
                  <div>
                    <h4 className="font-bold text-[#4A3728]">WhatsApp</h4>
                    <p className="text-[#4A4A4A]">1234567890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-8 h-8 text-[#8B7355] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#4A3728]">Email</h4>
                    <p className="text-[#4A4A4A]">contact@coffeeexport.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8 text-[#8B7355] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#4A3728]">Address</h4>
                    <p className="text-[#4A4A4A]">123 Coffee Lane, Export District</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}