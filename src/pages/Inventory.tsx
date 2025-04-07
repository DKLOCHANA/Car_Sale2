import React, { useState, useEffect } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface Vehicle {
  id: number;
  name: string;
  make: string;
  model: string;
  year: string;
  price: string;
  priceNumeric: number;
  mileage: string;
  mileageNumeric: number;
  image: string;
  bodyType: string;
  transmission: string;
  fuelType: string;
  color: string;
  features: string[];
}

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    bodyType: '',
    transmission: '',
    fuelType: '',
    color: '',
  });

  const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);

  // Extended vehicle data with more details
  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      make: "Mercedes-Benz",
      model: "S-Class",
      year: "2024",
      price: "$110,000",
      priceNumeric: 110000,
      mileage: "5,000",
      mileageNumeric: 5000,
      image: "https://images.unsplash.com/photo-1622200984485-d10aa4af3643?auto=format&fit=crop&q=80&w=1024",
      bodyType: "Sedan",
      transmission: "Automatic",
      fuelType: "Hybrid",
      color: "Black",
      features: ["360° Camera", "Massage Seats", "Night Vision"]
    },
    {
      id: 2,
      name: "BMW 7 Series",
      make: "BMW",
      model: "7 Series",
      year: "2024",
      price: "$95,000",
      priceNumeric: 95000,
      mileage: "3,500",
      mileageNumeric: 3500,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=1024",
      bodyType: "Sedan",
      transmission: "Automatic",
      fuelType: "Electric",
      color: "White",
      features: ["Panoramic Roof", "Executive Package", "Harman Kardon Sound"]
    },
    {
      id: 3,
      name: "Porsche 911",
      make: "Porsche",
      model: "911",
      year: "2024",
      price: "$120,000",
      priceNumeric: 120000,
      mileage: "1,200",
      mileageNumeric: 1200,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1024",
      bodyType: "Sports",
      transmission: "Manual",
      fuelType: "Gasoline",
      color: "Red",
      features: ["Sport Chrono Package", "Carbon Ceramic Brakes", "Sport Exhaust"]
    },
    {
      id: 4,
      name: "Audi RS e-tron GT",
      make: "Audi",
      model: "RS e-tron GT",
      year: "2024",
      price: "$145,000",
      priceNumeric: 145000,
      mileage: "500",
      mileageNumeric: 500,
      image: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80&w=1024",
      bodyType: "Electric",
      transmission: "Automatic",
      fuelType: "Electric",
      color: "Gray",
      features: ["Matrix LED Headlights", "Adaptive Air Suspension", "Bang & Olufsen Sound"]
    },
    {
      id: 5,
      name: "Range Rover Sport",
      make: "Land Rover",
      model: "Range Rover Sport",
      year: "2024",
      price: "$98,000",
      priceNumeric: 98000,
      mileage: "4,200",
      mileageNumeric: 4200,
      image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=1024",
      bodyType: "SUV",
      transmission: "Automatic",
      fuelType: "Hybrid",
      color: "Green",
      features: ["Terrain Response 2", "Head-up Display", "Meridian Sound System"]
    },
    {
      id: 6,
      name: "Bentley Continental GT",
      make: "Bentley",
      model: "Continental GT",
      year: "2024",
      price: "$225,000",
      priceNumeric: 225000,
      mileage: "800",
      mileageNumeric: 800,
      image: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=1024",
      bodyType: "Coupe",
      transmission: "Automatic",
      fuelType: "Gasoline",
      color: "Blue",
      features: ["Naim Audio", "Rotating Display", "Diamond Knurling"]
    }
  ];

  const filters = {
    make: ["All", ...Array.from(new Set(vehicles.map(v => v.make)))],
    bodyType: ["All", ...Array.from(new Set(vehicles.map(v => v.bodyType)))],
    transmission: ["All", ...Array.from(new Set(vehicles.map(v => v.transmission)))],
    fuelType: ["All", ...Array.from(new Set(vehicles.map(v => v.fuelType)))],
    color: ["All", ...Array.from(new Set(vehicles.map(v => v.color)))],
    year: ["All", ...Array.from(new Set(vehicles.map(v => v.year)))],
    price: ["All", "Under $100k", "$100k-$150k", "$150k-$200k", "Over $200k"]
  };

  const getPriceRange = (price: number) => {
    if (price < 100000) return "Under $100k";
    if (price <= 150000) return "$100k-$150k";
    if (price <= 200000) return "$150k-$200k";
    return "Over $200k";
  };

  useEffect(() => {
    let filtered = [...vehicles];

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(vehicle => 
        vehicle.name.toLowerCase().includes(searchLower) ||
        vehicle.make.toLowerCase().includes(searchLower) ||
        vehicle.model.toLowerCase().includes(searchLower) ||
        vehicle.features.some(feature => feature.toLowerCase().includes(searchLower))
      );
    }

    // Apply active filters
    Object.entries(activeFilters).forEach(([key, value]) => {
      if (value && value !== 'All') {
        if (key === 'price') {
          filtered = filtered.filter(vehicle => getPriceRange(vehicle.priceNumeric) === value);
        } else {
          filtered = filtered.filter(vehicle => vehicle[key as keyof Vehicle] === value);
        }
      }
    });

    setFilteredVehicles(filtered);
  }, [searchTerm, activeFilters]);

  const handleFilterChange = (filterName: string, value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const clearFilters = () => {
    setActiveFilters({
      make: '',
      model: '',
      year: '',
      price: '',
      bodyType: '',
      transmission: '',
      fuelType: '',
      color: '',
    });
    setSearchTerm('');
  };

  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Hero Section */}
      <div className="relative h-[40vh]">
        <img 
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Cars"
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 font-display">Our Vehicle Collection</h1>
            <p className="text-xl text-gray-300">Discover Your Perfect Luxury Vehicle</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="w-full">
            <div className="relative max-w-3xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by make, model, or features..."
                className="w-full bg-dark-secondary border border-gray-700 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-gold transition-colors"
              />
            </div>
          </div>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap gap-4 justify-center">
            {Object.entries(filters).map(([filterName, options]) => (
              <div key={filterName} className="relative">
                <select
                  value={activeFilters[filterName as keyof typeof activeFilters]}
                  onChange={(e) => handleFilterChange(filterName, e.target.value)}
                  className="appearance-none bg-dark-secondary border border-gray-700 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:border-gold transition-colors min-w-[150px]"
                >
                  <option value="">{filterName.charAt(0).toUpperCase() + filterName.slice(1)}</option>
                  {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(activeFilters).map(([key, value]) => (
              value && (
                <span
                  key={key}
                  className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {value}
                  <button
                    onClick={() => handleFilterChange(key, '')}
                    className="hover:text-white"
                  >
                    ×
                  </button>
                </span>
              )
            ))}
            {(searchTerm || Object.values(activeFilters).some(v => v)) && (
              <button
                onClick={clearFilters}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-400">
            Showing {filteredVehicles.length} {filteredVehicles.length === 1 ? 'vehicle' : 'vehicles'}
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <motion.div
              key={vehicle.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-dark-secondary rounded-lg overflow-hidden border border-gray-800 group hover:border-gold transition-colors"
            >
              <div className="relative h-64">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-display">{vehicle.name}</h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>Year</span>
                    <span className="text-white">{vehicle.year}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mileage</span>
                    <span className="text-white">{vehicle.mileage} miles</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Body Type</span>
                    <span className="text-white">{vehicle.bodyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transmission</span>
                    <span className="text-white">{vehicle.transmission}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fuel Type</span>
                    <span className="text-white">{vehicle.fuelType}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="text-xs bg-dark px-2 py-1 rounded-full text-gray-400">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gold text-xl font-display">{vehicle.price}</span>
                    <Link 
                      to={`/car/${vehicle.id}`}
                      className="bg-gold text-dark px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg mb-4">No vehicles found matching your criteria</p>
            <button
              onClick={clearFilters}
              className="text-gold hover:text-gold-light transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;