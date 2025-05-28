import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ship, Plane, Truck, Package, FileText, Globe, Shield, RefreshCw } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary-600">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="w-full h-full bg-no-repeat bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/3989844/pexels-photo-3989844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-primary-100">
              Comprehensive shipping and logistics solutions tailored to your specific needs, delivering excellence across oceans and continents.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ocean Freight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-secondary-500 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Ocean Freight" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full">
                  <Ship className="h-6 w-6 text-secondary-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Ocean Freight</h3>
                <p className="text-gray-600 mb-4">
                  Reliable and cost-effective sea freight services for all your shipping needs, from FCL to LCL shipments worldwide. Our extensive network ensures your cargo reaches its destination safely and on time.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Full Container Load (FCL)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Less than Container Load (LCL)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Refrigerated Cargo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Break Bulk Shipments</span>
                  </li>
                </ul>
                <Link
                  to="/services/ocean-freight"
                  className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Air Freight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-primary-500 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/358220/pexels-photo-358220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Air Freight" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full">
                  <Plane className="h-6 w-6 text-primary-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Air Freight</h3>
                <p className="text-gray-600 mb-4">
                  Fast and efficient air freight solutions for time-sensitive cargo and international shipments. We offer competitive rates and flexible scheduling to meet your urgent delivery needs.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Express Air Freight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Consolidated Air Freight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Charter Services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Temperature-Controlled Cargo</span>
                  </li>
                </ul>
                <Link
                  to="/services/air-freight"
                  className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Land Transport */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-accent-500 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Land Transport" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full">
                  <Truck className="h-6 w-6 text-accent-500" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Land Transport</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive road transportation services including FTL, LTL, and specialized equipment. Our extensive network ensures reliable delivery across continental routes.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Full Truck Load (FTL)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Less than Truck Load (LTL)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Specialized Equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Intermodal Solutions</span>
                  </li>
                </ul>
                <Link
                  to="/services/land-transport"
                  className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Warehousing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-700 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Warehousing" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full">
                  <Package className="h-6 w-6 text-gray-700" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Warehousing</h3>
                <p className="text-gray-600 mb-4">
                  Secure storage solutions with inventory management systems for efficient distribution. Our strategically located warehouses offer flexible space and value-added services.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Short & Long-term Storage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Inventory Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Order Fulfillment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Cross-Docking Services</span>
                  </li>
                </ul>
                <Link
                  to="/services/warehousing"
                  className="inline-block bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Customs Clearance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-secondary-600 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Customs Clearance" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full">
                  <FileText className="h-6 w-6 text-secondary-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Customs Clearance</h3>
                <p className="text-gray-600 mb-4">
                  Expert customs brokerage services to navigate complex international regulations. Our specialists ensure smooth and compliant customs processes for your shipments.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Import/Export Documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Customs Compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Duty & Tax Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Regulatory Consulting</span>
                  </li>
                </ul>
                <Link
                  to="/services/customs-clearance"
                  className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            {/* Supply Chain Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-primary-600 relative overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3888149/pexels-photo-3888149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Supply Chain Solutions" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white p-3 rounded-full">
                  <RefreshCw className="h-6 w-6 text-primary-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Supply Chain Solutions</h3>
                <p className="text-gray-600 mb-4">
                  End-to-end supply chain management to optimize your logistics operations. We design tailored solutions that improve efficiency and reduce costs throughout your supply chain.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Supply Chain Optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Logistics Consulting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Visibility & Tracking Solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span> 
                    <span className="text-gray-600">Risk Management</span>
                  </li>
                </ul>
                <Link
                  to="/services/supply-chain"
                  className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand that different industries have unique shipping and logistics requirements. Our specialized solutions are tailored to meet the specific needs of various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Retail & E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Specialized logistics solutions for retail and e-commerce businesses, including order fulfillment, last-mile delivery, and returns management.
              </p>
              <Link
                to="/industries/retail"
                className="text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive logistics support for manufacturing companies, including raw material sourcing, just-in-time delivery, and finished goods distribution.
              </p>
              <Link
                to="/industries/manufacturing"
                className="text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Automotive</h3>
              <p className="text-gray-600 mb-4">
                Specialized solutions for the automotive industry, including component transportation, assembly line supply, and finished vehicle logistics.
              </p>
              <Link
                to="/industries/automotive"
                className="text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pharmaceuticals</h3>
              <p className="text-gray-600 mb-4">
                Temperature-controlled and secure logistics for pharmaceutical products, ensuring compliance with regulatory requirements and product integrity.
              </p>
              <Link
                to="/industries/pharmaceuticals"
                className="text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technology</h3>
              <p className="text-gray-600 mb-4">
                Specialized handling and security for high-value technology products, with efficient distribution networks for fast delivery.
              </p>
              <Link
                to="/industries/technology"
                className="text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
              >
                Learn More →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-card">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Food & Beverage</h3>
              <p className="text-gray-600 mb-4">
                Temperature-controlled transportation and storage for perishable goods, ensuring food safety and compliance with industry regulations.
              </p>
              <Link
                to="/industries/food-beverage"
                className="text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Why Choose OceanWay</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When you partner with OceanWay, you gain access to a world of logistics expertise and a commitment to excellence that sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-secondary-500/10 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Globe className="h-10 w-10 text-secondary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Global Network</h3>
              <p className="text-gray-600">
                Operations in over 120 countries with local expertise and global reach to serve your needs worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-500/10 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Shield className="h-10 w-10 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Reliability & Security</h3>
              <p className="text-gray-600">
                Advanced tracking systems and stringent security protocols to ensure your cargo arrives safely and on time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-accent-500/10 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <RefreshCw className="h-10 w-10 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Flexible Solutions</h3>
              <p className="text-gray-600">
                Customized logistics solutions tailored to your specific business needs, regardless of shipment size or destination.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-success-500/10 p-4 rounded-full inline-flex items-center justify-center mb-6">
                <Users className="h-10 w-10 text-success-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Experienced professionals who provide personalized service and industry expertise to optimize your supply chain.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-500">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Shipping & Logistics?</h2>
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
              to="/tracking"
              className="bg-transparent hover:bg-secondary-600 text-white border-2 border-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
            >
              Track a Shipment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;