import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  number: string;
  text: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center p-6"
    >
      <h3 className="text-4xl md:text-5xl font-bold mb-2">{number}</h3>
      <p className="text-primary-200 text-lg">{text}</p>
    </motion.div>
  );
};

export default StatCard;