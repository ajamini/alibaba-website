import React from 'react';
import { Link } from 'react-router-dom';
import { Ship, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Ship className="h-8 w-8 text-accent-500" />
              <span className="text-xl font-bold">American Shipping and Logistics</span>
            </div>
            <p className="text-primary-200 mb-6">
              Your trusted partner for global shipping and logistics solutions. Delivering excellence across oceans and continents since 1995.
            </p>
          </div>

          {/* Quick Links */}

          {/* Services */}


          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 border-b border-primary-400 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent-500 mt-0.5" />
                <span className="text-primary-200">American Shipping and Logistics Inc<br />
                5030 Firestone Blvd<br />
                South Gate, CA 90280<br />
                United States</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-500" />
                <span className="text-primary-200">+1 (925) 570-3835</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-500" />
                <a href="mailto:info@americanshippingandlogistics.com" className="text-primary-200 hover:text-accent-500 transition-colors">info@americanshippingandlogistics.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-500 mt-12 pt-8 text-center text-primary-300 text-sm">
          <p>&copy; {new Date().getFullYear()} American Shipping and Logistics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;