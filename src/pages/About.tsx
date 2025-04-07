import React from 'react';
import { Shield, Star, Clock, Users, Award, Wrench, Phone, Mail, MapPin, MessageCircle, Car } from 'lucide-react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Alexander Mitchell",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
      description: "With over 20 years in luxury automotive retail, Alexander leads Majesta's vision of excellence."
    },
    {
      name: "Sarah Chen",
      position: "Head of Sales",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
      description: "Sarah ensures every client receives personalized attention and finds their perfect vehicle."
    },
    {
      name: "James Rodriguez",
      position: "Technical Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      description: "James oversees our state-of-the-art service center and quality assurance programs."
    }
  ];

  const statistics = [
    { icon: <Clock className="w-8 h-8" />, value: 15, suffix: "+", label: "Years of Excellence" },
    { icon: <Users className="w-8 h-8" />, value: 10000, suffix: "+", label: "Happy Clients" },
    { icon: <Car className="w-8 h-8" />, value: 500, suffix: "+", label: "Luxury Vehicles" },
    { icon: <Award className="w-8 h-8" />, value: 100, suffix: "%", label: "Quality Assured" }
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "contact@majesta.com",
      link: "mailto:contact@majesta.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "123 Luxury Lane, Beverly Hills, CA 90210",
      link: "https://maps.google.com"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      value: "Chat with us",
      link: "https://wa.me/15551234567"
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section with Parallax */}
      <div className="relative h-[80vh] md:h-screen overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1562141960-c9a3091f78dd?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Showroom"
            className="w-full h-full object-cover brightness-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center space-y-4 md:space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold-light to-gold-dark">
              About Majesta
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-platinum-light">
              Redefining Luxury Car Experience Since 2010
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#B4934C,transparent_70%)] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 font-display">Our Mission</h2>
              <p className="text-lg md:text-xl text-platinum leading-relaxed">
                At Majesta, we're more than just a luxury car dealership. We're curators of automotive excellence, 
                committed to providing an unparalleled experience in luxury vehicle acquisition and ownership. 
                Our forward-thinking approach combines traditional values with modern innovation, ensuring every 
                client receives service that exceeds their expectations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics */}
      <div className="py-16 md:py-20 bg-dark-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#B4934C,transparent_70%)] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-dark p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-gold transition-all duration-300 text-center"
              >
                <div className="text-gold mb-4 flex justify-center">{stat.icon}</div>
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gold-light to-gold-dark bg-clip-text text-transparent">
                    <CountUp end={stat.value} duration={2.5} enableScrollSpy scrollSpyOnce />
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-gold">{stat.suffix}</span>
                </div>
                <p className="text-platinum">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#B4934C,transparent_70%)] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 font-display"
          >
            Meet Our Leadership
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.3 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold font-display">{member.name}</h3>
                    <p className="text-gold">{member.position}</p>
                    <p className="text-platinum-light mt-2">{member.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 md:py-24 bg-dark-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#B4934C,transparent_70%)] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 font-display"
          >
            Get in Touch
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-dark p-6 rounded-2xl border border-gray-800 hover:border-gold transition-all duration-300 text-center"
              >
                <div className="p-3 bg-gold/10 rounded-lg inline-block mb-4">
                  <div className="text-gold">{info.icon}</div>
                </div>
                <h3 className="text-lg font-semibold mb-2 font-display">{info.title}</h3>
                <p className="text-platinum-dark">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="h-[400px] md:h-[500px] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Car Dealership Location"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent">
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-auto bg-dark/90 p-4 md:p-6 rounded-xl border border-gold/20 backdrop-blur-sm md:max-w-md">
              <h3 className="text-lg md:text-xl font-semibold mb-2 text-gold font-display">Visit Our Showroom</h3>
              <p className="text-platinum-light">123 Luxury Lane, Beverly Hills, CA 90210</p>
              <p className="text-platinum-dark mt-2">Open Monday - Saturday: 9AM - 7PM</p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-gold hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;