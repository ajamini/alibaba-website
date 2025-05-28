import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Users, History, Target, Award, Globe } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-primary-600">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div 
            className="w-full h-full bg-no-repeat bg-cover bg-center opacity-20"
            style={{ 
              backgroundImage: "url('https://images.pexels.com/photos/1554646/pexels-photo-1554646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
            }}
          />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About OceanWay</h1>
            <p className="text-xl text-primary-100">
              Your trusted global shipping and logistics partner since 1995, committed to excellence in every shipment.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-500 mb-6">Our Company</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1995, OceanWay has grown from a small regional shipping company to a global logistics provider with operations in over 120 countries. Our success is built on our commitment to reliability, efficiency, and customer satisfaction.
              </p>
              <p className="text-gray-600 mb-4">
                With headquarters in Port City and regional offices strategically located across the globe, we offer comprehensive shipping and logistics solutions tailored to meet the unique needs of businesses of all sizes, from small enterprises to multinational corporations.
              </p>
              <p className="text-gray-600">
                Our team of experienced professionals combines industry expertise with innovative technology to optimize supply chains, ensure timely deliveries, and provide exceptional service to our clients worldwide.
              </p>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Container ship" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Mission, Vision & Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide us in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-card"
            >
              <Target className="h-12 w-12 text-secondary-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, efficient, and sustainable shipping and logistics solutions that connect businesses to global markets, contributing to their growth and success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-card"
            >
              <Globe className="h-12 w-12 text-secondary-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted and innovative global shipping company, setting industry standards for reliability, efficiency, and customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-card"
            >
              <Award className="h-12 w-12 text-secondary-500 mb-6" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">•</span> 
                  <span>Integrity in all our dealings</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">•</span> 
                  <span>Excellence in service delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">•</span> 
                  <span>Innovation in solutions and processes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">•</span> 
                  <span>Sustainability in our operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 mr-2">•</span> 
                  <span>Respect for our team and partners</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who guide our company's vision and strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Robert Anderson</h3>
              <p className="text-secondary-500 font-medium mb-3">Chief Executive Officer</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Over 30 years of experience in global shipping and logistics management.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="COO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Lisa Chen</h3>
              <p className="text-secondary-500 font-medium mb-3">Chief Operations Officer</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Expertise in optimizing global supply chains and operational excellence.
              </p>
            </div>

            <div className="text-center">
              <div className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="CTO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">David Martinez</h3>
              <p className="text-secondary-500 font-medium mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 max-w-xs mx-auto">
                Leading digital transformation and technological innovation in logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary-500 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones in our company's history that have shaped who we are today.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 text-right hidden md:block">
                    <h3 className="text-xl font-bold text-primary-500 mb-2">1995</h3>
                    <p className="text-gray-600">OceanWay is founded with a small fleet of cargo ships serving regional routes.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center z-10">
                    <History className="h-5 w-5 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left text-center md:mt-0 mt-10">
                    <h3 className="text-xl font-bold text-primary-500 mb-2 md:hidden">1995</h3>
                    <p className="text-gray-600 md:hidden">OceanWay is founded with a small fleet of cargo ships serving regional routes.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right text-center">
                    <h3 className="text-xl font-bold text-primary-500 mb-2">2005</h3>
                    <p className="text-gray-600">Expansion into international markets with the acquisition of EuroFreight Ltd.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center z-10">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-8 hidden md:block">
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 text-right hidden md:block">
                    <h3 className="text-xl font-bold text-primary-500 mb-2">2010</h3>
                    <p className="text-gray-600">Launch of integrated logistics services, including warehousing and supply chain management.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center z-10">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left text-center md:mt-0 mt-10">
                    <h3 className="text-xl font-bold text-primary-500 mb-2 md:hidden">2010</h3>
                    <p className="text-gray-600 md:hidden">Launch of integrated logistics services, including warehousing and supply chain management.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right text-center">
                    <h3 className="text-xl font-bold text-primary-500 mb-2">2015</h3>
                    <p className="text-gray-600">Introduction of digital tracking system and customer portal for real-time shipment monitoring.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center z-10">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-8 hidden md:block">
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 text-right hidden md:block">
                    <h3 className="text-xl font-bold text-primary-500 mb-2">2020</h3>
                    <p className="text-gray-600">Implementation of sustainable shipping practices and carbon-neutral initiatives.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center z-10">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-8 md:text-left text-center md:mt-0 mt-10">
                    <h3 className="text-xl font-bold text-primary-500 mb-2 md:hidden">2020</h3>
                    <p className="text-gray-600 md:hidden">Implementation of sustainable shipping practices and carbon-neutral initiatives.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 md:text-right text-center">
                    <h3 className="text-xl font-bold text-primary-500 mb-2">2023</h3>
                    <p className="text-gray-600">Expansion of global operations to 120+ countries and launch of AI-powered logistics optimization platform.</p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-accent-500 flex items-center justify-center z-10">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div className="md:w-1/2 md:pl-8 hidden md:block">
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-500 text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with OceanWay</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            Join the thousands of businesses that trust OceanWay for their global shipping and logistics needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </>
  );
};

export default AboutPage;