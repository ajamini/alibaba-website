import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Ship className="h-8 w-8 text-accent-500" />
              <span className="text-xl font-bold">OceanWay</span>
            </div>
            <p className="text-primary-200 mb-6">
              Your trusted partner for global shipping and logistics solutions. Delivering excellence across oceans and continents since 1995.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-200 hover:text-accent-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-accent-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-accent-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary-200 hover:text-accent-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary-400 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-200 hover:text-accent-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-200 hover:text-accent-500 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/tracking" className="text-primary-200 hover:text-accent-500 transition-colors">Track Shipment</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-200 hover:text-accent-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/news" className="text-primary-200 hover:text-accent-500 transition-colors">News & Updates</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-accent-500 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary-400 pb-2">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/ocean-freight" className="text-primary-200 hover:text-accent-500 transition-colors">Ocean Freight</Link>
              </li>
              <li>
                <Link to="/services/air-freight" className="text-primary-200 hover:text-accent-500 transition-colors">Air Freight</Link>
              </li>
              <li>
                <Link to="/services/land-transport" className="text-primary-200 hover:text-accent-500 transition-colors">Land Transport</Link>
              </li>
              <li>
                <Link to="/services/warehousing" className="text-primary-200 hover:text-accent-500 transition-colors">Warehousing</Link>
              </li>
              <li>
                <Link to="/services/customs-clearance" className="text-primary-200 hover:text-accent-500 transition-colors">Customs Clearance</Link>
              </li>
              <li>
                <Link to="/services/supply-chain" className="text-primary-200 hover:text-accent-500 transition-colors">Supply Chain Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary-400 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-500 mt-0.5" />
                <span className="text-primary-200">123 Shipping Lane, Harbor District, Port City, PC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-500" />
                <span className="text-primary-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-500" />
                <a href="mailto:info@oceanway.com" className="text-primary-200 hover:text-accent-500 transition-colors">info@oceanway.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-500 mt-12 pt-8 text-center text-primary-300 text-sm">
          <p>&copy; {new Date().getFullYear()} OceanWay Shipping Line. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;