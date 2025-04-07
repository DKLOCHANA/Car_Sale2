import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, Clock, Car, Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import StatsSection from '../components/StatsSection';
import 'keen-slider/keen-slider.min.css';

const Home = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
  });

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const testimonials = [
    {
      name: "James Wilson",
      role: "Business Executive",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      text: "Autoluxe provided an unparalleled car buying experience. Their attention to detail and customer service is exceptional."
    },
    {
      name: "Sarah Chen",
      role: "Tech Entrepreneur",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      text: "The selection of luxury vehicles at Autoluxe is impressive. They made the entire process smooth and enjoyable."
    },
    {
      name: "Michael Brown",
      role: "Investment Banker",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      text: "From selection to delivery, Autoluxe's service was impeccable. They truly understand luxury automotive retail."
    }
  ];

  return (
    <div className="bg-dark text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Car"
            className="w-full h-full object-cover brightness-50"
          />
        </motion.div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div 
            className="text-center space-y-8 px-4"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold font-display"
              variants={fadeInUp}
            >
              Drive Excellence
            </motion.h1>
            <motion.p 
              className="text-2xl md:text-3xl text-gold font-display"
              variants={fadeInUp}
            >
              Drive Autoluxe
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              variants={fadeInUp}
            >
              <Link
                to="/inventory"
                className="w-full sm:w-auto bg-gold text-dark px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all hover:scale-105"
              >
                Explore Cars
              </Link>
              <button
                className="w-full sm:w-auto border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-dark transition-all hover:scale-105"
              >
                Book Test Drive
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Vehicles */}
      <motion.div 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Vehicles
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                className="bg-dark-secondary rounded-lg overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64">
                  <img
                    src={`https://images.unsplash.com/photo-${index + 1}?auto=format&fit=crop&q=80&w=1024`}
                    alt="Luxury Car"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Premium Vehicle {index + 1}</h3>
                  <p className="text-gray-400 mb-4">Experience unmatched luxury and performance</p>
                  <div className="flex justify-between items-center">
                    <span className="text-gold text-xl">$150,000</span>
                    <Link 
                      to={`/car/${index + 1}`}
                      className="bg-gold text-dark px-4 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all hover:scale-105"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div 
        className="bg-dark-secondary py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Client Testimonials
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-dark p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gold">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 italic">{testimonial.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        className="relative py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Car"
            className="w-full h-full object-cover brightness-25"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Experience Luxury Today
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Schedule a test drive and discover why Autoluxe is the premier destination for luxury vehicles.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold text-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-all hover:scale-105"
            >
              Book Your Experience
              <ChevronRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;