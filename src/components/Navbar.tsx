import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Ship, Menu, X, ChevronDown } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    if (!servicesDropdownOpen) {
      setAboutDropdownOpen(false);
    }
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
    if (!aboutDropdownOpen) {
      setServicesDropdownOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <Ship className={`h-8 w-8 ${scrolled ? 'text-primary-500' : 'text-white'}`} />
            <span className={`text-xl font-bold font-heading ${scrolled ? 'text-primary-500' : 'text-white'}`}>
              OceanWay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => `
                font-medium hover:text-accent-500 transition-colors
                ${scrolled 
                  ? (isActive ? 'text-primary-500' : 'text-gray-700') 
                  : (isActive ? 'text-accent-500' : 'text-white')}
              `}
            >
              Home
            </NavLink>

            <div className="relative group">
              <button
                onClick={toggleServicesDropdown}
                className={`flex items-center space-x-1 font-medium group-hover:text-accent-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-md shadow-card py-2">
                  <Link to="/services/ocean-freight" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500">
                    Ocean Freight
                  </Link>
                  <Link to="/services/air-freight" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500">
                    Air Freight
                  </Link>
                  <Link to="/services/land-transport" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500">
                    Land Transport
                  </Link>
                  <Link to="/services/warehousing" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500">
                    Warehousing
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                onClick={toggleAboutDropdown}
                className={`flex items-center space-x-1 font-medium group-hover:text-accent-500 transition-colors ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span>About</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="bg-white rounded-md shadow-card py-2">
                  <Link to="/about/company" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500">
                    Company
                  </Link>
                  <Link to="/about/team" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500">
                    Our Team
                  </Link>
                  <Link to="/about/history" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500">
                    History
                  </Link>
                </div>
              </div>
            </div>

            <NavLink 
              to="/tracking" 
              className={({ isActive }) => `
                font-medium hover:text-accent-500 transition-colors
                ${scrolled 
                  ? (isActive ? 'text-primary-500' : 'text-gray-700') 
                  : (isActive ? 'text-accent-500' : 'text-white')}
              `}
            >
              Tracking
            </NavLink>

            <NavLink 
              to="/news" 
              className={({ isActive }) => `
                font-medium hover:text-accent-500 transition-colors
                ${scrolled 
                  ? (isActive ? 'text-primary-500' : 'text-gray-700') 
                  : (isActive ? 'text-accent-500' : 'text-white')}
              `}
            >
              News
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => `
                font-medium hover:text-accent-500 transition-colors
                ${scrolled 
                  ? (isActive ? 'text-primary-500' : 'text-gray-700') 
                  : (isActive ? 'text-accent-500' : 'text-white')}
              `}
            >
              Contact
            </NavLink>

            <Link
              to="/contact"
              className="bg-accent-500 text-white px-4 py-2 rounded hover:bg-accent-600 transition-colors"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-6 w-6 ${scrolled ? 'text-primary-500' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${scrolled ? 'text-primary-500' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link
                to="/"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-primary-500"
              >
                Home
              </Link>

              <div>
                <button
                  onClick={toggleServicesDropdown}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-500"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesDropdownOpen && (
                  <div className="pl-4 space-y-2 mt-1">
                    <Link
                      to="/services/ocean-freight"
                      onClick={closeMenu}
                      className="block py-2 text-gray-600 hover:text-primary-500"
                    >
                      Ocean Freight
                    </Link>
                    <Link
                      to="/services/air-freight"
                      onClick={closeMenu}
                      className="block py-2 text-gray-600 hover:text-primary-500"
                    >
                      Air Freight
                    </Link>
                    <Link
                      to="/services/land-transport"
                      onClick={closeMenu}
                      className="block py-2 text-gray-600 hover:text-primary-500"
                    >
                      Land Transport
                    </Link>
                    <Link
                      to="/services/warehousing"
                      onClick={closeMenu}
                      className="block py-2 text-gray-600 hover:text-primary-500"
                    >
                      Warehousing
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={toggleAboutDropdown}
                  className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-primary-500"
                >
                  <span>About</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${aboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {aboutDropdownOpen && (
                  <div className="pl-4 space-y-2 mt-1">
                    <Link
                      to="/about/company"
                      onClick={closeMenu}
                      className="block py-2 text-gray-600 hover:text-primary-500"
                    >
                      Company
                    </Link>
                    <Link
                      to="/about/team"
                      onClick={closeMenu}
                      className="block py-2 text-gray-600 hover:text-primary-500"
                    >
                      Our Team
                    </Link>
                    <Link
                      to="/about/history"
                      onClick={closeMenu}
                      className="block py-2 text-gray-600 hover:text-primary-500"
                    >
                      History
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/tracking"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-primary-500"
              >
                Tracking
              </Link>

              <Link
                to="/news"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-primary-500"
              >
                News
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-primary-500"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="block mt-4 bg-accent-500 text-white px-4 py-2 rounded text-center hover:bg-accent-600 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;