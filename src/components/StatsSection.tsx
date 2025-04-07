import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Car, Users, Calendar } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Car className="w-12 h-12" />,
      value: 500,
      suffix: "+",
      label: "Luxury Vehicles",
      description: "Handpicked premium automobiles"
    },
    {
      icon: <Users className="w-12 h-12" />,
      value: 10000,
      suffix: "+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      value: 15,
      suffix: "+",
      label: "Years Experience",
      description: "Of automotive excellence"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#FFD700,transparent_70%)] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Legacy in Numbers</h2>
          <p className="text-xl text-gray-400">A testament to our commitment to excellence</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className="bg-dark-secondary rounded-2xl p-8 border border-gray-800 group-hover:border-gold transition-colors duration-300">
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-electric-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="text-gold mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold to-electric-blue bg-clip-text text-transparent">
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    </span>
                    <span className="text-4xl md:text-5xl font-bold text-gold">{stat.suffix}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{stat.label}</h3>
                  <p className="text-gray-400">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;