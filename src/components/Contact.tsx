import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Footer from './Footer';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateForm = (fieldValues = formData) => {
    const tempErrors = { ...errors };

    if ('name' in fieldValues) {
      const value = fieldValues.name.trim();
      if (!value) tempErrors.name = "Name is required.";
      else if (value.length < 2) tempErrors.name = "Name must be at least 2 characters long.";
      else if (value.length > 50) tempErrors.name = "Name cannot exceed 50 characters.";
      else if (!/^[a-zA-Z\s'-]+$/.test(value)) tempErrors.name = "Name can only contain letters, spaces, hyphens, and apostrophes.";
      else delete tempErrors.name;
    }

    if ('email' in fieldValues) {
      const value = fieldValues.email.trim();
      if (!value) tempErrors.email = "Email is required.";
      else if (!/^\S+@\S+\.\S+$/.test(value)) tempErrors.email = "Please enter a valid email address.";
      else delete tempErrors.email;
    }

    if ('message' in fieldValues) {
      const value = fieldValues.message.trim();
      if (!value) tempErrors.message = "Message is required.";
      else if (value.length < 10) tempErrors.message = "Message must be at least 10 characters long.";
      else if (value.length > 500) tempErrors.message = "Message cannot exceed 500 characters.";
      else delete tempErrors.message;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const updatedForm = { ...formData, [id]: value };
    setFormData(updatedForm);
    validateForm({ [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border-2 rounded-xl transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:border-transparent hover:border-[#8B7355] ${
      errors[field] ? 'border-red-500' : 'border-[#E7D7C6]'
    }`;

  return (
    <>
      {/* ✅ Added pt-32 & scroll-mt-32 so Contact starts below navbar */}
      <section
        id="contact"
        ref={ref}
        className="bg-gradient-to-br from-[#FDF5E6] to-[#F5E6D3] pt-32 pb-20 px-4 scroll-mt-32"
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
            {/* Left side form */}
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
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#4A4A4A] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClass('message')}
                    ></textarea>
                    {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full bg-[#8B7355] text-white py-3 rounded-full font-bold hover:bg-[#6F4E37] transition duration-300 shadow-lg disabled:opacity-50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={
                      Object.keys(errors).length > 0 ||
                      !formData.name ||
                      !formData.email ||
                      !formData.message
                    }
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Right side info */}
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
                      <p className="text-[#4A4A4A]">+61 468301261</p>
                      <p className="text-[#4A4A4A]">+91 7093126396</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MessageCircle className="w-8 h-8 text-[#25D366] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#4A3728]">WhatsApp</h4>
                      
                      <p className="text-[#4A4A4A]">+61 468301261</p>
                      <p className="text-[#4A4A4A]">+91 7093126396</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-[#8B7355] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#4A3728]">Email</h4>
                      <p className="text-[#4A4A4A]">beansinfo@georgesexports.com</p>
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

      <Footer />
    </>
  );
}