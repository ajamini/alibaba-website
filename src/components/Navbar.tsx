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
            American Shipping and Logistics
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

            <NavLink 
              to="/rates" 
              className={({ isActive }) => `
                font-medium hover:text-accent-500 transition-colors
                ${scrolled 
                  ? (isActive ? 'text-primary-500' : 'text-gray-700') 
                  : (isActive ? 'text-accent-500' : 'text-white')}
              `}
            >
              Rates
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


              <Link
                to="/rates"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-primary-500"
              >
                Rates
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="block py-2 text-gray-700 hover:text-primary-500"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;