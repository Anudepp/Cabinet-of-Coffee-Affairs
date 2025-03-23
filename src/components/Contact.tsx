import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import "./../styles/contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.h2 
          className="contact-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        
        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="contact-subtitle">Get in Touch</h3>
            <form className="contact-form">
              <div>
                <label htmlFor="name" className="contact-label">Name</label>
                <input type="text" id="name" className="contact-input" />
              </div>
              
              <div>
                <label htmlFor="email" className="contact-label">Email</label>
                <input type="email" id="email" className="contact-input" />
              </div>
              
              <div>
                <label htmlFor="message" className="contact-label">Message</label>
                <textarea id="message" rows={4} className="contact-textarea"></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="contact-button"
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
            <h3 className="contact-subtitle">Contact Information</h3>
            <div className="contact-info">
              <div className="contact-info-item">
                <Phone className="contact-icon" />
                <div>
                  <h4 className="contact-info-title">Phone</h4>
                  <p className="contact-info-text">1234567890</p>
                  <p className="contact-info-text">1234567890</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <FaWhatsapp className="contact-whatsapp-icon" /> 
                <div>
                  <h4 className="contact-info-title">WhatsApp</h4>
                  <p className="contact-info-text">1234567890</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-initial">B</div>
                <div>
                  <h4 className="contact-info-title">Contact Person</h4>
                  <p className="contact-info-text">XXX</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}