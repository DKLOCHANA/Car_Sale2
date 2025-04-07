import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useKeenSlider } from 'keen-slider/react';
import { ChevronLeft, ChevronRight, Calendar, Fuel, Gauge, Cog, MessageCircle, Car, Shield, Heart } from 'lucide-react';
import 'keen-slider/keen-slider.min.css';

const CarDetails = () => {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isWishlist, setIsWishlist] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Mock car data - in a real app, this would come from an API
  const car = {
    id: 1,
    name: "Mercedes-Benz S-Class 2024",
    price: "$110,000",
    status: "Available",
    description: "Experience unparalleled luxury with the all-new Mercedes-Benz S-Class. This flagship sedan sets new standards in automotive excellence with its cutting-edge technology, superior comfort, and exceptional performance.",
    specs: {
      make: "Mercedes-Benz",
      model: "S-Class",
      year: "2024",
      engine: "3.0L Inline-6 Turbo",
      transmission: "9-Speed Automatic",
      drivetrain: "All-Wheel Drive",
      fuelType: "Premium Gasoline",
      mileage: "5,000 miles",
      exteriorColor: "Obsidian Black",
      interiorColor: "Macchiato Beige",
      vin: "WDDUG8DB1LA123456"
    },
    features: [
      "360° Camera System",
      "Burmester® 4D Surround Sound",
      "MBUX Augmented Reality",
      "Executive Rear Seat Package",
      "Active Ambient Lighting",
      "Heated and Ventilated Seats"
    ],
    images: [
      "https://images.unsplash.com/photo-1622200984485-d10aa4af3643?auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1635773054018-22c8f5b00ce6?auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1024",
      "https://images.unsplash.com/photo-1617788138017-80ad40cc9e8b?auto=format&fit=crop&q=80&w=1024"
    ]
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Image Gallery */}
      <div className="relative">
        <div ref={sliderRef} className="keen-slider h-[60vh]">
          {car.images.map((image, idx) => (
            <div key={idx} className="keen-slider__slide">
              <img src={image} alt={`${car.name} - View ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-gold hover:text-dark transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full hover:bg-gold hover:text-dark transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {car.images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => instanceRef.current?.moveToIdx(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === idx ? 'bg-gold' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-4xl font-bold mb-2">{car.name}</h1>
                <p className="text-2xl text-gold">{car.price}</p>
              </div>
              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className={`p-2 rounded-full border ${
                  isWishlist ? 'border-gold text-gold' : 'border-gray-600 text-gray-400'
                } hover:border-gold hover:text-gold transition-colors`}
              >
                <Heart className="w-6 h-6" fill={isWishlist ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div className="bg-dark-secondary rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-4">Description</h2>
              <p className="text-gray-300 leading-relaxed">{car.description}</p>
            </div>

            <div className="bg-dark-secondary rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-6">Vehicle Specifications</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.entries(car.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-3 bg-dark rounded-lg">
                    <span className="text-gray-400">{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-dark-secondary rounded-lg p-6 border border-gray-800">
              <h2 className="text-xl font-semibold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-dark rounded-lg">
                    <Shield className="w-5 h-5 text-gold" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div
              className="bg-dark-secondary rounded-lg p-6 border border-gray-800 sticky top-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Car className="w-5 h-5 text-gold" />
                  <span className="text-lg font-semibold">Status</span>
                </div>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm">
                  {car.status}
                </span>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-gold text-dark py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Book Test Drive
                </button>
                
                <button className="w-full bg-dark text-gold py-3 rounded-lg font-semibold border border-gold hover:bg-gold hover:text-dark transition-colors">
                  Make an Inquiry
                </button>

                <a
                  href={`https://wa.me/15551234567?text=I'm interested in the ${car.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="font-semibold mb-4">Need More Information?</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Our luxury vehicle specialists are here to help you make the perfect choice.
                </p>
                <div className="text-gold">
                  Call us: +1 (555) 123-4567
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;