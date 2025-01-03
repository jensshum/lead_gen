import React from 'react';
import { motion } from 'framer-motion';
import { industries } from '../../data/industries';

interface Props {
  onSelect: (industry: string) => void;
}

export const IndustrySelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-primary-dark text-center mb-12">
        Select Your Target Industry
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((industry, index) => (
          <motion.button
            key={industry.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => onSelect(industry.name)}
            className="p-6 bg-white rounded-xl border-2 border-background-light hover:border-primary hover:shadow-lg transition-all duration-300 text-lg font-medium text-primary-dark"
          >
            {industry.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
};