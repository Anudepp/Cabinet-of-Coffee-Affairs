import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

export default function Contact() {
  const ref = useRef(null);
  const form = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px 0px" });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const validateForm = (fieldValues = formData) => {
    const tempErrors: { [key: string]: string } = {};

    const namePattern = /^[a-zA-Z\s'-]+$/;
    const emailPattern = /^\S+@\S+\.\S+$/;
    const phonePattern = /^[0-9\s-()]+$/;

    if (!fieldValues.firstName.trim()) tempErrors.firstName = "First name is required.";
    else if (fieldValues.firstName.trim().length < 2) tempErrors.firstName = "First name must be at least 2 characters.";
    else if (!namePattern.test(fieldValues.firstName.trim())) tempErrors.firstName = "Invalid characters in first name.";

    if (!fieldValues.lastName.trim()) tempErrors.lastName = "Last name is required.";
    else if (fieldValues.lastName.trim().length < 2) tempErrors.lastName = "Last name must be at least 2 characters.";
    else if (!namePattern.test(fieldValues.lastName.trim())) tempErrors.lastName = "Invalid characters in last name.";

    if (!fieldValues.email.trim()) tempErrors.email = "Email is required.";
    else if (!emailPattern.test(fieldValues.email.trim())) tempErrors.email = "Please enter a valid email address.";

    if (!fieldValues.phone.trim()) tempErrors.phone = "Phone number is required.";
    else if (!phonePattern.test(fieldValues.phone.trim())) tempErrors.phone = "Please enter a valid phone number.";
    else if (fieldValues.phone.trim().length < 10) tempErrors.phone = "Phone number is too short.";

    if (!fieldValues.country.trim()) tempErrors.country = "Country is required.";

    if (!fieldValues.message.trim()) tempErrors.message = "Message is required.";
    else if (fieldValues.message.trim().length < 10) tempErrors.message = "Message must be at least 10 characters.";
    else if (fieldValues.message.trim().length > 500) tempErrors.message = "Message cannot exceed 500 characters.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (Object.keys(errors).length > 0) {
      validateForm({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmissionStatus("sending");
      try {
        // Replace these placeholder values with your actual EmailJS IDs from .env or VITE config.
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID 
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY 

        await emailjs.sendForm(serviceId, templateId, form.current as HTMLFormElement, publicKey);
        setSubmissionStatus("success");
        setFormData({ 
          firstName: '', 
          lastName: '', 
          email: '', 
          phone: '', 
          country: '', 
          message: '' 
        });
        setErrors({});
      } catch (error) {
        console.error("Failed to send email:", error);
        setSubmissionStatus("error");
      }
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 border-2 rounded-xl bg-[#2C1D14] text-[#F0EAD6] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#B5843E] hover:border-[#B5843E] ${
      errors[field] ? 'border-red-500' : 'border-[#4a3728]'
    }`;

  const getStatusMessage = () => {
    switch (submissionStatus) {
      case "sending":
        return <p className="text-center text-[#B5843E] font-medium">Sending message...</p>;
      case "success":
        return <p className="text-center text-green-500 font-medium">Message sent successfully! We'll be in touch soon.</p>;
      case "error":
        return <p className="text-center text-red-500 font-medium">Something went wrong. Please try again later.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#2C1D14] text-[#F0EAD6]">
      <section
        id="contact"
        ref={ref}
        className="pt-32 pb-20 px-4 scroll-mt-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl md:text-6xl font-playfair-display text-center mb-16 tracking-wide drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          >
            Get in Touch ☕
          </motion.h2>

          {/* Centered Send a Message form */}
          <div className="flex justify-center">
            <motion.div
              className="bg-[#3D2B20] rounded-2xl shadow-2xl overflow-hidden border border-[#4a3728] max-w-2xl w-full"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            >
              <div className="p-8">
                <h3 className="text-3xl font-playfair-display text-[#B5843E] mb-6 border-b-2 border-[#8C5F3A] pb-3 drop-shadow">
                  Send a Message
                </h3>
                <form className="space-y-6 font-poppins" onSubmit={handleSubmit} noValidate ref={form}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-[#D4C4A7] mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="from_first_name" // Added for EmailJS
                        value={formData.firstName}
                        onChange={handleChange}
                        onBlur={() => validateForm({ ...formData, firstName: formData.firstName })}
                        className={inputClass('firstName')}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[#D4C4A7] mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="from_last_name" // Added for EmailJS
                        value={formData.lastName}
                        onChange={handleChange}
                        onBlur={() => validateForm({ ...formData, lastName: formData.lastName })}
                        className={inputClass('lastName')}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#D4C4A7] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="from_email" // Added for EmailJS
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => validateForm({ ...formData, email: formData.email })}
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#D4C4A7] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="from_phone" // Added for EmailJS
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={() => validateForm({ ...formData, phone: formData.phone })}
                      className={inputClass('phone')}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-[#D4C4A7] mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="from_country" // Added for EmailJS
                      value={formData.country}
                      onChange={handleChange}
                      onBlur={() => validateForm({ ...formData, country: formData.country })}
                      className={inputClass('country')}
                    />
                    {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#D4C4A7] mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      name="message" // Added for EmailJS
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => validateForm({ ...formData, message: formData.message })}
                      className={inputClass('message')}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>
                  {getStatusMessage()}
                  <motion.button
                    type="submit"
                    className="w-full bg-[#B5843E] text-white py-3 rounded-full font-poppins font-semibold hover:bg-[#D19B53] transition-colors duration-300 shadow-lg disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={submissionStatus === 'sending'}
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
          
          {/* Contact Info section below */}
          <motion.div
            className="bg-[#3D2B20] rounded-2xl shadow-2xl overflow-hidden border border-[#4a3728] mt-12"
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            <div className="p-8">
              <h3 className="text-3xl font-playfair-display text-[#B5843E] mb-6 border-b-2 border-[#8C5F3A] pb-3 drop-shadow">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 font-poppins text-[#D4C4A7]">
                <div className="flex flex-col items-center text-center space-y-2">
                  <Phone className="w-8 h-8 text-[#B5843E] flex-shrink-0" />
                  <h4 className="font-semibold text-[#F0EAD6]">Phone</h4>
                  <p>+61 468301261</p>
                  <p>+91 7093126396</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <MessageCircle className="w-8 h-8 text-[#25D366] flex-shrink-0" />
                  <h4 className="font-semibold text-[#F0EAD6]">WhatsApp</h4>
                  <p>+61 468301261</p>
                  <p>+91 7093126396</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <Mail className="w-8 h-8 text-[#B5843E] flex-shrink-0" />
                  <h4 className="font-semibold text-[#F0EAD6]">Email</h4>
                  <p>beansinfo@georgesexports.com</p>
                </div>
                <div className="flex flex-col items-center text-center space-y-2">
                  <MapPin className="w-8 h-8 text-[#B5843E] flex-shrink-0" />
                  <h4 className="font-semibold text-[#F0EAD6]">Address</h4>
                  <p>123 Coffee Lane</p>
                  <p>Export District</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
