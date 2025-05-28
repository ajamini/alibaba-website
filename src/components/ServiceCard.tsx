import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-card p-6 transition-all hover:shadow-lg"
    >
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-secondary-500 font-medium hover:text-secondary-600 transition-colors"
      >
        Learn More <ChevronRight className="h-4 w-4 ml-1" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;