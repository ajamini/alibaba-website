import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ship, Plane, Truck, Package, MapPin, Clock, Shield, BarChart3 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import StatCard from '../components/StatCard';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-no-repeat bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/2253573/pexels-photo-2253573.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-800/50" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 z-10 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Global Shipping & Logistics Solutions
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Connecting continents, delivering excellence. Your trusted partner for reliable shipping services worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/rates"
                className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Our Rates
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-white hover:text-primary-500 text-white border-2 border-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive shipping and logistics solutions tailored to meet your business needs across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<Ship className="h-10 w-10 text-secondary-500" />}
              title="Ocean Freight"
              description="Reliable sea freight services for all your shipping needs, from FCL to LCL shipments worldwide."
              link="/services/ocean-freight"
            />
            <ServiceCard 
              icon={<Plane className="h-10 w-10 text-secondary-500" />}
              title="Air Freight"
              description="Fast and efficient air freight solutions for time-sensitive cargo and international shipments."
              link="/services/air-freight"
            />
            <ServiceCard 
              icon={<Truck className="h-10 w-10 text-secondary-500" />}
              title="Land Transport"
              description="Comprehensive road transportation services including FTL, LTL, and specialized equipment."
              link="/services/land-transport"
            />
            <ServiceCard 
              icon={<Package className="h-10 w-10 text-secondary-500" />}
              title="Warehousing"
              description="Secure storage solutions with inventory management systems for efficient distribution."
              link="/services/warehousing"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-500 mb-6">
                Your Trusted Partner in Global Shipping
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                With over 25 years of experience in the shipping industry, OceanWay has established itself as a leader in global logistics solutions. We combine industry expertise with innovative technology to deliver reliable and efficient shipping services worldwide.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Our team of experts is dedicated to providing personalized service and tailored solutions to meet your specific shipping needs, ensuring your cargo reaches its destination safely and on time.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-accent-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Reliability</h3>
                    <p className="text-gray-600 text-sm">Consistent and dependable service</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-accent-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Timeliness</h3>
                    <p className="text-gray-600 text-sm">On-time delivery, every time</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-accent-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Global Reach</h3>
                    <p className="text-gray-600 text-sm">Service across 120+ countries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-6 w-6 text-accent-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Efficiency</h3>
                    <p className="text-gray-600 text-sm">Optimized routes and processes</p>
                  </div>
                </div>
              </div>
              
              <Link
                to="/about"
                className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Learn More About Us
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-lg overflow-hidden shadow-card">
                <img 
                  src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Container ship at port" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-card max-w-xs">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="bg-accent-500 text-white p-3 rounded-full">
                    <Ship className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-bold">25+ Years</p>
                    <p className="text-gray-600 text-sm">of industry experience</p>
                  </div>
                </div>
                <div className="h-1 w-full bg-gray-200 mb-3">
                  <div className="h-full bg-accent-500 w-4/5"></div>
                </div>
                <p className="text-gray-600 text-sm">Trusted by over 1,000 businesses worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="120+" text="Countries Served" />
            <StatCard number="25+" text="Years Experience" />
            <StatCard number="1,000+" text="Clients Worldwide" />
            <StatCard number="1.5M+" text="Shipments Delivered" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
     
      {/* CTA Section */}
      <section className="py-20 bg-secondary-500">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Ship with Confidence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss your shipping needs and discover how OceanWay can provide the optimal logistics solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-secondary-500 hover:bg-gray-100 px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link
              to="/rates"
              className="bg-transparent hover:bg-secondary-600 text-white border-2 border-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              See our Rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;