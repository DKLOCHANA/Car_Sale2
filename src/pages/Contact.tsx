import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 5000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05 },
    transition: { type: "spring", stiffness: 300 }
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <motion.div 
        className="relative h-[40vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Car Showroom"
          className="w-full h-full object-cover brightness-50"
        />
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300">We're Here to Assist You</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you're interested in our latest vehicles, need service support, or have questions about financing, 
                our team is ready to provide the premium assistance you deserve.
              </p>
            </motion.div>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center space-x-4 p-6 bg-dark-secondary rounded-lg border border-gray-800"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <Phone className="w-6 h-6 text-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-6 bg-dark-secondary rounded-lg border border-gray-800"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <Mail className="w-6 h-6 text-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-gray-300">contact@majesta.com</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4 p-6 bg-dark-secondary rounded-lg border border-gray-800"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <MapPin className="w-6 h-6 text-gold" />
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-300">123 Luxury Lane, Beverly Hills, CA 90210</p>
                </div>
              </motion.div>

              <motion.a 
                href="https://wa.me/15551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-6 bg-dark-secondary rounded-lg border border-gray-800 hover:border-gold transition-colors"
                variants={fadeInUp}
                {...scaleOnHover}
              >
                <MessageCircle className="w-6 h-6 text-gold" />
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-gray-300">Chat with us directly</p>
                </div>
              </motion.a>
            </div>

            {/* Map */}
            <motion.div 
              className="h-64 bg-dark-secondary rounded-lg overflow-hidden"
              variants={fadeInUp}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203577424!2d-118.40261238478715!3d34.0736098805907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1635959773522!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-dark-secondary p-8 rounded-lg border border-gray-800"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-dark border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-gold transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gold text-dark py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:bg-opacity-90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>

            {/* Thank You Message */}
            {showThankYou && (
              <motion.div 
                className="mt-6 p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-400 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                Thank you for your message! We'll get back to you shortly.
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;